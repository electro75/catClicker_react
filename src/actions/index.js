const CAT_SELECTED = 'CAT_SELECTED'

export function selectCat(cat) {
    return {
        type: CAT_SELECTED,
        payload: cat
    };
}