import action_types from '../actions/action_types';

let defaultCategories = [
    {
        id: 1,
        position: 1,
        name: 'خضروات مجهزة',
        image: 'assets/images/menu2.svg'
    },
    {
        id: 2,
        position: 2,
        name: 'خضروات لهلوبة',
        image: 'assets/images/menu3.svg'
    },
    {
        id: 3,
        position: 3,
        name: 'فواكة لهلوبة',
        image: 'assets/images/menu4.svg'
    }
];


export default function (state = defaultCategories, action) {
    // switch (action.type) {
    //     case action_types.ADD_CART_ITEM:
    //         let elementAdded = state.find( elem => elem.id == action.payload.id);
    //         elementAdded.amount++;
    //         elementAdded.inShop = true;
    //         return [
    //             ...state.filter(elem => elem.id != action.payload.id),
    //             elementAdded
    //         ];
    //     // break;
    //     case action_types.REMOVE_CART_ITEM:
    //         let elementRemoved = state.find( elem => elem.id == action.payload.id);
    //         if(elementRemoved.amount > 0) {
    //             elementRemoved.amount--;
    //             return [
    //                 ...state.filter(elem => elem.id != action.payload.id),
    //                 elementRemoved
    //             ];
    //         }
    //         break;
    //     case action_types.REMOVE_FROM_SHOP:
    //         let elementRemovedFromShop = state.find( elem => elem.id == action.payload.id);
    //         elementRemovedFromShop.amount = 0;
    //         elementRemovedFromShop.inShop = false;
    //         return [
    //             ...state.filter(elem => elem.id != action.payload.id),
    //             elementRemovedFromShop
    //         ];
    // }
    return state;
}