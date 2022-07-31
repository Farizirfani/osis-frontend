// import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar';
import LoginAdmin from './Admin/Login/Login';

function App() {
  return (
    <div className="App">
      <div className='nav'>
            <Navbar />
      </div>
      <div className='loginAdmin'>
            <LoginAdmin />
      </div>
    </div>
  );
}

export default App;
