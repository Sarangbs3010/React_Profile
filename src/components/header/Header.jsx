import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png"
import Socials from "./Socials";
function Header(){
    return(
       <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Sarang</h1>
            <h5 className="text-light">FullStack Developer</h5>
            <CTA />
            <Socials />
            <div className="me">
                <img src={ME} alt="Image Not Found" />
            </div>
            <a href="#contact" className="scroll__down">Scroll Down</a>
            
        </div>
       </header>
    )
}

export default Header;