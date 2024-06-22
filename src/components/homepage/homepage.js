import React from "react";
import { useState, useEffect } from "react";
import "./homepage.css";
import { Link, useNavigate } from "react-router-dom";

const Homepage = ({ addToCart }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error, "Api error");
      });
  }, []);

  return (
    <div className="container">
      <div className="homepage_container">
        {data?.map((item) => {
          return (
            <div key={item?.id} className="homepage_box">
              <Link to={`/${item.id}`} className="homepage_link">
                <img
                  src={item?.image}
                  width={200}
                  height={200}
                  alt="product image"
                  className="image"
                />
                <div className="homepage_title">{item?.title}</div>
                <div className="homepage_price">Price: {item?.price}</div>
              </Link>
              <button
                onClick={() => {
                  addToCart(item);
                  navigate("/cart");
                }}
                className="homepage_btn"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
