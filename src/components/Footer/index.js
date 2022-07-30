import './Footer.css';

export default function Footer(){
    return(
        <footer>
            <div className='center'>
			    <div className='col-footer'>
				    <h2>Suporte</h2>
				    <a href="">Contato</a>
				    <a href="">FAQ</a>
			    </div>
			    <div className='col-footer'>
				    <h2>Consultoria</h2>
				    <a href="">Metodologia</a>
				    <a href="">Cases</a>
			    </div>
			    <div className='col-footer'>
				    <h2>Empresa</h2>
				    <a href="">Sobre</a>
				    <a href="">Politica de Privacidade</a>
			    </div>
			    <div className='col-footer'>
				    <img src="/imagens/logo-footer.png" />
			    </div>
		    </div>
        </footer>
    )
}