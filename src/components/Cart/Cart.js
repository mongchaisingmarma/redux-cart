import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h1>This is Cart</h1>
            {
                cart.map(pd => <li key={pd.cartId}> {pd.name} 
                <button onClick={() => removeFromCart(pd.cartId)}>X</button> 
                </li>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);