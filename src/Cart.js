import React from "react";

const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <div>
      <h5 className="card-title">Cart</h5>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onRemoveFromCart(product)}
                >
                  Remove from Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
