import './App.css';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Home  from './pages/Home';

const App = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home /> 
      </div>
    </>
  );
}

export default App;
