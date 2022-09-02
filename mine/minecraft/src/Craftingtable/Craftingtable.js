import React, {useState} from "react"
import "./Craftingtable.css"
import ImgCrafttable from "../images/Crafting table.png"
import Weapon from "./CraftOption/Weapon"
import Clothes from "./CraftOption/Clothes"
import Etc from "./CraftOption/Etc"

import styled from 'styled-components';

const Craftingtable = () =>{

    const [check,SetCheck] = useState();

    const handleClickButton = e =>{
        const name = e.target.name;
        SetCheck(name);
    }

    const selectComponent = {
        first : <Weapon/>,
        second : <Clothes/>,
        third : <Etc/>,
    }

    console.log(check);
    console.log(selectComponent[check]);

    return(
        <>
        
            <div className="subheading">
                <div className="sub_boxframe">
                    <img src={ImgCrafttable} className="sub_boximg"></img>
                </div>
                <div className="sub_add_explanation">
                    <h5 style={{margin: " 0px 0px 0px 30px"}}>해당하는 조합법을 클릭하세요!</h5>
                </div>
            </div>

           
            {/* <hr style={{width:"100%", backgroundColor:"red"}}></hr> */}
            <div className="btn_center">
                <button onClick={handleClickButton} name='first' key='first' className="button_option"><h3>무기</h3></button>
                <button onClick={handleClickButton} name='second' key='second' className="button_option"><h3>옷</h3></button>
                <button onClick={handleClickButton} name='third' key='third' className="button_option"><h3>기타</h3></button>
            </div>

            <div className="wrapline">
                <div className="line">
                    {check && <>{selectComponent[check]}</> }

                </div>
            </div>
           

            
        
        </>
    )
}

export default Craftingtable;

const Content = styled.div`
  ${props => props.theme.flex('center', 'center')}
  width: 100%;
  height: 100%;
`;