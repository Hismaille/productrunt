import './Depoimento.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Depoimento(){
    var settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };
    return(
        <section className='depoimentos'>
		    <div className='center'>
			    <h2>Depoimentos</h2>
			        <div className='depoimentos-box'>
                        <Slider {...settings}>
				        <div className='depoimento-single'>
					        <p>"O envolvimento e a imersão da equipe do time 17, me inspirou e me ajudou mito a desenvolver esse lindo layout. Obrigado mentor"</p>
					        <p>Hismaille Henrique</p>
					        <img src="/imagens/autor.jpg" />
				        </div>

				        <div className='depoimento-single'>
					        <p>"Descobri uma tecnica na mentoria que foi bem útil no meu dia a dia de trabalho, se chama Pomodoro, valeu a pena. "</p>
					        <p>Henrique de Andrade</p>
					        <img src="/imagens/autor1.jpg" />
				        </div>

				         <div className='depoimento-single'>
					        <p>"Codificar todos os dias melhora ainda mas suas habilidades, então foco no 1% de melhoria todos os dias que daqui 100 dia vc estará 100% melhor que hoje."</p>
					        <p>Pedro Marins</p>
					        <img src="/imagens/autor2.jpg" />
				        </div>
                        </Slider>
			        </div>
		    </div>
	    </section>
    )
}

