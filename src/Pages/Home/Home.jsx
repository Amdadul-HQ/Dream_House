import CustomerReview from "../../Component/CustomerReview/CustomerReview";
import FindHome from "../../Component/Findhome/FindHome";
import SliderSection from "../../Component/SliderSection/SliderSection";
import States from "../../Component/States/States";

const Home = () => {
    return (
        <main>
            <SliderSection/>
            <FindHome/>
            <States/>
            <CustomerReview/>
        </main>
    );
};

export default Home;