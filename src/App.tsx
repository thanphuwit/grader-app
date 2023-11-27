import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Navbar from './component/Navbar'
import Grade from './pages/Grade'
// import Grade from './pages/Grade'
// import Result from './pages/Result'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Grade/>}/>
              <Route path="/Grade" element={<Grade/>}/>
              {/* <Route path="/Grade" element={<Grade/>}/>
              <Route path="/Result" element={<Result/>}/>   */}
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
