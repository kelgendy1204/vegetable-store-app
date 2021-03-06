import action_types from '../actions/action_types';

let defaultCarts = [
    {
        id: 1,
        position: 1,
        name: 'طماطم بلدي',
        image: 'assets/images/tmatm.jpg',
        description: 'مستورد وذو جودة عالية',
        category_id: 1,
        price: 7,
        inShop: false,
        favorite: false,
        amount: 0,
        discount: 10
    },
    {
        id: 2,
        position: 2,
        name: 'تفاح امريكي',
        image: 'assets/images/tmatm.jpg',
        description: 'مستورد وذو جودة عالية',
        category_id: 1,
        price: 12,
        inShop: false,
        favorite: false,
        amount: 0,
        discount: 0
    },
    {
        id: 3,
        position: 3,
        name: 'منجو اسماعيلي',
        image: 'assets/images/tmatm.jpg',
        description: 'مستورد وذو جودة عالية',
        category_id: 1,
        price: 14,
        inShop: false,
        favorite: false,
        amount: 0,
        discount: 15
    },
    {
        id: 4,
        position: 4,
        name: 'فراخ بلدي',
        image: 'assets/images/tmatm.jpg',
        description: 'مستورد وذو جودة عالية',
        category_id: 3,
        price: 16,
        inShop: false,
        favorite: false,
        amount: 0,
        discount: 5
    },
];


export default function (state = defaultCarts, action) {
    switch (action.type) {
        case action_types.ADD_CART_ITEM:
            let elementAdded = state.find( elem => elem.id == action.payload.id);
            elementAdded.amount++;
            elementAdded.inShop = true;
            return [
                ...state.filter(elem => elem.id != action.payload.id),
                elementAdded
            ];
        // break;
        case action_types.REMOVE_CART_ITEM:
            let elementRemoved = state.find( elem => elem.id == action.payload.id);
            if(elementRemoved.amount > 0) {
                elementRemoved.amount--;
                return [
                    ...state.filter(elem => elem.id != action.payload.id),
                    elementRemoved
                ];
            }
            break;
        case action_types.REMOVE_FROM_SHOP:
            let elementRemovedFromShop = state.find( elem => elem.id == action.payload.id);
            elementRemovedFromShop.amount = 0;
            elementRemovedFromShop.inShop = false;
            return [
                ...state.filter(elem => elem.id != action.payload.id),
                elementRemovedFromShop
            ];
        case action_types.TOGGLE_FAVORITE:
            let favoratedElement = state.find( elem => elem.id == action.payload.id);
            favoratedElement.favorite = !favoratedElement.favorite;
            return [
                ...state.filter(elem => elem.id != action.payload.id),
                favoratedElement
            ];
        case action_types.SHOW_FAVORITES:
            return [
                ...state.filter(elem => elem.favorite),
            ];
    }
    return state;
}