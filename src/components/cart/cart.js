import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total;
  };

  const totalAmount = getTotalPrice();

  return (
    <div className="container">
      <div className="cart_page">Cart Page</div>
      {cart.length === 0 ? (
        <div className="cart_empty">Cart is empty</div>
      ) : (
        <>
          {cart?.map((item) => {
            return (
              <div key={item?.id} className="cart_box">
                <span className="cart_productName">{item.title}</span> -{" "}
                <span className="cart_productPrice">
                  {item.price} x {item.quantity}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove_btn"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </>
      )}
      {totalAmount ? (
        <div className="cart_total">Total Amount: {totalAmount}</div>
      ) : (
        <>
          <Link to="/" className="link">
            <button className="add_btn">Please add product</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
