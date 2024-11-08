import { useStore } from '../data/cart'
import Bag from '../assets/bag.svg'
import { useState, useEffect } from 'react'
import { CartItems} from '../interfaces/cartInterface'
import TakeMyMoneyBtn from './TakeMyMoneyBtn'
import { motion } from 'framer-motion'
import DeleteBtn from '../assets/delete-btn.svg'

export default function BagComponent(){
    const cart = useStore((state) => state.cart)
    const [bagOpen, setBagOpen] = useState(false)
    const [cartContent, setCartContent] = useState<CartItems[]>([]) 
    const [cartEmpty, setCartEmpty] = useState(true)
    const deleteFromCart = useStore((state) => state.deleteFromCart)

    const toggleBag = () => {
        setBagOpen(!bagOpen)
    }

    useEffect(()=> {
        if (cart.length > 0) {
            setCartEmpty(false)
        } else {
            setCartEmpty(true)
        }
        const uniqueItems = cart.reduce((acc, item) => {
            const existingItem = acc.find((i: CartItems) => i.id === item.id)
            if (existingItem) {
                existingItem.quantity += 1
                existingItem.totalPrice += item.price
            } else {
                acc.push({ id: item.id, name: item.title, quantity: 1, totalPrice: item.price })
            }
            return acc
        }, [] as CartItems[])
        setCartContent(uniqueItems)

    }, [cart])

    const cartItems = cartContent.map((item) => {
            return (
                <div className='flex'>
                    <button 
                        className=' self-start p-2'
                        onClick={() => deleteFromCart(item)}
                    >
                        <img src={DeleteBtn} alt="" className='w-4' />
                    </button>
                    <div className='flex flex-col ' key={item.id}>
                        <div className='flex items-center gap-2'>
                            <p className='font-PTSerif text-[20px]'>{item.name}</p>
                            {item.quantity > 1 ? (
                                <p className='font-WorkSans text-sm font-thin'>x {item.quantity}</p>
                            ) : null}
                        </div>
                        <p className='font-WorkSans text-xs font-thin'>{item.totalPrice} kr</p>
                    </div>
                </div>
            )
        })
    
    const cartTotal = cart.reduce((total, item) => {
        return total + item.price
    }, 0)

    return (
        <>
        {bagOpen? (
            <motion.div 
                className='bg-[#000000B2] absolute z-0 top-0 left-0 right-0 bottom-0 h-[100vh] grid place-items-center'
                animate={{
                    opacity: [0, 1],
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <div>
                    <motion.img 
                        src={Bag} 
                        alt="" 
                        onClick={toggleBag} 
                        className='absolute top-0 right-[16px] hover: cursor-pointer'
                        initial={{scale: 1}}
                        whileTap={{scale: 0.95}}
                        transition={{duration: 0.1, ease: 'easeIn'}}
                    />
                    <motion.p 
                        className=' leading-5 absolute top-2 text-xs right-[40px] text-white bg-[#E5674E] w-[22px] h-[22px] text-center font-WorkSans rounded-full '
                        key={cart.length} // Re-render when cart.length changes
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: [0.5, 1], scale: [1, 1.2] }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {cart.length}
                    </motion.p>
                </div>
                <div className='bg-white w-[90%] max-w-[390px] p-4 z-20  rounded-sm font-bold absolute top-20 flex flex-col '>
                    <h1 className=' font-PTSerif text-[32px] text-center mb-[44px] '>Din beställning</h1>
                    {cartEmpty ? (
                        <p className=' font-WorkSans text-xl text-center font-light mb-6'>Du har inget i din varukorg!</p>
                    ) : (
                    <>
                        <ul className=' justify-start place-content-start gap-3 grid'>
                                {cartItems}
                            </ul>
                            <section>
                            <div className='flex justify-between mt-4'>
                                <p className=' font-PTSerif text-[20px]'>Total</p>
                                <p className=' font-PTSerif text-[20px]'>{cartTotal} kr</p>
                            </div>
                            <p className=' font-WorkSans text-xs font-thin'>Inklusive moms + drönarleverans</p>
                            
                        </section>
                        <footer className='flex justify-center'>
                            <TakeMyMoneyBtn />
                        </footer>
                    </>
                    )
                    }
                    
                    
                    
                    
                </div>
            </motion.div>
        ) : (
            <div>
                <motion.img 
                    src={Bag} 
                    alt="" 
                    onClick={toggleBag} 
                    className='absolute top-0 right-[16px] hover: cursor-pointer' 
                    initial={{scale: 1}}
                    whileTap={{scale: 0.95}}
                    transition={{duration: 0.1, ease: 'easeIn'}}
                />
                <motion.p 
                    className=' leading-5 absolute top-2 text-xs right-[40px] text-white bg-[#E5674E] w-[22px] h-[22px] text-center font-WorkSans rounded-full '
                    key={cart.length} // Re-render when cart.length changes
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: [0.5, 1], scale: [1, 1.2] }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {cart.length}
                </motion.p>
            </div>
        )}
        </>
    )
}