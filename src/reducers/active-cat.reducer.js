

export default function(state = null, action) {
    switch(action.type){
        case 'CAT_SELECTED':
            return action.payload.index

        default:
            return state
    }
    
}