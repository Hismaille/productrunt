import './Clientes.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Clientes(){
    var settings ={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return(
    <section className='clientes-slider'>
		<div className='center'>
            <div className='slider-container'>
                <Slider {...settings}>
                <img src="/imagens/amazon.jpg" />
                <img src="/imagens/costco.jpg" />
                <img src="/imagens/dominos.jpg" />
                <img src="/imagens/uber.jpg" />
                <img src="/imagens/walmart.jpg" />
                <img src="/imagens/amazon.jpg" />
                <img src="/imagens/costco.jpg" />
                <img src="/imagens/dominos.jpg" />
                <img src="/imagens/uber.jpg" />
                <img src="/imagens/walmart.jpg" />
                </Slider>
            </div>
		</div>
	</section>
    )
}

export default Clientes