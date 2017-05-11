import { USER } from '../actions/user';

export default function getUser(state = {}, action) {
    switch(action.type) {
        case USER:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}