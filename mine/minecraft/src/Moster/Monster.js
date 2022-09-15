import React, {useEffect, useState} from "react";
import "./Monster.css"
import monster from "../DB/monster.json"
import MonsterImg from "../images/monster.jpg"


const Monster = () => {

// let mainText = document.querySelector("text_an")

// window.addEventListener('scroll',()=>{
//     let value = window.scrollY
//     console.log(value)

//     if(value>100){
//         mainText.style.animation=`slideout 1s ease-out forward`;
//     }
// })



    return(
        <>
            <div className="subheading2">
                <div className="sub_boxframe">
                    <img src={MonsterImg} className="sub_boximg"></img>
                </div>
                <div className="sub_add_explanation">
                    <h5 style={{margin: " 0px 0px 0px 30px"}}>다양한 몬스터 종류를 확인해보세요!</h5>
                </div>
            </div>

            {monster.Monster.map(mon =>(
                        <div key={mon.id} className="container2">
                                    <div className="item front">
                                        <img src={process.env.PUBLIC_URL + mon.imgname} className="photo_mon"/>
                                        <h3 className="text_center text_color">" {mon.title} "</h3>
                                        <span className="sm_text">✔ 클릭해 보세요!</span>
                                    </div>
                                    <div className="item back">
                                        <h4 className="text_center text_wid">{mon.explanation}</h4>
                                    </div>
                        </div>
                    ))}
        
        {/* <div className="container2">
            <div className="item front">
                <span className="sm_text">✔ 클릭해 보세요!</span>
            </div>
            <div className="item back">뒷면</div>
        </div> */}

        {/* <div class="container2">
            <div class="item front">앞면</div>
            <div class="item back">뒷면</div>
        </div> */}
        </>
    )
}

export default Monster;