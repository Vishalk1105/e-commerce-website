import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../../layout/MainLayout";
import ProductCarousel from "./ProductCarousel";

const ProductDetails = () => {
  const [productData, setProductData] = useState([]);
  const idData = useParams();

  useEffect(() => {
    try {
      fetch(`https://dummyjson.com/products/${idData.id}`)
        .then((res) => res.json())
        .then((data) => setProductData(data));
    } catch (err) {
      throw err;
    }
  }, [idData.id]);
  return (
    <MainLayout>
      <div className="card productCarousel">
        <ProductCarousel images={productData.images} />
        <div className="my-2 px-3 text-start">
          <h3>{productData.title}</h3>
          <h5>{productData.description}</h5>
          <h5>₹ {productData.price}</h5>
          <h5>Rating: {productData.rating} ⭐</h5>
          <h5>Discount Percentage: {productData.discountPercentage}%</h5>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
