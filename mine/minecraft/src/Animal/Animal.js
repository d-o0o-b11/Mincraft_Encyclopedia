import React from "react";
import ImgCrafttable from "../images/sheep.png"
import "./Animal.css"

const Animal = () =>{

    return(
        <>
            <div className="subheading2">
                <div className="sub_boxframe">
                    <img src={ImgCrafttable} className="sub_boximg"></img>
                </div>
                <div className="sub_add_explanation">
                    <h5 style={{margin: " 0px 0px 0px 30px"}}>동물들이 좋아하는 음식을 확인해보세요!</h5>
                </div>
            </div>

            <div className="moving">
                
            </div>
        </>
    )
}

export default Animal;