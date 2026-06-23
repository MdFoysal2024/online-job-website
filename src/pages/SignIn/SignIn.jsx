import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import animationData from '../../assets/animation.json';


import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";


const SignIn = () => {

    const [error, setError] = useState({})


    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const from = location?.state?.from?.pathname || '/';
    console.log(from)

    const { signInUser } = useContext(AuthContext);


    const handleLogin = e => {

        e.preventDefault()
        console.log(' handle Login');


        // const form = event.target;
        // const email = form.email.value;
        // const password = form.password.value;
        // console.log(email, password)

        // navigate('/')



        // New Formula---------->
        const form = new FormData(e.target)

        const email = form.get("email");
        const password = form.get("password");

        console.log(email, password)
        console.log({ email, password })



        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                // setUser(user)
                console.log(user);
                //navigate(location?.state ? location.state : "/");-->  এই লাইনটা উপরের  ভেরিয়েবল const from = ...; এর ভিতরে রেখে এখানে শুধু  from কে আনা হইছে।

                // navigate(from, { replace: true });
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => {
                // const errorCode = error.code;
                //const errorMessage = error.message;
                //console.log(errorCode, errorMessage);

                alert(error.code);

                setError({ ...error, login: err.code })
            });




    }


    return (
        <div className='container mx-auto items-center md:my-24 justify-center  w-full flex flex-col gap-12 md:flex-row lg:flex-row '>


            <div className="card bg-base-100 rounded-none w-full max-w-lg shrink-0 shadow-2xl">
                <div>
                    <h2 className=' text-xl font-bold text-center pt-8'>
                        <span className="text-gray-600 "> Login Your Account </span>

                    </h2>
                </div>

                <form
                    onSubmit={handleLogin}

                    className="card-body">
                    <fieldset className="fieldset">

                        <label className="label text-gray-800 font-semibold">Email</label>
                        <input type="email" name="email" className="input w-full  bg-red-100 border-0" placeholder="Enter your email address" />

                        <label className="label text-gray-800 font-semibold">Password</label>
                        <input type="password" name="password" className="input w-full  bg-red-100 border-0" placeholder="Enter your password" />

                        <div><a className="link link-hover text-gray-800 font-semibold">Forgot password?</a></div>

                        <div>

                            {error.login &&
                                (<p className="text-center text-red-600 font-medium pb-6">incorrect email or password</p>)


                            }
                        </div>


                        <div className="form-control mt-6">
                            <input type="submit" className="btn w-full bg-[#333333] text-white border-none text-lg hover:bg-red-800" value='Login' />
                        </div>
                    </fieldset>
                </form>

                <p className="text-center pb-6">Dont’t Have An Account ?<small className="text-red-600 font-medium">
                    <Link to='/authentication/register' >Register</Link>
                </small>
                </p>

                
<SocialLogin></SocialLogin>
            </div>










           <div className="w-100 h-100">
                          <DotLottieReact
                              data={animationData} // এখানে src এর বদলে data ব্যবহার করতে হবে
                              loop
                              autoplay
                          />
                      </div>



        </div>







    )
}

export default SignIn;
