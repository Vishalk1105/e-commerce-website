import React from "react";

const ProductCarousel = ({ images }) => {
  const activeIndex = 0;
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide  rounded-top"
      data-bs-ride="carousel"
    >
      {images?.map((ele, i) => (
        <div key={ele}>
          <div className="carousel-inner">
            <div
              className={`carousel-item ${i === activeIndex ? "active" : ""}`}
            >
              <img src={ele} className="w-100 rounded-top" alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCarousel;
