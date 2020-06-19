import React from 'react'
import ProductlistTitle from '../ProductlistTitle/ProductlistTitle'

const EmptyCartTitle = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <ProductlistTitle name="Your cart is" title="currently empty"/>
                </div>
            </div>
        </div>
    )
}

export default EmptyCartTitle
