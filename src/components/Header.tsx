import BurgerMenu from '../assets/burger-menu.svg'
import Bag from '../assets/bag.svg'
import HeaderBackground from '../assets/header-background.svg'
import {motion, AnimatePresence} from 'framer-motion'
import { useOrderStore, useStore } from '../data/cart'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import BagComponent from './BagComponent'

export default function Header(){

    const cart = useStore((state) => state.cart)
    const order = useOrderStore((state) => state.order)
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    
    //Empty cart when order is made
    useEffect(() => {
        if (order.orderNr) {
            useStore.setState({ cart: [] })
        }
    }, [order])

    //Animation variants for smooth entry
    const menuVariants = {
        open: {
            opacity: 1,
            transition: { duration: 0.35 }
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.35 }
        }
    }


    return (
        <>
            {menuOpen? (
                <motion.nav 
                    className='w-full bg-[#2F2926] absolute h-full text-center place-content-center z-20'
                    key={'menu-open'}
                    initial='closed'
                    animate='open'
                    exit='closed'
                    variants={menuVariants}
                >
                     <img 
                        src={BurgerMenu} 
                        onClick={toggleMenu}
                        className='absolute top-5 left-[16px] hover:cursor-pointer' 
                    />
                    <ul className='flex flex-col gap-[33px]'>
                        <Link to='/meny' onClick={toggleMenu} className='text-[32px] font-PTSerif text-white opacity-85 hover:opacity-100 '>Meny</Link>
                        <Link to='/about' className='text-[32px] font-PTSerif text-white opacity-85 hover:opacity-100'>Vårt kaffe</Link>
                        <Link to='/status' className='text-[32px] font-PTSerif text-white opacity-85 hover:opacity-100'>Orderstatus</Link>

                    </ul>
                </motion.nav>
            ) : (
                <motion.nav 
                    key={'menu-closed'}
                    initial='closed'
                    animate='open'
                    exit='closed'
                    variants={menuVariants}
                    className="w-full h-[160px] flex items-center bg-transparent absolute">
                    <motion.img 
                        src={HeaderBackground} 
                        className='absolute top-0 w-full object-cover max-h-28' 

                        animate={{
                            y: [-200, 0],
                            opacity: [0, 1],
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    />
                    <img 
                        src={BurgerMenu} 
                        onClick={toggleMenu}
                        className='absolute top-5 left-[16px] hover:cursor-pointer' 
                    />
                    <BagComponent />
                </motion.nav>
            )}
        
        </>
    )
}