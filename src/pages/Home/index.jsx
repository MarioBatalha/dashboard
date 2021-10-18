import './style.css';
import FeaturedInfo from '../../components/FeatureInfo';
import Chart from '../../components/chart';
import Widget from '../../components/widget';
import Board from '../../components/Board';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';

const Home = () => {
  const dateNow = new Date();
  const monthlyPrice = 13.6550;

  const dateNowFormatted = new Intl.DateTimeFormat('pt-AO').format(dateNow);
  const monthlyPriceFormatted = new Intl.NumberFormat('pt-AO', {
    style: 'currency',
    currency: 'AOA'
  }).format(monthlyPrice);

 const handlePlan = (dateNow, monthlyPriceFormatted) => {
   if(dateNow.getDay() <= 30 && dateNow.getDay() <= 31) {

   }
 }

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
