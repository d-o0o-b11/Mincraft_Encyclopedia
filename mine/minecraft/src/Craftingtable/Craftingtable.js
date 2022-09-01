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
            <button onClick={handleClickButton} name='first' key='first'>무기</button>
            <button onClick={handleClickButton} name='second' key='second'>옷</button>
            <button onClick={handleClickButton} name='third' key='third'>기타</button>
            

           
            {check && <>{selectComponent[check]}</> }

            
        
        </>
    )
}

export default Craftingtable;

const Content = styled.div`
  ${props => props.theme.flex('center', 'center')}
  width: 100%;
  height: 100%;
`;