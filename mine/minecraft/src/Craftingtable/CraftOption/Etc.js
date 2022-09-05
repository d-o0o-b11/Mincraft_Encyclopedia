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
        const container = document.querySelector('.wrap_frame');
        const prevBtn = document.querySelector('.prev-btn');
        const slideLength = document.querySelectorAll('.card').length;

        let currentSlide = 1;
        const IMAGE_WIDTH = 100;
        // 100

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
        <div >
            <div className="container"> 
                <div className="wrap_frame">
                    <div className="test">
                    <div className="frame"> 
                        <div className="card">
                            <h1>1</h1>
                        </div>
                    </div> </div>
                        
                    
                    <div className="frame">
                        <div className="card">
                        <h1>2</h1>
                        </div>
                    </div>

                    <div className="frame">
                        <div className="card">
                        <h1>3</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button className="prev-btn" style={{height:"100px"}}>prev</button>
        <button className="next-btn" style={{height:"100px"}}>next</button>
        </>
        
    )



    

    
}

export default Etc;