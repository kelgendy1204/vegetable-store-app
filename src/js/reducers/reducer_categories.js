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
    return state;
}