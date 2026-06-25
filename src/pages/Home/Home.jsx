import Banner from "./Banner";
import HotJobs from "./HotJobs";
import LatestNews from "./LatestNews/LatestNews";


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <LatestNews></LatestNews>

            <HotJobs></HotJobs>
        </div>
    );
}

export default Home;
