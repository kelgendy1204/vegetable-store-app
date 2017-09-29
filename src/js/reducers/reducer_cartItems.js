import action_types from '../actions/action_types';

let defaultCarts = [
    {
        id: 1,
        position: 1,
        name: 'طماطم بلدي',
        image: 'assets/images/tmatm.jpg',
        description: 'مستورد وذو جودة عالية',
        price: 7,
        amount: 0,
        discount: 10
    },
    {
        id: 2,
        position: 2,
        name: 'تفاح امريكي',
        image: 'assets/images/tmatm.jpg',
        description: 'مستورد وذو جودة عالية',
        price: 12,
        amount: 0,
        discount: 0
    },
    {
        id: 3,
        position: 3,
        name: 'منجو اسماعيلي',
        image: 'assets/images/tmatm.jpg',
        description: 'مستورد وذو جودة عالية',
        price: 14,
        amount: 0,
        discount: 15
    },
    {
        id: 4,
        position: 4,
        name: 'فراخ بلدي',
        image: 'assets/images/tmatm.jpg',
        description: 'مستورد وذو جودة عالية',
        price: 16,
        amount: 0,
        discount: 5
    },
];


export default function (state = defaultCarts, action) {
    switch (action.type) {
        case action_types.ADD_CART_ITEM:
            let elementAdded = state.find( elem => elem.id == action.payload.id);
            elementAdded.amount++;
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
            return [
                ...state.filter(elem => elem.id != action.payload.id),
                elementRemovedFromShop
            ];
    }
    return state;
}