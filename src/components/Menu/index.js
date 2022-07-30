import React from 'react';
import './Menu.css';
import { FaAlignJustify } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Menu() {
        return(
        <section className='topo'>
                <div className='center'>
                    <header>
                        <div class="logo"><img src="/imagens/logo.png"/></div>
                    </header>
                    <ul className='menu-desktop'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                    <div className='menu-mobile'>
                    <button>
                    <FaAlignJustify />
                    </button>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </div>
                    <div className='clear'></div>
                </div>
            </section>
    )
    
}

export default Menu