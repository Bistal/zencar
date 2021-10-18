import {loadJSON} from "./loadJSON";
// import actions, { LOADED_USER_ACTION } from "../../modules/user/actions";

export const ACTION_UPDATE_SUFFIX = ':update';

export function createLoadingMiddleware(loadingAction, loadedAction, prepareCall, echoOriginalAction = false) {
    const genericMiddleware = store => next => action => {
        switch(action.type) {
            case loadingAction: {
                // Allow the action to continue down to the reducer
                next(action);

                const config = prepareCall(action, store);
                const originalAction = echoOriginalAction ? action : undefined;
                return loadJSON(config).then(result => {
                    const resultAction = {
                        type: loadedAction,
                        result
                    };
                    if(echoOriginalAction) {
                        resultAction.originalAction = action;
                    }
                    store.dispatch(resultAction);
                }, setupErrorHandler(store, loadedAction, undefined, originalAction));
            }
            default:
                return next(action);
        }
    };

    return genericMiddleware;
}

function noOp() {}
export function createActionMiddleware(myAction, prepareCall, successCallback = noOp) {
    let latestRequest;
    const myActionUpdate = myAction + ACTION_UPDATE_SUFFIX;
    const genericMiddleware = store => next => action => {
        switch(action.type) {
            case myAction: {
                latestRequest = action;
                store.dispatch({
                    actionId: action.actionId,
                    type: myActionUpdate
                });

                const config = prepareCall(action, store);
                return loadJSON(config).then(res => {
                    if(latestRequest === action) {
                        store.dispatch({
                            actionId: action.actionId,
                            type: myActionUpdate,
                            result: res.result
                        });
                        successCallback(store, action, res);
                    }
                }, err => {
                    if(latestRequest === action) {
                        const handler = setupErrorHandler(store, myActionUpdate, action.actionId);
                        handler(err);
                    }
                });
            }
            default:
                return next(action);
        }
    };

    return genericMiddleware;
}

function setupErrorHandler(store, actionName, actionId, originalAction) {
    return error => {
        // If we are unable to access the server due to a login issue then we trigger the getUser
        // action, so that the rest of the app can get into sync with the missing user.
        // If the failure was the get user action then we need to stop!
        // if(error.httpStatus === 401 && error.httpResponse === 'User is not logged in' && actionName !== LOADED_USER_ACTION) {
        //     store.dispatch(actions.getUser());
        // }
        store.dispatch({
            actionId,
            originalAction,
            type: actionName,
            error
        });
    }
}