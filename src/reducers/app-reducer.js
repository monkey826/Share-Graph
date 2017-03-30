import {CONTROL_MENU} from '../actions/action-type';
export default function(state = [],action){
    switch(action.type){
        case CONTROL_MENU: 
            return [
                ...state
            ]
        default:
            return state;
    }
}