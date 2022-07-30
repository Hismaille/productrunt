import './Metodologia.css'
import { Link } from 'react-router-dom'


export default function Metodologia(){
    return(
        <section className='metodologia'>
		    <div className='center'>
			    <h2>Conheça nossa Metodologia</h2>
			    <p>O que acha de fazermos o que mais gostamos de fazer? Conversar!<br />Entre em contato por e-mail ou telefone.</p>
			    <Link to="/contato">Entrar Contato</Link>
		    </div>
	    </section>
    )
}