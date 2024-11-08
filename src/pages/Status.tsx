import { useOrderStore } from "../data/cart"
import Drone from '../assets/drone.svg'
import { motion } from "framer-motion"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function StatusPage(){

    const order = useOrderStore((state) => state.order)
    const [minutes, setMinutes] = useState<number>(order.eta)

    useEffect(() => {
        setMinutes(order.eta)

        const timer = setInterval(() => {
            setMinutes((prev) => {
                if (prev > 0) {
                    return prev - 1;
                } else {
                    clearInterval(timer); // Stop the timer when it reaches zero
                    return 0;
                }
            });
        }, 60000); // Update every 60 seconds
        return () => clearInterval(timer); // Clear interval on component unmount
    }, [order.eta])    
    
    return(
        <>
        {minutes === 0 || minutes === undefined ? (
            <div className="bg-[#E5674E] w-full h-screen text-white flex flex-col place-items-center">
            <motion.img 
                src={Drone} 
                className="my-[40px] mt-[50%]"
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
            <h1 className=" font-PTSerif text-[36px] max-w-[279px] text-center py-4">Ingen aktuell beställning</h1>
            <Link to='/meny'>
                <button className="text-black bg-white px-[28px] py-[10px] rounded-full font-PTSerif font-bold ">Ok, cool!</button>
            </Link>
        </div>
        ) : (
            <div className="bg-[#E5674E] w-full h-screen text-white flex flex-col place-items-center">
            <h2 className="mt-[62px] font-WorkSans tracking-wide">Ordernummer #{order.orderNr}</h2>
            <motion.img 
                src={Drone} 
                className="my-[40px]"
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
            <h1 className=" font-PTSerif text-[36px] max-w-[279px] text-center py-4">Din beställning är på väg!</h1>
            <p className=" font-WorkSans text-[22px] mb-[69px]"><strong>{minutes}</strong> minuter</p>
            <Link to='/meny'>
                <button className="text-black bg-white px-[28px] py-[10px] rounded-full font-PTSerif font-bold ">Ok, cool!</button>
            </Link>
        </div>
    )}
        </>
    )
       
}