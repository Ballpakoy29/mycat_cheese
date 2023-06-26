import { useState } from 'react'
import CatPeople from './img/cat_people.png'
import { Image } from 'antd';

function MainPage() {

  return (
    <>
      <div>
      <Image
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
          }}
          src={CatPeople}
        />
      </div>
    </>
  )
}

export default MainPage
