import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { Coffee, CoffeeResponse } from '../interfaces/coffeeItemInterface'
import Footer from '../assets/footer.svg'
import {motion} from 'framer-motion'
import AddBtn from '../assets/add-btn.svg'
import { useStore } from '../data/cart'

export default function Meny(){

    const [coffeeItems, setCoffeeItems] = useState<Coffee[]>([])
    const addToCart = useStore((state) => state.addToCart);
    
    useEffect(() => {
        async function getCoffeItems() {
            const response = await fetch('https://airbean-9pcyw.ondigitalocean.app/api/beans')
            const data: CoffeeResponse = await response.json()            
            setCoffeeItems(data.menu)
        }

        getCoffeItems()
    }, [])

    const coffeeComponents = coffeeItems.map((coffee) => {
        return (
            <div key={coffee.id} className='flex mb-[18px]'>
                <button onClick={() => addToCart(coffee)}>
                    <motion.img 
                        src={AddBtn} 
                        alt="" 
                        className=' w-[62px] hover:cursor-pointer'
                        initial={{scale: 1}}
                        whileTap={{scale: 0.95}}
                        transition={{duration: 0.1, ease: 'easeIn'}}
                    />
                </button>
                <div>
                    <div className='flex w-[311px]  justify-between'>
                        <h2 className='text-[23px] font-PTSerif font-bold'>{coffee.title}</h2>
                        <p className='text-[23px] font-PTSerif font-bold'>{coffee.price} kr</p>
                    </div>
                    <p className='text-xs font-WorkSans'>{coffee.desc}</p>
                </div>
                
            </div>
        )
    })

    return(
        <div className='bg-[#F3E4E1] h-svh place-items-center'>
            <Header/>
            <motion.h1 
                className=' font-PTSerif font-bold text-5xl text-center  mb-5 pt-28'
                animate={{
                    opacity: [0, 1],
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            >
                Meny
            </motion.h1>
            <motion.ul 
            className='z-30'
            animate={{
                opacity: [0, 1],
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
            }}
            >
                {coffeeComponents}
            </motion.ul>
            <footer className='w-full'>
                <motion.img 
                    src={Footer} 
                    alt="" 
                    className='w-full absolute bottom-0  max-h-28 z-0' 
                    animate={{
                        y: [200, 0],
                        opacity: [0, 1],
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                />
            </footer>
        </div>
    )
}