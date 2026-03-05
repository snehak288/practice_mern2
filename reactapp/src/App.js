import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Address from './Components/Address';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/address' element={<Address/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
