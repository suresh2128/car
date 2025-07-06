import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartList from './Components/cart';
import Spares from './Components/spares';
import Nav from './Components/Nav';
import Contact from './Components/contact';
import Service from './Components/service';
import Payment from './Components/payment';
import Imageslider from './Components/imageslider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}></Route>
        <Route path='/spares' element={<Spares/>}></Route>
        <Route path='/cart' element={<CartList/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/Image' element={<Imageslider/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
