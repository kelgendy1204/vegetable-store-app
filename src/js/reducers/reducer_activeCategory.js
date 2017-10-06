import action_types from '../actions/action_types';

let defaultActiveCategory = 1;

export default function (state = defaultActiveCategory, action) {
    switch (action.type) {
        case action_types.CHANGE_ACTIVE_CATEGORY:
            return action.payload;
    }
    return state;
}