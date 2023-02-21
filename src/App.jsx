import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/auth/login';
import OTP from './pages/auth/otp';
import Register from './pages/auth/register';
import Checkout from './pages/checkout';
import Home from './pages/home';
import Mybag from './pages/my-bag';
import ProductDetail from './pages/product-detail';
import Profile from './pages/profile';
import Search from './pages/search';
import Transaction from './pages/transaction';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/home'} replace='true' />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/otp/:email' element={<OTP/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/my-bag' element={<Mybag/>} />
          <Route path='/search/:key' element={<Search/>} />
          <Route path='/product-detail/:id' element={<ProductDetail/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/transaction' element={<Transaction/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
