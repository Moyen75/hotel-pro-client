import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Breakfast from './shared/Breakfast/Breakfast';
import Launch from './shared/Launch/Launch';
import Dinner from './shared/Dinner/Dinner';
import BreakfastDetails from './shared/BreakfastDetails/BreakfastDetails';
import LaunchDetails from './shared/LaunchDetails/LaunchDetails';
import DinnerDetails from './shared/DinnerDetails/DinnerDetails';
import Login from './shared/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Register from './shared/Register/Register';
import PrivateRoute from './shared/PrivateRoute/PrivateRoute';
import Dashboard from './Dashboard/Dashboard/Dashboard';
import UserOrder from './Dashboard/Users/UserOrder/UserOrder';
import DashboardHome from './Dashboard/DashboardHome/DashboardHome';
import RateUs from './Dashboard/Users/RateUs/RateUs';
import MakeAdmin from './Dashboard/Admin/MakeAdmin/MakeAdmin';
import Chat from './Components/Chat';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/breakfast' element={<Breakfast />}></Route>
            <Route path='/breakfast-details/:id' element={<PrivateRoute><BreakfastDetails /></PrivateRoute>}></Route>
            <Route path='/launch-details/:id' element={<PrivateRoute><LaunchDetails /></PrivateRoute>}></Route>
            <Route path='/dinner-details/:id' element={<PrivateRoute><DinnerDetails /></PrivateRoute>}></Route>
            <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
              <Route path='' element={<DashboardHome></DashboardHome>}></Route>
              <Route path='userOrders' element={<UserOrder></UserOrder>}></Route>
              <Route path='makeAdmin' element={<MakeAdmin />}></Route>
              <Route path='rate' element={<RateUs></RateUs>}></Route>
            </Route>
            <Route path='/chat' element={<Chat />}></Route>
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
