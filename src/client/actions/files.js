import {ACTION_RESET_SUFFIX} from "../utils/genericReducer"
const PREFIX = 'files';
export const GET_FILES = PREFIX + ':get';

export function getFiles() {
    return {
        type: GET_FILES
    }
}