import action_types from '../actions/action_types';

let defaultCarts = [
    {
        id: 1,
        image: '../images/tmatm.jpg',
        price: 7,
        discount: 10
    },
    {
        id: 2,
        image: '../images/tmatm.jpg',
        price: 12,
        discount: 0
    },
    {
        id: 3,
        image: '../images/tmatm.jpg',
        price: 14,
        discount: 15
    },
    {
        id: 4,
        image: '../images/tmatm.jpg',
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
                image: action.payload.image,
                price: action.payload.price,
                discount: action.payload.discount
            }
        ]
    }
    return state;
}