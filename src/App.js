import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import ProductDetails from "./components/productDetails/productDetails";
import Cart from "./components/cart/cart";
import { useState, useEffect } from "react";
import Header from "./components/header/header";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          return prevCart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          return prevCart.filter((item) => item.id !== productId);
        }
      }

      return prevCart;
    });
  };

  let cartCount = 0;
  for (let i = 0; i < cart.length; i++) {
    cartCount += cart[i].quantity;
  }

  return (
    <>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Homepage addToCart={addToCart} />} />
        <Route path="/:id" element={<ProductDetails addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
