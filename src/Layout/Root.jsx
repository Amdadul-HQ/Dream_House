import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import { Outlet  } from "react-router-dom";

const Root = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            {/* <Footer/> */}
        </>
    );
};

export default Root;