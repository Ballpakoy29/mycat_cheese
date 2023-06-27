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

  function ProfileCard({ name, title, description, avatar }) {
    return (
      <Card>
        <Meta
          avatar={<Avatar src={avatar} />}
          title={name}
          description={title}
        />
        <Paragraph>{description}</Paragraph>
      </Card>
    );
  }

function MainPage() {

  return (
    <>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div>
      <Title
            level={2}
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

        </Title>
<Row gutter={[16, 16]} className="" style={{ marginBottom: '16px' }}>
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
