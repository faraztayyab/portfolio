import './App.css';
import Footer from './components/HeadFoot/Footer';
import Navbar from './components/Navbar';
import Portfolio from './components/pages/portfolio/Portfolio';
import Contact from './components/pages/Contact';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Navbar and theme toggle button */}
      <Navbar />
      {/* App routes */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
