import Logo from '../assets/logo.svg'
import plantsLeft from '../assets/plantsLeft.svg'
import plantsRight from '../assets/plantsRight.svg'
import { motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


export default function LandingPage(){
    return (
        <div className="w-full h-screen flex justify-center items-center bg-[#38846D]">
            <motion.img 
                src={plantsLeft} 
                className='h-full absolute left-0'
                animate={{
                    x: [-200, 0],
                    opacity: [0, 1],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                }}
            />
            <Link to='/meny' className='z-20'>
                <motion.img 
                    src={Logo} 
                    alt="Logo" 
                    className='hover: cursor-pointer '
                    animate={{
                        scale: [0.95, 1],
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeIn",
                        delay: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </Link>
            <motion.img 
                src={plantsRight} 
                className='h-full absolute right-0'
                animate={{
                    x: [200, 0],
                    opacity: [0, 1],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",

                }}
            />
        </div>
    )
}