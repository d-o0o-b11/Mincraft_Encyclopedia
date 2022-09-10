import React, {useEffect, useState} from "react";
import "./Option.css"
import { ArrowLeftCircle, ArrowRightCircle} from 'react-bootstrap-icons'
import ingredient from "../../DB/data.json"

const Weapon = () =>{

    useEffect(()=>{
        const nextBtn = document.querySelector('.next-btn');
        const container = document.querySelector('.slides');
        const prevBtn = document.querySelector('.prev-btn');
        const slideLength = document.querySelectorAll('.card').length;

        let currentSlide = 1;
        const IMAGE_WIDTH = 350;
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
            <div className="slide_wrapper "> 
                <div className="slides">
                    <div className="wrap_frame">

                        {ingredient.Weapon.map(weapon =>(
                            <div className="frame">
                                <div className="card">
                                    <div key={weapon.id} className="img_center">
                                        <img src={process.env.PUBLIC_URL + weapon.imgname} className="img_center"/>
                                        <h4>{weapon.title}</h4>
                                        <h6>{weapon.explanation}</h6>
                                    </div>
                                </div>
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

export default Weapon;