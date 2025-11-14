import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./data";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((item) => item.id !== productToRemove.id));
  };

  return (
    <div className="App">
      <header>
        <h1>🛍️ Shopping Cart App</h1>
      </header>

      <div className="main-content">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cartItems={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
