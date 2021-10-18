const PREFIX = 'users';
export const GET_USERS = PREFIX + ':get';

export function getUsers() {
    return {
        type: GET_USERS
    }
}