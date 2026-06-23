import { easeOut, motion } from "framer-motion";

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
                            transition={{ duration: 1,  repeat: Infinity  }}
                        >Latest
                            <motion.span
                            animate={{  color: ['#F54927', '#35F527','#DD27F5'] }}
                            transition={{ duration: 1, delay: 1, ease: easeOut, repeat: Infinity }}
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

                    <div className=''>

                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
