import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout() {

    return (
        <>

            <Outlet/>
        </>
    );
}

export default Layout;