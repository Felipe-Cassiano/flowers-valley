import React from "react";
import Links from "../Links/Links.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import './Body.css'

function Body() {

    return(
        <div className="Body-container">

        <img className="Body-img" src="https://placehold.co/100" alt="" />
        <div className="Body-text">Flower's Valley</div>

        <ul className="Body-socials">
            <li>
                <a className="Body-links" href="https://www.instagram.com/flowersvalleyatelie/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
            </li>
        </ul>

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