import { Helmet } from "react-helmet-async";

const Faq = () => {
    return (
        <section className="max-w-screen-xl mx-auto flex gap-x-6 items-center my-32">
            <Helmet>
                <title>FAQ Section</title>
            </Helmet>
            <div className="w-[50%]">
                <img className="rounded-xl mt-28" src="https://i.postimg.cc/vHrPCW2B/blog5eaaa5cb18719-nativemsg-faq.jpg" alt="" />
            </div>
            <div className="w-[50%]">
            <h1 className="text-5xl text-center font-normal text-[#010101] my-8">Frequently Asked Question</h1>
                <div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                        What makes your listings different from standard real estate listings?
                        </div>
                        <div className="collapse-content"> 
                            <p>Our listings focus on exclusive properties that offer exceptional design, amenities, and locations.  We go beyond basic details to showcase the unique lifestyle each property embodies.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mt-4">
                        <input type="radio" name="my-accordion-2" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                        What is your typical buyer commission fee?
                        </div>
                        <div className="collapse-content"> 
                            <p>Our commission structure is tailored to each transaction.  Please contact us for a personalized quote.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200 mt-4">
                        <input type="radio" name="my-accordion-2" defaultChecked /> 
                        <div className="collapse-title text-xl font-medium">
                        Do you offer mortgage pre-qualification assistance?
                        </div>
                        <div className="collapse-content"> 
                            <p>We can connect you with qualified lenders who specialize in financing luxury properties.</p>
                        </div>
                    </div>
                        <div className="collapse collapse-arrow bg-base-200 mt-4">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                        What is your process for finding the perfect luxury property for me?
                        </div>
                        <div className="collapse-content"> 
                            <p>We begin with a personalized consultation to understand your specific needs, preferences, and desired location.  We then leverage our market expertise to curate a selection of properties that align perfectly with your vision.</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200 mt-4">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                        Do you offer off-market listings?
                        </div>
                        <div className="collapse-content"> 
                            <p>Yes, we have access to a network of exclusive properties that may not be publicly advertised.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;