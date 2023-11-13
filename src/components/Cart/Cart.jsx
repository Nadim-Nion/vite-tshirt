import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else {
        message = <div>
            <h3>Rich Kids</h3>
            <p><small>Thanks for buying</small></p>
        </div>

    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
            <p className={`bold border ${cart.length === 3 ? 'purple' : 'green'}`}>Something</p>
            {cart.length > 2 ? <span>Buy again</span> : <span>You are poor</span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={() => handleRemoveFromCart(tshirt._id)}
                >X</button></p>)
            }
            {
                cart.length === 2 && <p>Double Bonus</p>
            }
            {
                cart.length === 3 || <p>Num of Item is not 3</p>
            }
        </div>
    );
};

export default Cart;