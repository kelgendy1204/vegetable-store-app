import action_types from './action_types' ;

export function filterBy(search) {
    return {
        type: action_types.CHANGE_FILTER_BY,
        payload: search
    };
}