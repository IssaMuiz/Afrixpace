import LeftSidebar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import Navbar from "../Navbar";
import Feed from "../Feed";

const Home = () => {
  return (
    <div className="h-[2000px]">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <RightSidebar />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
