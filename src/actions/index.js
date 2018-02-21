const CAT_SELECTED = 'CAT_SELECTED'

export function selectCat(cat) {   //action for selecting the active cat
    return {
        type: CAT_SELECTED,
        payload: cat
    };
}

export function catClick(cat) {  //action for incrementing the 'clicks' property of the active cat.
    return {
        type: 'CAT_CLICK',
        payload: cat
    }
}