import {combineReducers} from 'redux';
import { GET_USERS } from '../actions/users'
import {createActionMiddleware} from "../utils/genericMiddleware"
import {createActionReducer} from "../utils/genericReducer"

export const usersReducer = combineReducers({
    users: createActionReducer(GET_USERS)
})


const getUsersUrl = (action) => {
    return {
        url: `/api/users`,
        method: 'GET'
    }
}

export const usersMiddleware = [
    createActionMiddleware(GET_USERS, getUsersUrl),
]
