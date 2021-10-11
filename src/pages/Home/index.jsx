import './style.css';
import FeaturedInfo from '../../components/FeatureInfo';
import Chart from '../../components/chart';

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
      <div className="home__widgets">

      </div>
    </div>
  );
};

export default Home;
