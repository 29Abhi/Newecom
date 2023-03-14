import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Despensaries from './Components/Despensaries';
import Deliveries from './Components/Deliveries';
import Strains from './Components/Strains';
import Products from './Components/Products'
import More from './Components/More'
import Learn from './Components/Learn'
import Deals from './Components/Deals'
import Brands from './Components/Deals'



function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Despensaries/>} />
        <Route path='/Deliveries' element={<Deliveries/>} />
        <Route path='/Strains' element={<Strains/>} />
        <Route path='/Products' element={<Products/>} />
        <Route path='/More' element={<More/>} />
        <Route path='/Learn' element={<Learn/>} />
        <Route path='/Deals' element={<Deals/>} />
        <Route path='/Brands' element={<Brands/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
