import React from 'react'
import CartItem from './CartItem'

const CartList = ({value}) => {
    const {cart} = value;
    

    return (
        <div className="container-fluid">
            {cart.map(eachitem =>{
            return <CartItem key={eachitem.id} eachitem={eachitem} value={value}/>
            })}
        </div>
    )
}

export default CartList
