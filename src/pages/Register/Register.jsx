

import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';



import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animationData from '../../assets/animation.json';
import AuthContext from '../../context/AuthContext/AuthContext';



const Register = () => {

    const [error, setError] = useState({})

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const { createUser, setUser,  updateUserProfile  } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault()
        console.log(' handle Register');



        const form = new FormData(e.target)

        const name = form.get("name");
        const photo_url = form.get("photo_url");
        const email = form.get("email");

        const password = form.get("password");

        // if (password.length < 6) {
        //     setError({ ...error, password: "password must be more then 6 character" });
        //     return;

        // }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

        (!passwordRegex) // মান উলটে যাওয়া ,  অর্থাত passwordRegex মান ঠিক না থাকলে ভিতরে ঢুকে error দিবে।

        if (!passwordRegex.test(password)) {
            setError({
                ...error,
                password:
                    "Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one number, and one special character"
            });
            return;
        }


        console.log(name, photo_url, email, password)
        console.log({ name, photo_url, email, password })


        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);


                updateUserProfile({
                    displayName: name,
                    photoURL: photo_url
                })
                    .then(() => {
                        setUser({
                            ...user, displayName: name,
                            photoURL: photo_url
                        });

                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                    });


            })
            .catch(error => {
                console.log(error.message)
            })





    }


    return (
        <div className='container mx-auto gap-8 items-center md:my-24 justify-center  w-full flex flex-col md:flex-row lg:flex-row '>


            <div className='w-full md:w-1/2  mx-auto'>

                <div className="card bg-base-100 rounded-none w-full max-w-lg shrink-0 shadow-2xl">
                    <div>
                        <h2 className=' text-xl font-bold text-center pt-8'>
                            <span className="text-gray-600 "> Register  Your Account </span>

                        </h2>
                    </div>

                    <form
                        onSubmit={handleRegister}

                        className="card-body">
                        <fieldset className="fieldset">

                            <label className="label text-gray-800 font-semibold">Your Name</label>
                            <input type="text" name="name" className="input  w-full bg-red-100 border-0" placeholder="Enter your name" />

                            <label className="label text-gray-800 font-semibold">Photo URL</label>
                            <input type="text" name="photo_url" className="input w-full bg-red-100 border-0" placeholder="Enter your photo_url" />

                            <label className="label text-gray-800 font-semibold">Email</label>
                            <input type="email" name="email" className="input w-full bg-red-100 border-0" placeholder="Enter your email address" />

                            <label className="label text-gray-800 font-semibold">Password</label>
                            <input type="password" name="password" className="input w-full bg-red-100 border-0" placeholder="Enter your password" />

                            <div><a className="link link-hover text-gray-800 font-semibold">Forgot password?</a></div>
                            <div>

                                {error.password &&
                                    (<p className="text-center text-red-600 font-medium pb-6">{error.password}</p>)


                                }
                            </div>

                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    className="btn w-full bg-[#333333] text-white border-none text-lg hover:bg-red-800"

                                    value='Register' />



                            </div>
                        </fieldset>
                    </form>

                    <p className="text-center pb-6">Already Have An Account ?<small className="text-red-600 font-medium">
                        <Link to='/login' >Login</Link>
                    </small></p>

                </div>
            </div>


            <div className=' w-full md:w-1/2 mx-auto' >
                <DotLottieReact className='border'
                    data={animationData} // এখানে src এর বদলে data ব্যবহার করতে হবে
                    loop
                    autoplay
                />
            </div>


        </div>
    );
}

export default Register;