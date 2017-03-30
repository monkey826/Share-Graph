import { FETCH_COMPARE } from '../actions/action-type';

export default function(state = [],action){
    switch(action.type){
        case FETCH_COMPARE : 
            return [
                ...state,
                action.payload.data
            ]
        default : 
            return state;
    }
}