import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../../layout/MainLayout";

const CategoriesProductsPage = () => {
  const product = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      fetch(`https://dummyjson.com/products/category/${product.id}`)
        .then((res) => res.json())
        .then((data) => setData(data.products));
    } catch (err) {
      throw err;
    }
  }, [product.id]);

  return (
    <MainLayout>
      <div className="category-product d-flex flex-wrap gap-3 my-3 ">
        {data.map((item) => (
          <div
            className="card rounded shadow-lg"
            style={{ width: "18rem" }}
            key={item.id}
          >
            <div
              className="rounded-top"
              style={{
                backgroundImage: `url(${item.thumbnail})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "contain",
                height: "200px",
              }}
            ></div>
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p>Rating {item.rating}⭐</p>
                <p>₹ {item.price}/-</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default CategoriesProductsPage;
