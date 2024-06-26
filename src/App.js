import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import LoginSignup from './pages/LoginSignup';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import woman_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div >
      <HashRouter>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Shop/>}/>
        <Route path='/mens' element = {<ShopCategory banner = {men_banner} category="men"/>}/>
        <Route path='/womans' element = {<ShopCategory banner = {woman_banner} category="women"/>}/>
        <Route path='/kids' element = {<ShopCategory banner = {kid_banner} category="kid"/>}/>
        <Route path='product' element= {<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/login' element = {<LoginSignup/>}/>

      </Routes>
      <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
