import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
    return (
        <section className="md:px-0 px-3">
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <div className="flex md:mb-0 mb-5 md:flex-row flex-col-reverse gap-y-6 md:items-center gap-x-6 max-w-screen-xl mx-auto md:h-[600px]">
                <div  className="md:w-[40%]">
                     <h1 data-aos="fade-right" data-aos-delay='200'  data-aos-duration="1000" className="md:text-5xl text-2xl font-normal text-[#010101] mb-4" >Elevating the Art of Luxury Living</h1>
                     <p data-aos="fade-right" data-aos-delay='300'  data-aos-duration="1000" className="text-base font-normal">At Dream House, we are more than just realtors; we are curators of exceptional lifestyles. We understand that a luxury property isn't simply a collection of bricks and mortar; it's a canvas for your dreams.</p>
                </div>
                <div data-aos="fade-left" data-aos-delay='500'  data-aos-duration="1000" data-aos-mirror="true" className="md:w-[60%] ">
                    <img className="rounded-xl" src="https://i.postimg.cc/yNQSMRGx/dreamstime-m-4794570-e1467280605773.jpg" alt="" />
                </div>
            </div>
            <div className="flex md:flex-row md:mb-0 mb-5  flex-col items-center gap-x-6 max-w-screen-xl mx-auto md:h-[600px]">
                <div data-aos="fade-right" data-aos-delay='500'  data-aos-duration="1000" className="md:w-[60%] ">
                    <img className="rounded-xl" src="https://i.postimg.cc/jSY9fwZD/thisway.png" alt="" />
                </div>
                <div className="md:w-[40%]">
                     <h1 data-aos="fade-left" data-aos-delay='200'  data-aos-duration="1000" className="md:text-5xl text-2xl font-normal text-[#010101] mb-4">Discernment, Dedication, Distinction</h1>
                     <p data-aos="fade-left" data-aos-delay='300'  data-aos-duration="1000" className="text-base font-normal">We believe in a discerning approach to luxury real estate.  Our team of highly-trained professionals possesses an unparalleled understanding of the market,  meticulously selecting only the most extraordinary properties that embody elegance, sophistication, and a commitment to excellence.</p>
                </div>
            </div>
            <div className="flex md:flex-row md:mb-0 mb-5 flex-col-reverse items-center gap-x-6 max-w-screen-xl mx-auto md:h-[600px]">
                <div className="md:w-[40%]">
                     <h1 data-aos="fade-right" data-aos-delay='200'  data-aos-duration="1000" className="md:text-5xl text-2xl font-normal text-[#010101] mb-4">Unwavering Service, Unmatched Expertise</h1>
                     <p data-aos="fade-right" data-aos-delay='300'  data-aos-duration="1000" className="text-base font-normal">Our unwavering dedication to exceptional service ensures a seamless experience throughout your journey.  From the initial consultation to the final closing, we provide personalized guidance and support, anticipating your needs and exceeding your expectations.</p>
                </div>
                <div data-aos="fade-left" data-aos-delay='500'  data-aos-duration="1000" className="md:w-[60%] ">
                    <img className="rounded-xl" src="https://i.postimg.cc/tTFDp2GD/support.jpg" alt="" />
                </div>
            </div>
            {/* Contact section */}
            <section>
                <h1 className="text-4xl md:text-7xl text-center my-5 font-medium">Contact Us</h1>
                    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
                        <div className="flex flex-col justify-between">
                            <div className="space-y-2">
                                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                                <img className="w-full mt-4" src="https://i.postimg.cc/wMVg7CmB/talk.png" alt="" />
                            </div>
                        </div>
                        <form noValidate="" className="space-y-6 text-[#010101] text-lg">
                            <div>
                                <label htmlFor="name" className="text-sm">Full name</label>
                                <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-white" />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" type="email" className="w-full p-3 rounded bg-white" />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-sm">Message</label>
                                <textarea id="message" rows="3" className="w-full p-3 rounded bg-white"></textarea>
                            </div>
                            <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-indigo-600 text-gray-50">Send Message</button>
                        </form>
                    </div>
            </section>
        </section>
    );
};

export default About;