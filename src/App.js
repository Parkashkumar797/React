// import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './layouts/Contact';
import About from './layouts/About';
import Header from './layouts/Header.js';
import Footer from './Footer.js';
import Homepage from './Homepage.js';
import Error from './Error.js';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='header' element={<Header/>} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About/>} />
          <Route path='footer' element={<Footer/>} />
          <Route path='/*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}
export default App;
