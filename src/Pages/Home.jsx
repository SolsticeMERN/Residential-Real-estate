import About from "../Components/About";
import Agents from "../Components/Agents";
import Banner from "../Components/Banner";
import Estate from "../Components/Estate";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Estate></Estate>
            <Agents></Agents>
            <About></About>
        </div>
    );
};

export default Home;