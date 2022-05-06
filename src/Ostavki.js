import './Ostavki.css';
import React from "react";
import ava from './img/camera_50.png';
const Ostavki = (props) => {
    return(
        <div>
            
            <div className="ostavki">
                <img src={ava} className="avatar"/>
                <p className="name">{props.name}</p>
                <p className="message">{props.message}</p>
            </div>
        </div>
    )
}

export default Ostavki;