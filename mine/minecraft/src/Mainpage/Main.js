import React from "react"
import "./Main.css"
import { Link } from 'react-router-dom';
import clbtn from "../images/clickbtn.png"
import logo from "../images/logo.png"

const Main = () =>{

    return (
        <div className="allbody">
            <div className="logo_margin">
                <img src={logo}/>
            </div>
            
            <Link to="/option">
                <img src={clbtn} className="clickbtn"/>
            </Link>
        </div>
    )
}

export default Main