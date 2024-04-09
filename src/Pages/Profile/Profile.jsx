import { useContext } from "react";
import { AuthContext } from "../../Context/ContextComponent";
import { useForm } from 'react-hook-form';
import { MdVerified } from "react-icons/md";
import { GoUnverified } from "react-icons/go";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";

const Profile = () => {

    const{user , updateUserProfile} = useContext(AuthContext)
    console.log(user);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) =>{

        const {fullName ,image} = data;

        updateUserProfile(fullName,image)
        .then( result => {
            Swal.fire({
                title: "Update Successful!",
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
        <section>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className="w-[500px] mx-auto">
                <h1 className="text-5xl font-semibold text-center">My Profile</h1>
                {
                    user && <div>
                    <div className="p-2 w-fit rounded-full border-2 border-indigo-600 mt-5 flex justify-center mx-auto">
                        <img className="rounded-full w-60 h-60" src={user.photoURL} alt="" />
                    </div>
                    <p className="text-lg font-semibold mt-4">Full Name : {user.displayName}</p>
                    <div className="flex items-center gap-x-4 ">
                    <p className="text-lg font-semibold mt-4">Email : {user.email}</p>
                    <p className="text-2xl mt-3 text-indigo-600">{user.emailVerified ? <MdVerified title="Varified" className="" /> : <GoUnverified title="NOT Varified"/> }</p>
                    </div>
                    <p className="text-lg font-semibold mt-4">Phone Number : {user.phoneNumber}</p>
                </div>
                }
            </div>
                <div className="bg-gray-200 w-[650px] mx-auto py-6 px-10 rounded-md border my-12">
                    <h1 className="text-5xl font-semibold text-center my-10">Update <br /> Your Information</h1>
                    <form to='/profile' onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="text-xl font-semibold" htmlFor="fullName">Your Name</label>
                                <input {...register("fullName", { required: true })}  className="bg-Dark3 px-5 py-3 block mt-4 w-full outline-none rounded-md" type="text" name="fullName" id="fullName" placeholder="Enter your name" />
                                {errors.fullName && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="mt-6">
                                <label className="text-xl font-semibold" htmlFor="image">Your Photo</label>
                                <input {...register("image", { required: true })} className="bg-Dark3 px-5 py-3 block mt-4 w-full outline-none rounded-md" type="url" name="image" id="image" placeholder="Enter your Photo URL"  />
                            </div>
                            <div className="flex justify-center">
                            <button  type='submit' className="border-2 mt-4 border-black backdrop-blur-3xl relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-black  bg-transparent rounded-full hover:text-white group ">
                                <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span className="relative">Update</span>
                            </button>
                            </div>
                    </form>
                </div>

        </section>
    );
};

export default Profile;