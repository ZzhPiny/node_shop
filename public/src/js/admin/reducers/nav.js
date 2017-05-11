import { NAV } from '../actions/nav';

export default function (state = [], action) {
    
    switch(action.type) {
        case NAV:
            return state;
        default:
            return state;
    }
}