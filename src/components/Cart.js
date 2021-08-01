import '../styles/Cart.css'
import { useState } from 'react' //useState = hook = fonction qui permet de « se brancher » (to hook up) sur des fonctionnalités React. 
function Cart({  cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce(
        (acc,plantType) => acc + plantType.amount * plantType.price,
        0
    ) 
    return isOpen ? (
    <div className='lmj-cart'>
        <button  className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
        <h2>Panier</h2>
        {cart.map(({ name, price, amount }, index) => (
            <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
            </div>
        ))}
        Total:  { total } €
        <button onClick={() =>updateCart([])}>Vider le panier</button>
    </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button onClick = {() => setIsOpen(true)}>
                Ouvrir le panier
            </button>
        </div>
    )
}

export default Cart;