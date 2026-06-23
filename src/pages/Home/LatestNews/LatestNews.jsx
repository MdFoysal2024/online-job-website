

import { Link } from 'react-router-dom'
import './LatestNews.css'

const LatestNews = () => {




    return (
        <div className=' py-12  cursor-pointer'>
            <div className='flex items-center bg-gray-100 p-2 gap-2'>

                <p className='bg-pink-800 px-2 text-xl py-1 font-medium text-white'>Latest</p>

                <div className=" py-2 overflow-hidden">
                    <div className="marquee flex">

                        {/* First set */}
                        <div className='flex gap-12 text-gray-600'>
                            <Link to={'authentication/login'}> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  <span className='text-blue-600'>Quaerat laboriosam dolorum ducimus corrupti eniam sit fugiat, aliquam eum nulla doloribus. </span> Veniam sit fugiat, aliquam eum nulla doloribus. Nihil dolorem sed neque, laudantium nesciunt commodi odio ex quia.</p>
                            </Link>

                        </div>

                        {/* Duplicate set */}
                        <div className='flex gap-12 ml-12 text-gray-600'>
                            <p>আমাদের সাপ্তাহিক ছুটির দিন মঙ্গলবার, এইছাড়া শুক্রবার সহ বাকি ছয় দিন খোলা থাকে। সকাল ১০ টা থেকে রাত ০৮ টা পর্যন্ত, এছাড়া যে কোন বিষয়ে তথ্য জানার জন্য আমাদের হট লাইন নাম্বারে যোগাযোগ করতে পারেন ০১৩১৭৩১৩১০০ ।
                            </p>
                        </div>
                        {/* Duplicate set */}
                        <div className='flex gap-12 ml-12 text-gray-600'>
                            <p>আমাদের সাপ্তাহিক ছুটির দিন মঙ্গলবার, এইছাড়া শুক্রবার সহ বাকি ছয় দিন খোলা থাকে। সকাল ১০ টা থেকে রাত ০৮ টা পর্যন্ত, এছাড়া যে কোন বিষয়ে তথ্য জানার জন্য আমাদের হট লাইন নাম্বারে যোগাযোগ করতে পারেন ০১৩১৭৩১৩১০০ ।
                            </p>
                        </div>

                    </div>
                </div>

            </div>




        </div>
    )
}

export default LatestNews