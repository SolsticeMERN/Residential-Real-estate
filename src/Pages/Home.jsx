import { Helmet } from "react-helmet-async";
import About from "../Components/About";
import Agents from "../Components/Agents";
import Banner from "../Components/Banner";
import Estate from "../Components/Estate";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Find House | Home</title>
            </Helmet>
            <Banner></Banner>
            <Estate></Estate>
            <Agents></Agents>
            <About></About>
        </div>
    );
};

export default Home;