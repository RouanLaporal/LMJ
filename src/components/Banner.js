import '../styles/Banner.css'
function Banner({children}) {
    // const currentMonth = new Date().getMonth()
    // const isSpring = currentMonth >= 2 && currentMonth <= 5 
    // const myTitle = "La maison jungle"
    // const recommendation = isSpring ? <div> C'est le printemps, rempotez</div> : <div>Ce n'est pas le moment de rempotez</div>
    return( 
        <div className='lmj-banner'>{children}</div>
    )
}

export default Banner