import './style.css';
import FeaturedInfo from '../../components/FeatureInfo';
import Chart from '../../components/chart';
import Widget from '../../components/widget';
import Board from '../../components/Board';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <Chart />
          <div className="home__widgets">
            <Widget />
            <Board />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
