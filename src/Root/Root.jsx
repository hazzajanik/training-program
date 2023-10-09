import { Outlet } from "react-router-dom";
import Navbar from './../components/Header/Navbar';
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Root;