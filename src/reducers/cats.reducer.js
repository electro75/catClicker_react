import roberto from '../cat_images/img_3.jpg';
import subhash from '../cat_images/img_4.jpg';
import luis from '../cat_images/img_5.jpg';
import gabriella from '../cat_images/img_6.jpg';

function getCats() {
    return [
        { name: 'Roberto', src: roberto , clicks: 0, index: 0 },
        { name: 'Subhash', src: subhash , clicks: 0, index: 1 },
        { name: 'Luis', src: luis , clicks: 0, index: 2 },
        { name: 'Gabriella', src: gabriella , clicks: 0, index: 3 }
    ]    
}

let cats = getCats();

export default function(state = cats, action) {
    switch(action.type) {
        case 'CAT_CLICK':
            return state.map((cat, index) => action.payload.index === index ? { ...cat, clicks: cat.clicks + 1 } : cat)

        default :
            return state;
    }
}