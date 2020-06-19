import React from 'react'

const CartFirstColoum = () => {
    return (
        <div>
                     <div className="container-fluid text-center d-none d-lg-block">
                    <div className="row mt-3">
                        <div className="col-10 mx-auto col-lg-2 ">
                            <p className="">Products</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2 ">
                            <p className="">Name of Product</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2 ">
                            <p className="">Price</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2 ">
                            <p className="">Quantity</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2 ">
                            <p className="">Remove</p>
                        </div>
                        <div className="col-10 mx-auto col-lg-2 ">
                            <p className="">Total</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CartFirstColoum
