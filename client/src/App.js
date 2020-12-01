
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './App/Layouts/Footer/Footer';
import Navbar from './App/Layouts/Navbar/Navbar';
import CartPage from './App/Pages/CartPage/CartPage';
import HomePage from './App/Pages/HomePage/HomePage';
import LoginScreen from './App/Pages/LoginScreen/LoginScreen';
import ProductDetailedPage from './App/Pages/ProductDetailedPage/ProductDetailedPage';
import RegisterPage from './App/Pages/ RegisterPage/RegisterPage'
import ProfilePage from './App/Pages/ProfilePage/ProfilePage';
import ShippingPage from './App/Pages/ShippingPage/ShippingPage';

function App() {
  return (
    <div>
        <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route  path='/product/:id' component={ProductDetailedPage} />
            <Route  path='/cart/:id?' component={CartPage} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/profile' component={ProfilePage} />
            <Route path='/shipping' component={ShippingPage} />
          </Switch>
        <Footer />

    </div>
  );
}

export default App;
