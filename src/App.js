import './App.scss';
import Header from './Components/Header';
import Clients from './Components/Clients';
import Section from './Components/Section';
import Product from './Components/Product';
import Product2 from './Components/Product2';
import Connect from './Components/Connect';
import Testimonial from './Components/Testimonial';
import Search from './Components/Search';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
			<Header></Header>
			<Clients></Clients>
			<Section></Section>
			<Product></Product>
			<Product2></Product2>
			<Connect></Connect>
			<Testimonial></Testimonial>
			<Search></Search>
			<Footer></Footer>
    </div>
  );
}

export default App;
