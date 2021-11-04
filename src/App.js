import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageAdmin from './components/ManageAdmin/ManageAdmin';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';
import MyOrder from './components/MyOrder/MyOrder';
import OurBlog from './components/OurBlog/OurBlog';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import TourPackage from './components/TourPackage/TourPackage';
import Traveler from './components/Traveler/Traveler';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/package">
              <TourPackage></TourPackage>
            </Route>
            <Route path="/blog">
              <OurBlog></OurBlog>
            </Route>
            <Route path="/traveler">
              <Traveler></Traveler>
            </Route>
            <PrivateRoute path="/booking/:bookingId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/myorders">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageorders">
              <ManageAllOrder></ManageAllOrder>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/admin">
              <ManageAdmin></ManageAdmin>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
