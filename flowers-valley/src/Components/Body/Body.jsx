import React from "react";
import Links from "../Links/Links.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import './Body.css'

function Body() {

    return(
        <div className="Body-container">

        {/* Foto de Perfil */}
        <img className="Body-img" src="https://placehold.co/100" alt="" /> 
        {/* Título */}
        <div className="Body-text">Flower's Valley</div>

        {/* Lista de redes sociais */}
        <ul className="Body-socials">
            {/* Links de cada rede social, com seu ícone */}
            <li>
                <a className="Body-links" href="https://www.instagram.com/flowersvalleyatelie/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
            </li>
        </ul>

        {
        //? Componentes do Link que incluem:
        
        //*Link que redireciona para o site específico
        //*Imagem de cada link, dando um preview do que se trata
        //*Texto, indicando qual link está direcionando
        }
        <Links 
        href="https://legacy.reactjs.org/docs/components-and-props.html"
        img="/cloud.png"
        text="Contate agora!"
        />
        <Links 
        href="https://legacy.reactjs.org/docs/components-and-props.html"
        img="/cloud.png"
        text="Contate agora!"
        />
        <Links 
        href="https://legacy.reactjs.org/docs/components-and-props.html"
        img="/cloud.png"
        text="Contate agora!"
        />
        </div>
    )
}

export default Body