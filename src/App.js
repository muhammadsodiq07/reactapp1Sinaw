import './App.css';
import Header from "./components/header/header"
import Hero from './components/hero/hero';
import Heropass from './components/heroPass/heropass';
import Learn from './components/learn/learn';
import Webinar from './components/webinar/webinar';
import Pricing from './components/pricing/pricing';
import Topfooter from './components/topfooter/topfooter';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="container">
        <Header />
        <Hero/>
        <Heropass/>
        <Learn/>
        <Webinar/>
        <Pricing/>
        <Topfooter/>
        <Footer/>
    </div>
  );
}

export default App;
