import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import DashBord from './pages/DashBord';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SighUp from './pages/SighUp';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Homepage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/sighup' element={<SighUp/>}/>
        <Route path='/dashbord' element={<DashBord/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
