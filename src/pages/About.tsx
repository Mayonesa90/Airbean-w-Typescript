import { motion } from 'framer-motion'
import Header from '../components/Header'
import Face from '../assets/face.png'
import Footer from '../assets/footer.svg'

export default function About() {

    return(
        <div className='bg-[#F3E4E1] place-items-center min-h-screen relative'>
            <Header/>
            <motion.h1 
                className=' font-PTSerif font-bold text-5xl text-center  mb-5'
                animate={{
                    opacity: [0, 1],
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            >
                Vårt kaffe
            </motion.h1>
            <article className='p-[32px] flex flex-col gap-6 max-w-[600px] items-center'>
                <p className='text-[14px] font-WorkSans'>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</p> 
                <p className='text-[14px] font-WorkSans'>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
                <p className='text-[14px] font-WorkSans'>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>
                <footer className='flex flex-col items-center'>
                    <img src={Face} alt="" className='w-[74px] rounded-full saturate-0'/>
                    <h2 className='text-[22px] font-PTSerif'>Eva Cortado</h2>
                    <p className='text-[14px] font-WorkSans'>VD & Grundare</p>
                </footer>
            </article>
            <footer className='w-full absolute bottom-0'>
                <motion.img 
                    src={Footer} 
                    alt="" 
                    className='w-full  max-h-28 ' 
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
