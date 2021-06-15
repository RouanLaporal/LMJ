import '../styles/Cart.css'
function Cart() {
    var mPrice = 8;
    var lPrice = 10;
    var bPrice = 15; 
    return (
    <div className='lmj-cart'>
        <h2>Panier</h2>
        <ul>
            <li>Monstera: { mPrice } €</li>
            <li>Lierre: { lPrice } €</li>
            <li>Bouquet: { bPrice } €</li>
        </ul>
        Total:  { mPrice + lPrice + bPrice } €
    </div>
    )
}

export default Cart;