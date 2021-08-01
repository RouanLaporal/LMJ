import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import { useState } from 'react';
import '../styles/Layout.css';
import logo from '../assets/logo.png';


function App(){
  const [cart, updateCart] = useState([])//Il est important de préciser une valeur initiale dans votre state. Sinon, elle sera undefined par défaut, et ce n'est pas un comportement souhaitable 
  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison Jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison Jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/> 
        <ShoppingList cart = {cart} updateCart={updateCart}/> 
      </div>
      <Footer/>
    </div>
  )
}

export default App;
