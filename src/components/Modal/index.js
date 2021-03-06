
import React from 'react';
import { FaRegWindowClose } from "react-icons/fa";

import resume1 from '../../assets/images/RESUME 2021-1.jpg';
import resume2 from '../../assets/images/RESUME 2021-2.jpg';



function Modal ({onClose}) {
    
    return(
        // JSX
    
        <div className="modalContainer">
            <div className="modalWrapper">
                <span className="closeBtn" onClick={onClose}>
                    <FaRegWindowClose/>
                </span>
                <img className = "resume" src={resume1} alt= "resume1"/>
                <img className = "resume" src={resume2} alt= "resume2"/>

            </div>
        </div>
        
    );
}

export default Modal;