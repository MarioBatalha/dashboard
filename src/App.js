import './App.css';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">Others</div>
      </div>
    </>
  );
}

export default App;
