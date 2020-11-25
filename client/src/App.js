import './App.css';
import CustomButton from './App/Components/CustomButton/CustomButton';
import Footer from './App/Layouts/Footer/Footer';
import Navbar from './App/Layouts/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
          <CustomButton title='Hello' />
        <div style={{height:'200px'}}>
        </div>
        <Footer />
    </div>
  );
}

export default App;
