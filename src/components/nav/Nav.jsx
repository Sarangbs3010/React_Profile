import React from "react";
import "./nav.css";
import {BiHomeAlt2} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {AiFillBook} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {IoMdContact} from 'react-icons/io';
import { useState } from "react";
function Nav(){
    const [activeNav,setActiveNav]=useState("#");
    function home(){
        setActiveNav("#")
    }
    function about(){
        setActiveNav("a")
    }
    function experience(){
        setActiveNav("e")
    }
    function service(){
        setActiveNav("s")
    }
    function contact(){
        setActiveNav("c")
    }
    return(
        <nav className="navigation">
            <a href="#" onClick={home} className={activeNav=="#"?"active":""}><BiHomeAlt2/></a>
            <a href="#about" onClick={about} className={activeNav=="a"?"active":""}><AiOutlineUser /></a>
            <a href="#experience" onClick={experience} className={activeNav=="e"?"active":""}><AiFillBook/></a>
            <a href="#services" onClick={service} className={activeNav=="s"?"active":""}><RiServiceLine/></a>
            <a href="#contact" onClick={contact} className={activeNav=="c"?"active":""}><IoMdContact/></a>
        </nav>
    )
}

export default Nav;