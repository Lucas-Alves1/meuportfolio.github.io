import React from "react";
import './Heading.css';

export default function Heading(props){
    return(
        <div className="heading-container">
            <div className="heading-tela">
                <span>{props.title}</span>
            </div>

            {( props.subHeading ) ? (
                <div className="tela-sub-heading">
                    <span {...props.subHeading}></span>
                </div>
            ) : 
                <div></div>
            }

            <div className="heading-separador">
                <div className="separador-linha">
                    <div className="separador-forma">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}