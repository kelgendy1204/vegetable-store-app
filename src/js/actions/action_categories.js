import action_types from './action_types' ;

export function changeActiveCategory(categoryId) {
    return {
        type: action_types.CHANGE_ACTIVE_CATEGORY,
        payload: categoryId
    };
}