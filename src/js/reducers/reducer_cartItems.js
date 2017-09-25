import action_types from '../actions/action_types';

let defaultCarts = [
    {
        id: 1,
        name: 'طماطم بلدي',
        image: 'assets/images/tmatm.jpg',
        description: 'مستورد وذو جودة عالية',
        price: 7,
        discount: 10
    },
    {
        id: 2,
        name: 'تفاح امريكي',
        image: 'assets/images/tmatm.jpg',
        description: 'مستورد وذو جودة عالية',
        price: 12,
        discount: 0
    },
    {
        id: 3,
        name: 'منجو اسماعيلي',
        image: 'assets/images/tmatm.jpg',
        description: 'مستورد وذو جودة عالية',
        price: 14,
        discount: 15
    },
    {
        id: 4,
        name: 'فراخ بلدي',
        image: 'assets/images/tmatm.jpg',
        description: 'مستورد وذو جودة عالية',
        price: 16,
        discount: 5
    },
];


export default function (state = defaultCarts, action) {
    switch (action.type) {
        case action_types.ADD_CART_ITEM:
          return [
            ...state,
            {
                id: action.payload.id,
                name: action.payload.name,
                image: action.payload.image,
                price: action.payload.price,
                discount: action.payload.discount
            }
        ];
    }
    return state;
}