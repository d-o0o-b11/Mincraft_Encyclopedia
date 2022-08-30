import React from "react"
import "./Option.css"
import logo from "../images/logo.png"
import Craftingtable from "../images/Crafting table.png"
import Monster from "../images/monster.jpg"
import Sheep from "../images/sheep.png"

const Option = () => {

return(
    <div className="option_body">
        <div className="logo_margin2">
            <img src={logo} className="logo_size"/>
        </div>
        <h3>원하는 항목을 클릭해주세요!</h3>

        <div className="option_box">
            <div className="boxframe">
                <img src={Craftingtable} className="boximg"></img>
            </div>
            <div className="add_explanation">
                <h5 style={{margin: " 0px 0px 0px 0px"}}>조합대</h5>
                <h6 style={{margin: " 10px 0px 0px 0px"}}>이거는 이거다</h6>
            </div>
        </div>

        <div className="option_box">
            <div className="boxframe">
                <img src={Monster} className="boximg"></img>
            </div>
            <div className="add_explanation">
                <h5 style={{margin: " 0px 0px 0px 0px"}}>조합대</h5>
                <h6 style={{margin: " 10px 0px 0px 0px"}}>이거는 이거다</h6>
            </div>
        </div>
        
        <div className="option_box">
            <div className="boxframe">
                <img src={Sheep} className="boximg"></img>
            </div>
            <div className="add_explanation">
                <h5 style={{margin: " 0px 0px 0px 0px"}}>조합대</h5>
                <h6 style={{margin: " 10px 0px 0px 0px"}}>이거는 이거다</h6>
            </div>
        </div>

    </div>
)

}

export default Option