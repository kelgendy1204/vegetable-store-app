import action_types from '../actions/action_types';


export default function (state = [], action) {
    switch (action.type) {
        case action_types.ADD_CART_ITEM:
          return [
            ...state,
            {
                id: action.payload.id,
                amount: action.payload.amount
            }
        ];
    }
    return state;
}