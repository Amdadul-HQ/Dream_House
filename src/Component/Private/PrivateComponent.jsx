import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/ContextComponent";
import { useLocation } from 'react-router-dom';

const PrivateComponent = ({children}) => {

    const { user , loading } = useContext(AuthContext)
    const location = useLocation()


    if(loading) return (<div className="h-[calc(100vh-361px)] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-6xl"></span>
    </div>)

    return user ? (
        <div>{ children }</div>
    ) : (
        <Navigate to={ '/login' } state={ { from: location } } replace />
    )
};

export default PrivateComponent;