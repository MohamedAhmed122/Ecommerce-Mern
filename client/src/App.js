
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './App/Layouts/Footer/Footer';
import Navbar from './App/Layouts/Navbar/Navbar';
import CartPage from './App/Pages/CartPage/CartPage';
import HomePage from './App/Pages/HomePage/HomePage';
import ProductDetailedPage from './App/Pages/ProductDetailedPage/ProductDetailedPage';

function App() {
  return (
    <div>
        <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route  path='/product/:id' component={ProductDetailedPage} />
            <Route  path='/cart/:id?' component={CartPage} />
          </Switch>
        <Footer />

    </div>
  );
}

export default App;
