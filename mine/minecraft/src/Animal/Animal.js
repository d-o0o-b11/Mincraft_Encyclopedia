import React,{useEffect} from "react";
import ImgCrafttable from "../images/sheep.png"
import "./Animal.css"
import animal from "../DB/animal.json"
import { ArrowLeftCircle, ArrowRightCircle} from 'react-bootstrap-icons'

const Animal = () =>{

    useEffect(()=>{
        const nextBtn = document.querySelector('.next-btn');
        const container = document.querySelector('.slides2');
        const prevBtn = document.querySelector('.prev-btn');
        const slideLength = document.querySelectorAll('.frame_ani').length;

        let currentSlide = 1;
        const IMAGE_WIDTH = 450;
        // 100

        //next btn
        nextBtn.addEventListener('click', next);

        function next(){
            // console.log(currentSlide);
            if (currentSlide >= slideLength) {
                currentSlide = 0;
              }
            container.style.transform = `translateX(-${IMAGE_WIDTH * currentSlide}px)`;
            // container.style.transform = `translateX(-300px)`;
            currentSlide++;
        }

        //prev-btn
        prevBtn.addEventListener('click', prev);
        function prev() {
            if (currentSlide === 1) {
                currentSlide = slideLength;
            } else {
                currentSlide--;
            }
            container.style.transform = `translateX(-${IMAGE_WIDTH * (currentSlide - 1)}px)`;
            // container.style.transform = `translateX(300px)`;
        }
    })

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

            <div className="slide_wrapper2 "> 
                <div className="slides2">
                <div className="wrap_frame2">
                    {animal.Animal.map(ani =>(
                        <div key={ani.id} className="frame_ani">
                            <img src={process.env.PUBLIC_URL + ani.imgname} className="animal_img"/>
                            <h3 className="animal_text">" {ani.title} "</h3>
                            <img src={process.env.PUBLIC_URL + ani.food} className="food_img"/>
                            <h4 className="animal_text">{ani.explanation}</h4>
                        </div>
                    ))}
                </div>
                </div>
            </div>


            <div className="subbtn_center">
                <button className="prev-btn"><ArrowLeftCircle/></button>
                <button className="next-btn"><ArrowRightCircle/></button>
            </div>
        </>
    )
}

export default Animal;