import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";


const initialState = {
    cart: [],
    products : [
        {name: 'Lenevo laptop', id: 1},
        {name: 'Asus laptop', id: 2},
        {name: 'Dell laptop', id: 3},
        {name: 'HP laptop', id: 4},
        {name: 'Toshiba laptop', id: 5}
    ]
}


const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const newItem = {
                productId : action.id, 
                name : action.name, 
                cartId: state.cart.length + 1 
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};

        case REMOVE_FROM_CART:
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);
            return {...state, cart : remainingCart};

        default:
            return state;
    }
}

export default cartReducers;