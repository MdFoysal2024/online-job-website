import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";


const Navber = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {

        logOut()
            .then(() => {
                console.log('Logout Successful')
            })
            .catch(error => {
                console.log('Failed to Logout')
            })

    }

    const links = <>

        <NavLink className='font-semibold hover:underline px-2' to='/'>Home</NavLink>
        <NavLink className='font-semibold hover:underline px-2' to='/about'>About</NavLink>
        <NavLink className='font-semibold hover:underline px-2' to='/contact'>Contact</NavLink>
        <NavLink className='font-semibold hover:underline px-2' to='/service'>Service</NavLink>
        <NavLink className='font-semibold hover:underline px-2' to='/animationTest'>Animation</NavLink>


    </>





    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? <>
                            <div >

                                <div className="dropdown dropdown-bottom dropdown-left">
                                    <div tabIndex={0} role="" className=" cursor-pointer m-1">


                                        <img className="w-12 border-2  border-gray-500 mx-auto rounded-full" src={user?.photoURL} alt="" />
                                    </div>
                                    <div tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-48 p-2 shadow-sm">



                                        <div className="bg-red-500 px-8 py-12">
                                            <img className="w-16 mb-6 border-2  border-gray-500 mx-auto rounded-full" src={user?.photoURL} alt="" />
                                            <h3 className="font-bold text-center text-black text-lg">{user?.displayName}</h3>
                                            <p className="py-4  text-center text-black">{user?.email}</p>



                                        </div>



                                        <Link
                                            to='/login'
                                            onClick={logOut}
                                            className="btn bg-blue-500 text-white hover:-translate-y-1 transition-all duration-300">Sign Out</Link>
                                        <Link
                                            to='/login'
                                            onClick={handleLogOut}
                                            className="btn bg-blue-500 text-white hover:-translate-y-1 transition-all duration-300">Log Out</Link>


                                    </div>
                                </div>


                            </div>
                        </>
                            :
                            <> <div className="navbar-end">

                                <Link to='/register' className="px-4 border-2 border-blue-500 py-1 rounded font-semibold mr-4 hover:-translate-y-1 transition-all duration-300 ">Register</Link>

                                <Link to='/login' className="btn bg-blue-500 text-white hover:-translate-y-1 transition-all duration-300">Sign In</Link>

                            </div></>
                    }
                </div>


            </div>
        </div>
    );
}

export default Navber;
