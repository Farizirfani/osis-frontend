// import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar';
import LoginAdmin from './Admin/Login/Login';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className='nav'>
            <Navbar />
      </div>
      <div className='loginAdmin'>
            <LoginAdmin />
      </div>
      <div className='footer'>
            <Footer />
      </div>
    </div>
  );
}

export default App;
