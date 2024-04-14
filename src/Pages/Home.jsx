import { Helmet } from "react-helmet-async";
import About from "../Components/About";
import Agents from "../Components/Agents";
import Banner from "../Components/Banner";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Estates from "../Components/Estates";
AOS.init();

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Home - Find House</title>
            </Helmet>
            <Banner></Banner>
           <Estates></Estates>
            <Agents></Agents>
            <About></About>
        </div>
    );
};

export default Home;