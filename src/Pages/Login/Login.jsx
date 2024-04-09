import React, { useContext, useState } from 'react';
import { Link , useNavigate , useLocation  } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { AuthContext } from '../../Context/ContextComponent';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const[passShow,setPassShow] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const navigate = useNavigate();
    const location = useLocation();
    const history = location.state?.from || '/';

    const navigateNow = () => {
        setTimeout(() => { navigate(history, { replace: true }) }, 1)
    }
    
    const { logIn , signInWithGoogle , signInWithGitHub } = useContext(AuthContext)

    const handlePassShow = () =>{
        setPassShow(!passShow)
    }
    const handleGitHubLogIn = () => {
        signInWithGitHub()
        .then( result =>{
            Swal.fire({
                title: "Log In Successful!",
                text: "Click Ok!",
                icon: "success"
              })
              navigateNow()
        } )
        .catch( errors =>{
            Swal.fire({
                title: `${errors.message.split('/')[1].split(')')[0]}`,
                text: "Click Ok For Close!",
                icon: "error"
              })
        }  )
        
    }
    const handleGoogleLogIn = () => {
        signInWithGoogle()
        .then( result =>{
            Swal.fire({
                title: "Log In Successful!",
                text: "Click Ok!",
                icon: "success"
              })
              navigateNow()
        } )
        .catch( errors =>{
            Swal.fire({
                title: `${errors.message.split('/')[1].split(')')[0]}`,
                text: "Click Ok For Close!",
                icon: "error"
              })
        }  )
    }
    const onSubmit = (data) =>{

        const { email , Password } = data;

        logIn(email,Password)
        .then( result => {
            Swal.fire({
                title: "Log In Successful!",
                text: "Click Ok!",
                icon: "success"
              });
              navigateNow()

        } )
        .catch( errors => {
            Swal.fire({
                title: `${errors.message.split('/')[1].split(')')[0]}`,
                text: "Click Ok For Close!",
                icon: "error"
              });
        } )

    }
    return (
        <section className="mt-5 mb-32">
            <Helmet>
                <title>Login</title>
            </Helmet>
        <div className="flex justify-between items-center ">
            <div className="bg-gray-200 w-[650px] mx-auto py-6 px-10 rounded-md border">
                 <h1 className="text-4xl font-semibold text-center">Login Your Account</h1>
                 <hr className="my-7 border-black border" />
                 <form onSubmit={handleSubmit(onSubmit)}>
                   <div className="mt-6">
                        <label className="text-xl font-semibold" htmlFor="email">Email address</label>
                        <input {...register("email", { required: true })} className="bg-Dark3 px-5 py-3 block mt-4 w-full outline-none rounded-md" type="email" name="email" id="email" placeholder="Enter your email address"  />
                   </div>
                   <div className="mt-6">
                        <label className="text-xl font-semibold" htmlFor="Password">Password</label>
 
                         <div className='relative'>
                             <input {...register("Password", { required: true })} className="bg-Dark3 px-5 py-3 block mt-4 w-full outline-none rounded-md" type={passShow ? "text" : "password"} name="Password" id="Password" placeholder="Enter your Password"  />
                             {
                                 passShow ? <IoMdEyeOff onClick={handlePassShow} className='absolute top-[20%] text-3xl right-3'/> : <IoEye onClick={handlePassShow} className='absolute top-[20%] text-3xl right-3'/>
                             }
                         </div>                       
                   </div>
                   <div className='flex justify-center'>
                   <button  type='submit' className="border-2 mt-4 border-black backdrop-blur-3xl relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-black  bg-transparent rounded-full hover:text-white group ">
                         <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                         <span className="relative">Log In</span>
                     </button>
                   </div>
                 </form>
                 <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-black"></div>
                    <p className="px-3 text-base font-medium text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-black"></div>
                </div>
                <div className='mt-6 flex justify-center gap-x-6'>
                <button onClick={handleGoogleLogIn} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                    <path  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
                    </svg>
                    Sign in with Google
                </button>
                <button onClick={handleGitHubLogIn} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
                    </svg>
                    Sign in with Github
                </button>
                </div>

                 <p className="text-base text-Dark2 text-center mt-8 font-semibold">Don't Have An Account ? <Link to='/signup' className="text-indigo-600">Sign Up</Link></p>
            </div>
        </div>
     </section>
    );
};

export default Login;