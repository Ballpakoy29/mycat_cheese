import { useState } from 'react'
import CatPeople from './img/cat_people.png'
import { Image } from 'antd';

function MainPage() {

  return (
    <>
      <div>
      <img src={CatPeople} className="logo react" style={{ width: '100vw', height: 'auto', objectFit: 'cover', verticalAlign: 'top' }} />
      {/* <Image
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
          }}
          src={CatPeople}
          preview={{ visible: false }}
        /> */}
      </div>
    </>
  )
}

export default MainPage
