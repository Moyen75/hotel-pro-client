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
import Login from './shared/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Register from './shared/Register/Register';
import PrivateRoute from './shared/PrivateRoute/PrivateRoute';
import Dashboard from './Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/breakfast' element={<Breakfast />}></Route>
            <Route path='/breakfast-details/:id' element={<PrivateRoute><BreakfastDetails /></PrivateRoute>}></Route>
            <Route path='/launch-details/:id' element={<PrivateRoute><LaunchDetails /></PrivateRoute>}></Route>
            <Route path='/dinner-details/:id' element={<PrivateRoute><DinnerDetails /></PrivateRoute>}></Route>
            <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}></Route>
            <Route path='/launch' element={<Launch />}></Route>
            <Route path='/dinner' element={<Dinner />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
