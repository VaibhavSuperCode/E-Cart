import React from "react";

const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Cart</h5>
        <ul className="list-group">
          {cart.map((product, index) => (
            <li className="list-group-item" key={index}>
              {product.name} - ${product.price}
              <button
                className="btn btn-danger"
                onClick={() => onRemoveFromCart(product)}
              >
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
