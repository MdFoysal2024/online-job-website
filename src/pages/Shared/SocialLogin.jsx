import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {

        console.log(import.meta.env.VITE_projectId);
        console.log(import.meta.env.VITE_authDomain);
        console.log('GoogleSignIn')

        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className='m-4'>
            <div className="divider">OR</div>
            <button
                onClick={handleGoogleSignIn} className='btn text-lg  w-full'> <FcGoogle className="text-2xl"></FcGoogle>Sign In with Google</button>
        </div>
    );
};

export default SocialLogin;