import { add_to_cart } from '../constants';

const initialStates = {
    cardData: []
}

export default function cardItems(initialStates, action) {
    switch (action.type) {
        case add_to_cart:
            return {
                ...state,
                cardData: action.data
            }
            break;

        default:
            return state
            
            
    }
}