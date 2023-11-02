import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import jsonData from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data] = useState(jsonData.data);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log(`Product ${product.name} is Added to the cart.`);
    console.log("List of products in the cart array:", [...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    const index = cart.findIndex((item) => item === product);

    if (index !== -1) {
      const updatedCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
      setCart(updatedCart);
      console.log(`Product ${product.name} is Removed from the cart.`);
      console.log("List of products in the cart array:", updatedCart);
    }
  };

  return (
    <div className="container">
      <h1 className="text-danger text-center">Product List</h1>
      {data.map((category, index) => (
        <div key={index}>
          <h2 className="text-success">{category.name}</h2>
          <div className="row">
            {category.productList.map((product, productIndex) => (
              <div className="col-md-4" key={productIndex}>
                <Product
                  product={product}
                  onAddToCart={handleAddToCart}
                  onRemoveFromCart={handleRemoveFromCart}
                />
              </div>
            ))}
            <div className="my-2">
              <hr />
            </div>
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col">
          <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
