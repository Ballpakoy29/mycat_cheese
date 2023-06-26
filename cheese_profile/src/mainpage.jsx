import { useState } from 'react'
import CatPeople from './img/cat_people.png'
import { Image, Typography } from 'antd';

const { Title } = Typography;

function MainPage() {

  return (
    <>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div>

        <Image
          src={CatPeople}
          preview={false}
          style={{ width: '100%', objectFit: 'cover' }}
        />
        <Title level={2} style={{ textAlign: 'center', marginTop: '16px' }}>
          Welcome to My Website
        </Title>
        <p style={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tellus euismod, sodales
          dui sit amet, rhoncus arcu.
        </p>
      </div>
    </div>

    </>
  )
}

export default MainPage
