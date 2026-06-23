import { easeOut, motion } from "framer-motion";

import img1 from '../../assets/banner-img1.jpg'
import img2 from '../../assets/banner-img2.jpg'



const Banner = () => {
    return (
        <div>
            <div className="hero bg-amber-200 min-h-96">
                <div className="hero-content  flex justify-between items-center flex-col lg:flex-row">



                    <div className='md:w-1/2 '>
                        <motion.h1
                            className="text-5xl font-bold"

                            initial={{ x: -100, opacity: 0 }}

                            animate={{ x: 0, opacity: 1 }}

                            transition={{ duration: 2, repeat: Infinity }}

                        >Latest
                            <motion.span
                                animate={{ color: ['#F54927', '#35F527', '#DD27F5'] }}

                                transition={{ duration: 2, delay: 2, ease: easeOut, repeat: Infinity }}

                            > Job For You!</motion.span>
                        </motion.h1>
                        <motion.h1
                            className="text-5xl font-bold"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, color: ['blue'] }}
                            transition={{ duration: 1, delay: 1, ease: easeOut, repeat: Infinity }}
                        >
                            Latest Job For You!
                        </motion.h1>

                        <h1 className="text-5xl font-bold">Latest Job For You!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>

                    <div className='flex md:mr-8 flex-col md:flex-row '>

                        <motion.img

                            className="text-5xl font-bold"


                            initial={{ y: -100, opacity: 100 }}

                            animate={{ y: [0, -25, 0], opacity: 100 }}

                            transition={{ duration: 3, repeat: Infinity }}
                            className=" rounded-t-[40px] rounded-br-[40px]  w-64 h-48 border-b-4 border-l-4 border-blue-500  shadow-2xl"
                            src={img1}
                        />
                        <motion.img

                            initial={{ x: 100, opacity: 100 }}

                            animate={{ x: [0, 25, 0], opacity: 100 }}

                            transition={{ duration: 3, repeat: Infinity }}

                            className=" rounded-t-[40px] rounded-br-[40px]  mt-8  w-64 h-48  border-b-4 border-l-4 border-blue-500  shadow-2xl"
                            src={img2}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
