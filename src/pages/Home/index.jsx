import './style.css';
import FeaturedInfo from '../../components/FeatureInfo';
import Chart from '../../components/chart';
import Widget from '../../components/widget';
import WidgetLg from '../../components/widgetLg';

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
      <div className="home__widgets">
        <Widget />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
