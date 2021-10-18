import {combineReducers} from 'redux';
import { GET_TYPES } from '../actions/types'
import {createActionMiddleware} from "../utils/genericMiddleware"
import {createActionReducer} from "../utils/genericReducer"

export const typesReducer = combineReducers({
    types: createActionReducer(GET_TYPES)
})

const getTypesUrl = (action) => {
    return {
        url: `/api/types`,
        method: 'GET'
    }
}

export const typesMiddleware = [
    createActionMiddleware(GET_TYPES, getTypesUrl),
]
