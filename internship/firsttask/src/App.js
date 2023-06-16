import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Sideover from './components/sideover';
import Pricing from './components/pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Sideover/>
     <Pricing/>
     <Footer/>
    </div>
  );
}

export default App;
