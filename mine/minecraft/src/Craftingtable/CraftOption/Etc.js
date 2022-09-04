import React, {useEffect, useState} from "react";
import "./Etc.css"
import test from "../../images/logo.png"
import test1 from "../../images/sheep.png"
import test2 from "../../images/monster.jpg"



const Etc = () =>{

    // let [count, SetCount] = useState(0)

    // useEffect(()=>{
    //     document.querySelector('.btn2').addEventListener('click', function(){
    //         document.querySelector('.container').style.transform = 'translateX(-' + count * 100 + 'vw)'
    //     })

    //     document.querySelector('.btn1').addEventListener('click', function(){
    //         document.querySelector('.container').style.transform = 'translateX(' + count * 100 + 'vw)'
    //     })

    //     console.log(count*100);
    // })

    useEffect(()=>{
        const nextBtn = document.querySelector('.next-btn');
        const container = document.querySelector('.container');
        const prevBtn = document.querySelector('.prev-btn');
        const slideLength = document.querySelectorAll('.inner img').length;

        let currentSlide = 1;
        const IMAGE_WIDTH = 100;

        //next btn
        nextBtn.addEventListener('click', next);

        function next(){
            console.log(currentSlide);
            if (currentSlide >= slideLength) {
                currentSlide = 0;
              }
            container.style.transform = `translateX(-${IMAGE_WIDTH * currentSlide}vw)`;
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
            container.style.transform = `translateX(-${IMAGE_WIDTH * (currentSlide - 1)}vw)`;
        }
    })
    
    return(
        <>
        <div className="noneScroll">  
            <div className="container">
                <div className="inner">
                    <img src={test}/>
                </div>
                <div className="inner">
                    <img src={test1}/>
                </div>
                <div className="inner">
                    <img src={test2}/>
                </div>
            </div>
        </div>

        <button className="prev-btn">prev</button>
        <button className="next-btn">next</button>
        </>
        
    )



    

    
}

export default Etc;