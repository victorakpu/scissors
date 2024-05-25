import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';


import Analytics from './components/Analytics';
import ScanCode from './components/ScanCode';
import LinkShortner from './components/LinkShortner';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <div className="App bg-gray-100">
    </div>
    <Routes>
    <Route path='/' element={<Home />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/scan-code' element={<ScanCode />} />
        <Route path='/link-shortner' element={<LinkShortner />} />
        
    </Routes>
 <Footer/>
    </BrowserRouter>
  );
}

export default App;
