import { useEffect, useState } from "react";
import { useLoaderData ,useParams  } from "react-router-dom";


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
        <section className="max-w-screen-xl mx-auto">
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
                        <p>A Luxurious {segment_name}</p>
                        <h1>{estate_title}</h1>
                        <p>Details: {description}</p>
                        <p>Area: {area}</p>
                        <h1>Facilities:</h1>
                        {
                            facilities && <ul className="list-disc">
                           <li>{facilities[0]}</li>
                           <li>{facilities[1]}</li>
                           <li>{facilities[2]}</li>
                        </ul>
                        }
                        <div>
                        <p>Status: For {status}</p>
                        <p>Price: {price}</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
        </section>
    );
};

export default HouseDetails;