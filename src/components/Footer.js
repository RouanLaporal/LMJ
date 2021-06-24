import React from 'react';
import { useState } from 'react';
import '../styles/Footer.css';


function Footer(props) {
    const [inputValue, setInputValue]= useState('')
    function checkMail(e){
        setInputValue(e.target.value) 
    }

    function handleBlur(){
        if(!inputValue.includes('@')){
            alert("L'adresse n'est pas valide")
        }
    }
    return (
      <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
		    </div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <form>
                <input type='email' onChange={checkMail} value={inputValue} onBlur={handleBlur}></input>
            </form>
      </footer>
    );
}

export default Footer;