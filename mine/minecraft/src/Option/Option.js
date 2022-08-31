import React from "react"
import "./Option.css"
import logo from "../images/logo.png"
import Craftingtable from "../images/Crafting table.png"
import Monster from "../images/monster.jpg"
import Sheep from "../images/sheep.png"
import { Link } from 'react-router-dom';

const Option = () => {

const nextpage = () =>{
    window.location.href="/Craftingtable"
}

return(
    <div className="option_body">
        <div className="logo_margin2">
            <img src={logo} className="logo_size"/>
        </div>
        <h3>원하는 항목을 클릭해주세요!</h3>

<div className="test">
        <div className="option_box_right" onClick={nextpage}>
            <div className="boxframe">
                <img src={Craftingtable} className="boximg"></img>
            </div>
            <div className="add_explanation">
                <h5 style={{margin: " 0px 0px 0px 30px"}}>조합대</h5>
                <h6 style={{margin: " 10px 0px 0px 30px"}}>이거는 이거다</h6>
            </div>
        </div>
</div>

        <div className="option_box_left">
            <div className="boxframe">
                <img src={Monster} className="boximg"></img>
            </div>
            <div className="add_explanation">
                <h5 style={{margin: " 0px 0px 0px 30px"}}>몬스터</h5>
                <h6 style={{margin: " 10px 0px 0px 30px"}}>이거는 이거다</h6>
            </div>
        </div>
        
        <div className="test2">        
        <div className="option_box_right">
            <div className="boxframe">
                <img src={Sheep} className="boximg"></img>
            </div>
            <div className="add_explanation">
                <h5 style={{margin: " 0px 0px 0px 30px"}}>동물</h5>
                <h6 style={{margin: " 10px 0px 0px 30px"}}>이거는 이거다</h6>
            </div>
        </div>
        </div>

    </div>
)

}

export default Option