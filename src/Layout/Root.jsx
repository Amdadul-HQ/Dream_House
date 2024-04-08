import Header from "../Component/Header/Header";
import { Outlet  } from "react-router-dom";

const Root = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default Root;