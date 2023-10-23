import React from "react";
import ReactButton from "../../components/ReactButton";
import { Link } from "react-router-dom";
const ProductlistCard = ({ data, onAddToCart }) => {
  return (
    <div className="card rounded shadow-lg" style={{ width: "18rem" }}>
      <div
        className="rounded-top"
        style={{
          backgroundImage: `url(${data.thumbnail})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "contain",
          height: "200px",
        }}
      ></div>
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <p>Rating {data.rating}⭐</p>
          <p>₹ {data.price}/-</p>
        </div>
        <div className="d-flex gap-2 justify-content-center ">
          <ReactButton
            btnText={"Add Cart"}
            btnClass="btn-outline-dark"
            onClickfn={() => onAddToCart(data)}
          />
          <Link to={`/products/${data.id}`}>
            <ReactButton
              btnText="View Product"
              btnClass="btn-outline-danger text-decoration-none"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductlistCard;
