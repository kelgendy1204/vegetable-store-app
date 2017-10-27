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

export function removeFromShop(cartItem) {
    return {
        type: action_types.REMOVE_FROM_SHOP,
        payload: cartItem
    };
}

export function toggleFavorite(cartItem) {
    return {
        type: action_types.TOGGLE_FAVORITE,
        payload: cartItem
    };
}