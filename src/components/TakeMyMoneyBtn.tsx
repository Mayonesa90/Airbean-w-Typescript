import { useStore, useOrderStore } from '../data/cart'
import { Order, OrderResponse } from '../interfaces/orderInterface'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import {motion} from 'framer-motion'

export default function TakeMyMoneyBtn(){
    const cart = useStore((state) => state.cart)
    const addToOrder = useOrderStore((state) => state.addToOrder)

    //reassign items in cart to fit request body, only 'price' and 'name' necessary
    const cartItems : Order = cart.map((item) => {
        return {
            name: item.title,
            price: item.price
        }
    })    

    const makeOrder = (cartItems : Order) => {
        fetch('https://airbean-9pcyw.ondigitalocean.app/api/beans/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                details: {order: cartItems}
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            addToOrder(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <Link to='/status'>
            <motion.button 
                className="btn btn-primary mt-[34px] mb-[41px] w-fit rounded-full px-[27px] py-[8px] text-white text-[24px] font-PTSerif font-thin tracking-wide  bg-[#2F2926] hover:bg-[#297c26]"
                onClick={() => makeOrder(cartItems)}
                whileTap={{scale: 0.95}}
                transition={{duration: 0.1, ease: 'easeIn'}}
            >
                Take my money!
            </motion.button>
        </Link>
    )
}