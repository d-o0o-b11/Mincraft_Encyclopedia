import React from "react"
import { Mobile, PC } from "./MediaQuery/MediaQuery.js"
import Main from "./Mainpage/Main"
import Option from "./Option/Option"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () =>{


  return(
    <BrowserRouter>

    {/* 라우터밖에 기재하면 반복되는 화면 */}

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/option" element={<Option/>}/>
      </Routes>



    </BrowserRouter>
  )
}

export default App;
