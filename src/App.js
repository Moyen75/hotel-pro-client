import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Breakfast from './shared/Breakfast/Breakfast';
import Footer from './pages/Home/Footer/Footer';
import Launch from './shared/Launch/Launch';
import Navigation from './pages/Home/Navigation/Navigation';
import Dinner from './shared/Dinner/Dinner';
import BreakfastDetails from './shared/BreakfastDetails/BreakfastDetails';
import LaunchDetails from './shared/LaunchDetails/LaunchDetails';
import DinnerDetails from './shared/DinnerDetails/DinnerDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/breakfast' element={<Breakfast />}></Route>
          <Route path='/breakfast-details/:id' element={<BreakfastDetails />}></Route>
          <Route path='/launch-details/:id' element={<LaunchDetails />}></Route>
          <Route path='/dinner-details/:id' element={<DinnerDetails />}></Route>
          <Route path='/launch' element={<Launch />}></Route>
          <Route path='/dinner' element={<Dinner />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
