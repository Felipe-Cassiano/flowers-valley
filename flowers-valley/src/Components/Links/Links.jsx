import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import "./Links.css"

function Links(props) {


    return(
            <a href={props.href} className="container" target="_blank">

                <img className="img" src={props.img} alt="Image" />

                <div className="text">{props.text}</div>

                <div className="arrow"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></div>

            </a>
    )
}

export default Links