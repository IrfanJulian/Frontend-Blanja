import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Checkout from './pages/checkout';
import Home from './pages/home';
import Mybag from './pages/my-bag';
import ProductDetail from './pages/product-detail';
import ProfileCustomer from './pages/profile/customer/main';
import ProfileSeller from './pages/profile/seller/main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/home'} replace='true' />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/my-bag' element={<Mybag/>} />
          <Route path='/product-detail/:id' element={<ProductDetail/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/profile-customer' element={<ProfileCustomer/>} />
          <Route path='/profile-seller' element={<ProfileSeller/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
