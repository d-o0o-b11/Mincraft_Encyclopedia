import React from "react";
import ImgCrafttable from "../images/sheep.png"
import "./Animal.css"
import img1 from "../images/sheep.png"
import animal from "../DB/animal.json"

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
                <div className="moving_animal">
                    {animal.Animal.map(ani =>(
                        <div key={ani.id} className="frame_ani">
                            <img src={process.env.PUBLIC_URL + ani.imgname} className="animal_img"/>
                            <h3 className="animal_text">" {ani.title} "</h3>
                            <img src={process.env.PUBLIC_URL + ani.food} className="food_img"/>
                            <h5 className="animal_text">{ani.explanation}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Animal;