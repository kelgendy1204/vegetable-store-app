import action_types from '../actions/action_types';

export default function (state = [], action) {
    switch (action.type) {
        case action_types.ADD_CART_ITEM:
            let elementAdded = state.find( elem => elem.id == action.payload.id);
            if ( elementAdded ){
                elementAdded.amount++;
                return [
                    ...state.filter(elem => elem.id != action.payload.id),
                    elementAdded
                ];
            } else {
                return [
                    ...state,
                    {
                        id: action.payload.id,
                        position: state.length + 1,
                        amount: action.payload.amount
                    }
                ];
            }
        // break;
        case action_types.REMOVE_CART_ITEM:
            let elementRemoved = state.find( elem => elem.id == action.payload.id);
            if ( elementRemoved ){
                if(elementRemoved.amount > 0) {
                    elementRemoved.amount--;
                    return [
                        ...state.filter(elem => elem.id != action.payload.id),
                        elementRemoved
                    ];
                }
            }
            break;
        case action_types.REMOVE_FROM_SHOP:
            let elementRemovedFromShop = state.find( elem => elem.id == action.payload.id);
            if ( elementRemovedFromShop ){
                elementRemovedFromShop.amount = 0;
                return [
                    ...state.filter(elem => elem.id != action.payload.id),
                    elementRemovedFromShop
                ];
            }
            break;
    }
    return state;
}