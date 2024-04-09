import { useEffect, useState } from "react";
import { useLoaderData ,useParams  } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md"
import Map from "../../Component/Map/Map";
import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const HouseDetails = () => {

    const [house,setHouse] = useState([])

    const property = useLoaderData();
    const {id} = useParams()

    useEffect(()=> {
        const item = property.find( h => h.id == id )
        setHouse(item)
    },[house, id, property])

    const {rooms,image,facilities,estate_title,segment_name,description,area,status,price,location,position} = house;
    return (
        <section className="max-w-screen-xl mx-auto mt-10 mb-32">
            <Helmet>
                <title>House Details</title>
            </Helmet>
                <div className="flex md:flex-row flex-col gap-x-6">
                    <div  
                          className="md:w-[70%] md:mt-12">
                         <img
                         data-aos-delay="100"
                         data-aos-duration="1000" 
                         data-aos="fade-right"
                         data-aos-offset="300"
                         data-aos-easing="ease-in-sine"
                          className="md:h-[500px] h-[300px] w-full rounded-lg" src={image} alt="" />
                         <div className="grid grid-cols-3 gap-x-2 md:gap-x-5 mt-6">
                            {
                                rooms && 
                                rooms.map(( room ,inx)=> <img key={inx}
                                 data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom" 
                                data-aos-delay="100"
                                data-aos-duration="1000"
                                className="w-full md:h-[200px] rounded-xl" src={room} /> ) 
                            }
                        </div>
                    </div>
                    <div className="md:w-[30%] md:px-0 px-3">
                        <p data-aos="fade-down"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                         className="md:text-lg text-2xl md:mt-0 mt-5 font-medium text-center pb-1 border-b-2">A Luxurious {segment_name}</p>
                        <h1 data-aos="fade-left"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        className="text-[#010101] text-3xl font-medium my-4">{estate_title}</h1>
                        <p data-aos="fade-left"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                        className="text-[#6A6A6A] font-medium mb-3">Details: {description}</p>
                        <h1 data-aos="fade-left"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                         className="text-lg font-semibold mt-3">Facilities:</h1>
                        {
                            facilities && <ul className="list-disc space-y-2 mb-4 mt-3">
                           <li data-aos="fade-left"
                            data-aos-delay="450"
                            data-aos-duration="1000"
                            className="flex items-center gap-x-2 text-base bg-sky-200 px-2 py-1 rounded-lg font-medium"><FaCircleArrowRight className="text-green-600"/>{facilities[0]}</li>
                           <li data-aos="fade-left"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            className="flex items-center gap-x-2 text-base bg-sky-200 px-2 py-1 rounded-lg font-medium"><FaCircleArrowRight className="text-green-600"/>{facilities[1]}</li>
                           <li data-aos="fade-left"
                            data-aos-delay="550"
                            data-aos-duration="1000"
                            className="flex items-center gap-x-2 text-base bg-sky-200 px-2 py-1 rounded-lg font-medium"><FaCircleArrowRight className="text-green-600"/>{facilities[2]}</li>
                        </ul>
                        }
                        <p data-aos="fade-left"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                         className="text-lg font-semibold">Area: {area}</p>
                        <div data-aos="fade-left"
                            data-aos-delay="650"
                            data-aos-duration="1000"
                         className="flex justify-between items-center text-lg font-semibold my-3">
                            <p>Status: For {status}</p>
                            <p>Price: {price}</p>
                        </div>

                        <div data-aos="fade-left"
                            data-aos-delay="700"
                            data-aos-duration="1000"
                         className="">
                            <h1 className="text-lg font-semibold my-3">Location</h1>
                            <h1 className="text-2xl font-medium flex items-center gap-x-3"><MdLocationOn className="text-red-600"/>{location}</h1>
                            <div className="my-4 h-96">
                                {
                                    position && <Map position={position} />
                                }
                            </div>
                            
                        </div>
                        <a href="#_" className="w-full border-black border-2 mt-3 backdrop-blur-3xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black  bg-gray-50 rounded-full hover:text-white group ">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative">Contract Owner</span>
                    </a>
                    </div>
                </div>
        </section>
    );
};

export default HouseDetails;