import React from "react";

const Product = ({ product, onAddToCart, onRemoveFromCart }) => {
  const { name, price } = product;

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(product);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title text-success">{name}</h5>
        <p className="card-text">Price: ${price}</p>
        <div className="d-grid gap-2 col-12 mx-auto">
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="btn btn-danger" onClick={handleRemoveFromCart}>
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
