import React from "react";
import CartSlider from "./CartSlider";
import "./ProductCarousel.scss";

const ProductCarousel = () => {
    return (
        <div className="container mt-5 carousel">
            <CartSlider />
        </div>
    );
};

export default ProductCarousel;
