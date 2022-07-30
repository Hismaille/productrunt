import React from 'react';
import Clientes from '../Clientes';
import ClienteSlider from '../ClienteSlider';
import Depoimento from '../Depoimento';
import Header from '../Header/Index';
import Metodologia from '../Metodologia';


export default function Home(){
    return(
        <>
        <Header />        
        <Clientes />
        <ClienteSlider />
        <Depoimento />
        <Metodologia />
        </>
    )
}