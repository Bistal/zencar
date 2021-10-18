import {combineReducers} from 'redux';
import { GET_FILES } from '../actions/files'
import {createActionMiddleware} from "../utils/genericMiddleware"
import {createActionReducer} from "../utils/genericReducer"

export const filesReducer = combineReducers({
    files: createActionReducer(GET_FILES)
})

const getFilesUrl = (action) => {
    return {
        url: `/api/files`,
        method: 'GET'
    }
}

export const filesMiddleware = [
    createActionMiddleware(GET_FILES, getFilesUrl),
]
