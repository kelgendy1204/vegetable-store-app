import action_types from '../actions/action_types';

let defaultFilterBy = null;

export default function (state = defaultFilterBy, action) {
    switch (action.type) {
        case action_types.CHANGE_FILTER_BY:
            return action.payload;
    }
    return state;
}