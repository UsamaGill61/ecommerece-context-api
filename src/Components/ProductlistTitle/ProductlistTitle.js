import React from "react";
import './ProductlistTitle.css'

const ProductlistTitle = ({name,title}) => {
  return (
    <div className="row mt-4">
      <div className="col-12 text-center">
        <h1 className="heading-css">
  {name} <span>{title}</span>
        </h1>
      </div>
    </div>
  );
};

export default ProductlistTitle;
