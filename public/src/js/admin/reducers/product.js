import { PRODUCT } from '../actions/product';

export default function getUser(state = [], action) {
    switch(action.type) {
        case PRODUCT:
            return state;
        default:
            return state;
    }
}