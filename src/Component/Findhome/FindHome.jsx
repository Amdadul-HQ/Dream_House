import { Link, useLoaderData } from "react-router-dom";

const FindHome = () => {
    const property = useLoaderData()
    return (
        <section className="my-32 max-w-screen-xl mx-auto">
            <h1 className="text-[#010101] font-normal text-7xl text-center">Find Your <span className="text-[#6E00FF] font-semibold">Dream</span><br /> Home Here </h1>
            <p className="text-center mt-5 text-xl">Explore opulent residences tailored to your desires, from serene estates to chic city retreats. Your dream home awaits amidst luxury.</p>
            <div className="grid grid-cols-3 gap-6 my-12">
                {
                    property.map( house => <div key={house.id} className="p-5 border rounded-xl flex flex-col justify-between">
                        <div>
                            <img className="w-full h-[250px] rounded-xl" src={house.image} alt="" />
                        </div>
                        <p className="text-base text-[#6E00FF] mt-2 font-medium">{house.segment_name}</p>
                        <h1 className="text-[#010101] text-3xl mb-4">{house.estate_title}</h1>
                        <p className="text-[#5A5959] font-medium">{house.description.slice(0,100)}...<Link to={`/house/${house.id}`} className="text-[#6E00FF]">Show More</Link></p>
                        <div className="flex justify-between items-center text-[#010101] text-xl mt-3 font-medium">
                            <p>For {house.status}</p>
                            <p>Price: {house.price}</p>
                        </div>
                        <Link to={`/house/${house.id}`} className=" mt-3 backdrop-blur-3xl relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black border-2 border-black bg-gray-50 rounded-full hover:text-white group ">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative">View Details</span>
                    </Link>
                    </div> )
                }
            </div>
        </section>
    );
};

export default FindHome;