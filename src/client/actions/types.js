import {ACTION_RESET_SUFFIX} from "../utils/genericReducer"
const PREFIX = 'types';
export const GET_TYPES = PREFIX + ':get';

export function getTypes() {
    return {
        type: GET_TYPES
    }
}