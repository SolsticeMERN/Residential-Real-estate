import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Pages/Footer";

const Root = () => {
    return (
        <div>
           <div className="container mx-auto px-4 mt-5 font-poppins">
           <Navbar></Navbar>
            <div className='min-h-[75vh]'>
            <Outlet></Outlet>
            </div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;