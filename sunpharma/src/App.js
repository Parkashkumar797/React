
import { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact.js';
import About from './About.js';
import Cart from './Cart.js';
import Home from './Home.js';
import Shop from './Store.js';
import Checkout from './Checkout.js';
import Shopsingle from './Shopsingle.js';
import Thankyou from './Thankyou.js';
import Error from './Error.js';
import Master from './Master.js';
function App() {
  return (
<Fragment>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Master/>}>
  <Route path='/' element={<Home/>}/>
  <Route path='/store' element={<Shop/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/checkout' element={<Checkout/>}/>
  <Route path='/shopsingle' element={<Shopsingle/>}/>
  <Route path='/thankyou' element={<Thankyou/>}/>
  </Route>
  <Route path='/*' element={<Error/>}/>
</Routes>
</BrowserRouter>
</Fragment>
  )
}

export default App;
