import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animationData from '../../assets/animation.json';



const AnimationTest = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">This is Home Page Here</h1>

                {/* অ্যানিমেশন প্লেয়ার */}
                <div className="w-64 h-64">
                    <DotLottieReact
                        src="animation.json" // public ফোল্ডারে রাখলে সরাসরি এভাবে পাথ দেয়া যায়
                        loop
                        autoplay
                    />
                </div>
            </div>
           


            <div className="w-100 h-100">
                <DotLottieReact
                    data={animationData} // এখানে src এর বদলে data ব্যবহার করতে হবে
                    loop
                    autoplay
                />
            </div>

        </div>
    );
}

export default AnimationTest;
