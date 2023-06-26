import { useState } from 'react'
import CatPeople from './img/cat_people.png'
import { Image, Typography } from 'antd';
import { Card, Col, Row } from 'antd';
import { Carousel } from 'antd';

const { Title } = Typography;
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };


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
       <Title
            level={1}
            style={{
                textAlign: 'center',
                marginTop: '16px',
                fontFamily: 'Anuphan, sans-serif',
                fontWeight: 'bold',
                color: 'white',
            }}
            >
            พี่ชีส อดีตแมวจร
        </Title>
        {/* <Row className="mobile-scroll">
      <Col
        xs={{ span: 24 }}
        lg={{ span: 6, offset: 2 }}
      >
        Colะะะะะะะะะะะะะะะะะะะะะะะะะะะะะะะะะะะะะะะะะะหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหห
      </Col>
      <Col
        xs={{ span: 24 }}
        lg={{ span: 6, offset: 2 }}
      >
        Colหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหห
      </Col>
      <Col
        xs={{ span: 24 }}
        lg={{ span: 6, offset: 2 }}
      >
        Colหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหหห
      </Col>
    </Row> */}
<Row gutter={[16, 16]} className="" >
  <Col xs={{ span: 24 }} lg={{ span: 8 }}>
    <Card title="Card title" bordered={false}>
      Card content
    </Card>
  </Col>
  <Col xs={{ span: 24 }} lg={{ span: 8 }}>
    <Card title="Card title" bordered={false}>
      Card content
    </Card>
  </Col>
  <Col xs={{ span: 24 }} lg={{ span: 8 }}>
    <Card title="Card title" bordered={false}>
      Card content
    </Card>
  </Col>
</Row>
       
        
      </div>
    </div>

    </>
  )
}

export default MainPage
