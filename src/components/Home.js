import React from 'react'
import { useHistory } from 'react-router-dom'
import "../App.css"


export default function Home() {

    const history = useHistory();

    const routeToOrder = () => {
        console.log(history);
        history.push('/Order')
    }

    return (
        <div className='hero'>
            <img src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80' alt='pizza'/>
            <button onClick={routeToOrder} className="pizza-button">Pizza?</button>
        </div>
    )
}