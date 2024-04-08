import { useEffect, useState } from "react";
import { useLoaderData ,useParams  } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md"
import { Map , Marker , Popup , TileLayer } from "leaflet";


const HouseDetails = () => {

    const [house,setHouse] = useState([])

    const property = useLoaderData();
    const {id} = useParams()

    useEffect(()=> {
        const item = property.find( h => h.id == id )
        setHouse(item)
    },[house, id, property])

    const {rooms,image,facilities,estate_title,segment_name,description,area,status,price,location} = house;
    return (
        <section className="max-w-screen-xl mx-auto mt-10 mb-32">
                <div className="flex gap-x-6">
                    <div className="w-[70%]">
                         <img className="h-[500px] w-full rounded-lg" src={image} alt="" />
                         <div className="grid grid-cols-3 gap-x-5 mt-6">
                            {
                                rooms && 
                                rooms.map(( room ,inx)=> <img key={inx} className="w-full h-[200px] rounded-xl" src={room} /> ) 
                            }
                        </div>
                    </div>
                    <div className="w-[30%]">
                        <p className="text-lg font-medium text-center pb-1 border-b-2">A Luxurious {segment_name}</p>
                        <h1 className="text-[#010101] text-3xl font-medium my-4">{estate_title}</h1>
                        <p className="text-[#6A6A6A] font-medium mb-3">Details: {description}</p>
                        <p className="text-lg font-semibold">Area: {area}</p>
                        <h1 className="text-lg font-semibold mt-3">Facilities:</h1>
                        {
                            facilities && <ul className="list-disc space-y-2 mb-4 mt-3">
                           <li className="flex items-center gap-x-2 text-base bg-sky-200 px-2 py-1 rounded-lg font-medium"><FaCircleArrowRight className="text-green-600"/>{facilities[0]}</li>
                           <li className="flex items-center gap-x-2 text-base bg-sky-200 px-2 py-1 rounded-lg font-medium"><FaCircleArrowRight className="text-green-600"/>{facilities[1]}</li>
                           <li className="flex items-center gap-x-2 text-base bg-sky-200 px-2 py-1 rounded-lg font-medium"><FaCircleArrowRight className="text-green-600"/>{facilities[2]}</li>
                        </ul>
                        }
                        <div className="flex justify-between items-center text-lg font-semibold my-3">
                            <p>Status: For {status}</p>
                            <p>Price: {price}</p>
                        </div>

                        <div className="">
                            <h1 className="text-2xl font-medium flex items-center gap-x-3"><MdLocationOn className="text-red-600"/>{location}</h1>
                            <div>
                               {/* <Map>

                               </Map> */}
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