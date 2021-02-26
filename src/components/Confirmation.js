import React from 'react'

export default function Confirmation(props) {
    const { orders } = props; // array of orders

    return (
        <>
            <div>
                <h1>Congats! Your Pizza is on it's way!</h1>
            </div>
            <div className = 'order-confirmation'>
                {
                    orders.map(order => {
                        return (
                            <>
                            <div>{`Name on order: ${order.name}`}</div>
                            <div>{`Pizza size: ${order.size}"`}</div>
                            <div>{`Pizza sauce: ${order.sauce}`}</div>
                            <div>{`Pizza toppings:`}</div>
                            <ul>
                                {
                                    order.toppings.map(topping => {
                                        return (
                                            <li>{topping}</li>
                                        )
                                    })
                                }
                            </ul>
                            <div>{`Special Instructions: ${order.instructions}`}</div>
                            <div>{`Quantity: ${order.quantity}`}</div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}