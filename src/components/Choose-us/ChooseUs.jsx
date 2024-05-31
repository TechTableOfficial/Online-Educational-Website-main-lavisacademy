import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import "./choose-us.css";

import ReactPlayer from "react-player";
const chooseImg = "https://idc.edu/wp-content/uploads/2018/02/8-Ways-to-Learn-English-Faster.jpg";
const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row style={{ alignItems: 'center' }}>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Hatice Dayı Kimdir?</h2>
              <ul >
                <li style={{ fontSize:'18px', marginBottom:'3%',fontFamily:'serif' }}>2004 doğumlu Gürcistan/Tiflis’te yaşayan genç bir öğretmenimizdir.</li>
                <li style={{ fontSize:'18px', marginBottom:'3%',fontFamily:'serif' }}>Eğitiminin bir kısmını İngiliz-Gürcü, bir kısmını ise Amerikan-Gürcü okulunda tamamlamıştır.</li>
                <li style={{ fontSize:'18px', marginBottom:'3%',fontFamily:'serif' }}>2024 yılında TESOL (Teaching English to Speakers of Other Languages) eğitimi almıştır.</li>
                <li style={{ fontSize:'18px', marginBottom:'3%',fontFamily:'serif' }}>2023 yılından itibaren İngilizce Eğitim Koçluğu vermektedir.</li>
                <li style={{ fontSize:'18px', marginBottom:'3%',fontFamily:'serif' }}>İngilizce haricinde konuştuğu ve eğitim verdiği bir diğer dil olan Gürcü dili bulunmaktadır.</li>
              </ul>
            </div>

          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              <img src={chooseImg} alt="" className="w-100" style={{borderRadius:'13%'}} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
