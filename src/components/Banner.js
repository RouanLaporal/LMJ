import '../styles/Banner.css'
import logo from '../assets/logo.png'
function Banner() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5 
    const myTitle = "La maison jungle"
    const recommendation = isSpring ? <div> C'est le printemps, rempotez</div> : <div>Ce n'est pas le moment de rempotez</div>
    return( 
    <div className='lmj-banner'>
        <img src={ logo } alt='La maison Jungle' className='lmj-logo' />
        <h1 className='lmj-title'>{ myTitle }</h1>
        {recommendation}
    </div>
    )
}

export default Banner