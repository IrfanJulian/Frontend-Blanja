import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ForgotPassword from './pages/auth/forgot password';
import ChangePassword from './pages/auth/forgot password/checngePassword';
import Login from './pages/auth/login';
import OTP from './pages/auth/otp';
import Register from './pages/auth/register';
import Checkout from './pages/checkout';
import Home from './pages/home';
import Mybag from './pages/my-bag';
import ProductDetail from './pages/product-detail';
import Profile from './pages/profile';
import Search from './pages/search';
import SearchCategory from './pages/search/category';
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
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/change-password/:email' element={<ChangePassword/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/my-bag' element={<Mybag/>} />
          <Route path='/search/:key' element={<Search/>} />
          <Route path='/search-category/:key' element={<SearchCategory/>} />
          <Route path='/product-detail/:id' element={<ProductDetail/>} />
          <Route path='/checkout/:id' element={<Checkout/>} />
          <Route path='/transaction' element={<Transaction/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
