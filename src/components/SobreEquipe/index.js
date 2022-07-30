import React from "react";
import './SobreEquipe.css';

export default function SobreEquipe(){
    return(
        <>
        <section className="sobre-equipe">
            <div className="center">
                <div className="equipe-sobre-texto">
                    <h2>Uma equipe estratégica para um trabalho incrível</h2>
                    <p>Com foco permanente na geração de resultados para empresas, atuamos na consultoria estratégica e na criação e implementação de soluções de comunicação criativas, consistentes e adequadas às necessidades e características de cada companhia. Para isso, trabalhamos sempre em parceria e colaboração com interfaces e executivos das organizações, mantendo completo envolvimento com os negócios de cada cliente.</p>
                </div>
                <div className="w50">
                    <img src="/imagens/foto-equipe.jpg" />
                </div>
                <div className="clear"></div>
            </div>
	    </section>

	<section className="sobre-imagens">
		<div className="center">
			<div className="img-sobre">
				<img src="/imagens/imagem-sobre.jpg" />
			</div>
			<div className="img-sobre">
				<img src="/imagens/imagem-sobre1.png" />
			</div>
			<div className="img-sobre">
				<img src="/imagens/imagem-sobre2.png" />
			</div>
			<div className="img-sobre">
				<img src="/imagens/imagem-sobre3.png" />
			</div>
		</div>
	</section>
    </>
    )
}