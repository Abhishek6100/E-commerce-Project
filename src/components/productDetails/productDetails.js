import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./prouctDetails.css";

const ProductDetails = ({ addToCart }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [prductData, setProductData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.log(error, "Api error");
      });
  }, [id]);

  return (
    <div className="container">
      <div className="">
        <img
          src={prductData?.image}
          alt={prductData?.title}
          width={200}
          height={200}
        />
      </div>
      <div className="title">{prductData?.title}</div>
      <div className="description">{prductData?.description}</div>
      <div className="title">{prductData?.category}</div>
      <div className="title">Rating: {prductData?.rating?.rate}</div>
      <div className="title">{prductData?.rating?.count}</div>
      <div className="price">Price: {prductData?.price}</div>
      <button
        className="pdp_btn"
        onClick={() => {
          addToCart(prductData);
          // navigate("/cart");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
