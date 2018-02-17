export default function(state = null, action) {
    switch(action.type){
        case 'CAT_SELECTED':
            console.log(action.payload);
            return action.payload

        case 'CAT_CLICK':
            return                  //The doubt is here, I am having trouble figuring out what exactly i need to return.
                                    //The objective here is to manipulate the active cat object and increase its 'clicks'
                                    //property by one.
        default:
            return state
    }
    
}