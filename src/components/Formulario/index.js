import React from 'react'
import './Formulario.css'

export default function Formulario(){
    return(
            <>
            <section className="contato">
            <div className="center">
                <div className="contato-info">
                    <h2>A mais importante,<br/>primeira conversa.</h2>
                    <br />
                    <p><b>Telefone:</b> (62) 9901-3620</p>
                    <p><b>Email:</b> hismailledoc@gmail.com</p>
                    <p><b>Endereço:</b> Rua Castro Alves qd 132 lt 13 Jd. Nova Esperaça</p>
                </div>

                <div className="contato-form">
                    <form>
                        <input placeholder="Nome" type="text" />
                        <input placeholder="E-mail" type="text" />
                        <input placeholder="Telefone" type="text" />
                        <select>
                            <option>Geral</option>
                            <option>Suporte</option>
                        </select>
                        <textarea placeholder="Mensagem"></textarea>
                        <input type="submit" value="Enviar!" />
                    </form>
                </div>
                <div className="clear"></div>
            </div>
        </section>
        </>        
    )
}