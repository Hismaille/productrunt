import  './Header.css';
import { FaAlignJustify } from "react-icons/fa";


function Header() {
        return(
    
		<section className='topo'>
			<div className='center'>
			<div className='time-descricao'>
				<h2>Melhore a comunicação com seu cliente e time.</h2>
				<p>Consultoria especializada em startups, empresas, principalmente, pessoas.</p>
				<a target="_blank" href="">Ver demonstração</a>
			</div>
			<div className='time-imagem'>
				<img src="/imagens/equipe.png" />
			</div>
			<div className='clear'></div>
			</div>
		</section>

    )
    
}

export default Header