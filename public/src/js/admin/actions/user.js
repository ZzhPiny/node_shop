export const USER = 'USER';

export function getUser(data) {
    return {
        type: USER,
        data: data
    }
}