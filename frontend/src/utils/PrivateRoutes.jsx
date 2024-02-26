import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const isAuthenticated = sessionStorage.getItem("token");

    // If authenticated, render the child elements
    // If not, navigate to the login page
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes