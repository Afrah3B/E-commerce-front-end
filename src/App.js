import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './component/footer/Footer';
import { Navbar } from './component/navbar/Navbar';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Shop } from './pages/Shop';
import { SigninSignup } from './pages/SigninSignup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop category='shop'/>} />
        <Route path='/women' element={<Shop category='women'/>} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/signin' element={<SigninSignup />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
