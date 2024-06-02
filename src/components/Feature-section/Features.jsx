import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Pratik İmkanlar",
    desc: "•	Düzenlediğimiz etkinlikler ve online kaynaklar ile pratik yapma imkanı sağlıyoruz.",
    icon: "ri-discuss-line",
  },
  {
    title: "Dil Gelişim Programları",
    desc: "•	Deneyimli eğitmenlerimiz, öğrencilerimizin dil becerilerini geliştirmelerine yardımcı olmak için çeşitli programlar sunmaktadır.",
    icon: "ri-draft-line",
  },
  {
    title: "İngilizce Yetkinliği",
    desc: "•	Amacımız, herkesin İngilizceyi daha etkili ve güvenle kullanmasını sağlamaktır.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon} style={{color:'#13a4ac'}}></i>
                </h2>
                <h6 style={{fontSize:'18px'}}>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
