const OPEN_LEFTMENU = 'OPEN_LEFTMENU';

export default function(state = [],action){

    switch(action.type){
        case OPEN_LEFTMENU : 
            return [
                ...state,
                action
            ]
        default : 
            return state;
    }
}