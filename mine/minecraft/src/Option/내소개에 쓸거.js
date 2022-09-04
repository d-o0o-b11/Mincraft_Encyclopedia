// import React, {useEffect} from "react";
// import "./Etc.css"
// import test from "../../images/craft/stick.jpg"



// const Etc = () =>{

//     // useEffect 사용한 이유:
//     // 화면이 렌더링 되기 전에 실행을 할 경우엔 frame 변수 값이 null로 받아온다.
//     // 그래서 화면을 먼저 렌더링 후 값을 받아오는 것으로 순서를 바꿨다.

//     useEffect(()=>{
//         const frame = document.getElementById('frame')
//         const card = document.getElementById('card')
//         const light = document.getElementById('light')
    
//         let {x, y, width, height} = frame.getBoundingClientRect()
    
//         function mouseMove (e){
//             const left = e.clientX - x 
//             const top = e.clientY - y
//             const centerX = left - width/2
//             const centerY = top - height/2
//             const d = Math.sqrt(centerX**2 + centerY**2) 
    
//             card.style.transform =`
//                 rotate3d(
//                     ${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg
//                 )
//             `    

//             // light.style.backgroundImage =`
//             //     radial-gradient(
//             //         circle at ${left}px ${top}px, #0000010, #ffffff00, #ffffff70)
//             //     )
//             // `  
//         }
    
//         frame.addEventListener('mouseenter', ()=>{
//             frame.addEventListener('mousemove',mouseMove)
//         })
    
//         frame.addEventListener('mouseleave',()=>{
//             frame.removeEventListener('mousemove',mouseMove)
//         })
//     })

//     return(
//         <>
//         <div className="wrap_frame">
//             <div id="frame">
//                 <div id="card">
//                     <div style={{textAlign:"center"}}>
//                         <img src={test} style={{width:"100px", height:"100px"}}/>
//                     </div>
//                 </div>
//             </div>
//         </div> 
            
//         </>
//     )



    

    
// }

// export default Etc;