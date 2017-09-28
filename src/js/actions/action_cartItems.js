import action_types from './action_types' ;

export function addCartItem(cartItem) {
    return {
        type: action_types.ADD_CART_ITEM,
        payload: cartItem
    };
}

export function removeCartItem(cartItem) {
    return {
        type: action_types.REMOVE_CART_ITEM,
        payload: cartItem
    };
}