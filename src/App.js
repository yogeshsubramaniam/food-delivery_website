import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Address from './pages/Address';
import Payment from './pages/Payment';
import OrderConfirm from './pages/OrderConfirm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/address" element={<Address />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/order-confirm" element={<OrderConfirm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
