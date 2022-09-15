import React, {useEffect, useState} from "react";
import "./Monster.css"
import monster from "../DB/monster.json"


const Monster = () => {

let mainText = document.querySelector("text_an")

window.addEventListener('scroll',()=>{
    let value = window.scrollY
    console.log(value)

    if(value>100){
        mainText.style.animation=`slideout 1s ease-out forward`;
    }
})

    return(
        <>
            {monster.Monster.map(mon =>(
                        <div key={mon.id} className="background_mon">
                            {/* {mon.check? Check() : NoCheck()} */}
                            <img src={process.env.PUBLIC_URL + mon.imgname} className="photo_mon"/>
                            <div className="text_an">
                                <h3>" {mon.title} "</h3>
                                <h4>{mon.explanation}</h4>
                            </div>
                            {/* {check} */}
                            </div>
                    ))}
        
        </>
    )
}

export default Monster;