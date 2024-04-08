import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { AuthContext } from '../../Context/ContextComponent';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const SignUp = () => {

    const[passShow,setPassShow] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    const { signUp } = useContext(AuthContext)


    const handlePassShow = () =>{
        setPassShow(!passShow)
    }
    const onSubmit = (data) =>{

        const {fullName , email , Password ,image} = data;

        signUp(email,Password)
        .then( result => {
            Swal.fire({
                title: "Sign Up Successful!",
                text: "Click Ok button",
                icon: "success"
              });

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
       <div className="flex justify-between items-center ">
           <div className="bg-gray-200 w-[750px] mx-auto py-6 px-10 rounded-md border">
                <h1 className="text-4xl font-semibold text-center">Register Your Account</h1>
                <hr className="my-7 border-black border" />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                       <label className="text-xl font-semibold" htmlFor="fullName">Your Name</label>
                       <input {...register("fullName", { required: true })}  className="bg-Dark3 px-5 py-3 block mt-4 w-full outline-none rounded-md" type="text" name="fullName" id="fullName" placeholder="Enter your name" />
                       {errors.fullName && <span className='text-red-600'>This field is required</span>}
                  </div>
                  <div className="mt-6">
                       <label className="text-xl font-semibold" htmlFor="image">Your Photo</label>
                       <input {...register("image", { required: true })} className="bg-Dark3 px-5 py-3 block mt-4 w-full outline-none rounded-md" type="text" name="image" id="image" placeholder="Enter your Photo URL"  />
                  </div>
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
                  <div className="mt-5 flex gap-x-2 items-center">
                    <input type="checkbox" id="checkbox"  className="checkbox" required/>
                    <label htmlFor="checkbox" className="text-Dark2 text-base font-semibold">Accept Term & Conditions</label>
                  </div>
                  <div className='flex justify-center'>
                  <button  type='submit' className="border-2 mt-4 border-black backdrop-blur-3xl relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-black  bg-transparent rounded-full hover:text-white group ">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="relative">Sign Up</span>
                    </button>
                  </div>
                </form>
                <p className="text-base text-Dark2 text-center mt-8 font-semibold">Already Have An Account ? <Link to='/login' className="text-indigo-600">Login</Link></p>
           </div>
       </div>
    </section>
    );
};

export default SignUp;