import React from "react";

const CartItem = ({ eachitem, value }) => {
  const { id, title, img, price, total, count } = eachitem;
  const { incriment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-center text-capitalize">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        ></img>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product :</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price : $</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span className="btn btn-warning mr-1" onClick={() => incriment(id)}>
            +
          </span>
          <span className="btn btn-primary">{count}</span>
          <span className="btn btn-danger ml-1" onClick={() => decrement(id)}>
            -
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
 <div className="cart-icon" onClick={()=>removeItem(id)}>
     <i className="fas fa-trash" style={{color:"#F5C613"}}></i>
 </div>
     
      </div>
      <div className="col-10 mx-auto col-lg-2">
  <strong> Item Total : $ {total}</strong>
     
      </div>
    </div>
  );
};

export default CartItem;
