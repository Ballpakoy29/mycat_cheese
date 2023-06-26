import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CatPeople from './img/cat_people.png'
import MainPage from './mainpage'

function App() {

  return (
    <>
      <div>
      {/* <img src={CatPeople} className="logo react" style={{ width: '100vw' , height : '100%'}} /> */}
      <MainPage></MainPage>
      </div>
    </>
  )
}

export default App
