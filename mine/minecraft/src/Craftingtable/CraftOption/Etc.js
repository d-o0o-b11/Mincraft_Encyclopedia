import React, {useEffect, useState} from "react";
import "./Etc.css"
import test from "../../images/logo.png"
import test1 from "../../images/sheep.png"
import test2 from "../../images/monster.jpg"
import { ArrowLeftCircle, ArrowRightCircle} from 'react-bootstrap-icons'
import ingredient from "../../DB/data.json"




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

                        {ingredient.Etc.map(etc =>(
                            <div className="frame">
                                <div className="card">
                                    <div key={etc.id} className="img_center">
                                        <img src={process.env.PUBLIC_URL + etc.imgname} className="img_center"/>
                                        <h6>{etc.explanation}</h6>
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

        {/* {ingredient.Etc.map(etc =>(
            <div key={etc.id}>
            <img src={process.env.PUBLIC_URL + etc.imgname}/>
            <h6>{etc.explanation}</h6>
            </div>
        ))} */}

        </>
        
    )



    

    
}

export default Etc;