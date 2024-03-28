import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductView from './pages/ProductView';
import Login from '../src/pages/Login'
import Account from './components/Account';
function App() {
  return (
    <div className="">
      <Dashboard />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product-view' element={<ProductView />} />
        <Route path='/login' element={<Login />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
