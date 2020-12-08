
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
import PaymentPage from './App/Pages/PaymentPage/PaymentPage';
import PlaceOrderPage from './App/Pages/PlaceOrderPage/PlaceOrderPage';
import OrderPage from './App/Pages/OrderPage/OrderPage';
import UsersPage from './App/Pages/Admins/UsersPage/UsersPage';
import EditUserPage from './App/Pages/EditUserPage/EditUserPage';
import ProductListPage from './App/Pages/Admins/ProductsPage/ProductsPage';

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
            <Route path='/payment' component={PaymentPage} />
            <Route path='/placeOrder' component={PlaceOrderPage} />
            <Route path='/orders/:id' component={OrderPage} />
            <Route path='/admin/userList' component={UsersPage} />
            <Route path='/admin/users/:id/edit' component={EditUserPage} />
            <Route path ='/admin/productsList' component={ProductListPage} />
          </Switch>
        <Footer />

    </div>
  );
}

export default App;
