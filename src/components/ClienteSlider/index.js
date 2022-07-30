import './ClienteSlider.css';

function ClienteSlider(){
    return(
    <section className='diferenciais'>			
		<div className='center'>
				<h2>Contribuímos de ponta a ponta</h2>
			<div className='icons-diferenciais'>
				<div className='box-single-diferenciais'>
						<img src="/imagens/icon1.png" />
						<h3>Ambientes Mobile</h3>
						<p>Garanta que toda sua comunicação esteja alinhada com seu propósito, cada palavra conta.</p>
				</div>

				<div className='box-single-diferenciais'>
						<img src="/imagens/icon2.png" />
						<h3>Sites e Intranets</h3>
						<p>Um diálogo só acontece quando ambas as partes falam e escutam, garanta que seu público te entende.</p>
				</div>

				<div className='box-single-diferenciais'>
						<img src="/imagens/icon3.png" />
						<h3>Comunicação one-to-one</h3>
						<p>O digital veio pra ficar, sem dúvidas, mas uma comunicação integrada de verdade exige clareza nas descisões.</p>
				</div>
			</div>
		</div>
	</section>
    )

}

export default ClienteSlider