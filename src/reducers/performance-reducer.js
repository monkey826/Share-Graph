import { FETCH_PERFORMANCE } from '../actions/action-type';

export default function(state = [],action){
    switch(action.type){
        case FETCH_PERFORMANCE : 
            return [
                ...state,
                action.payload.data
            ]
        default : 
            return state;
    }
}