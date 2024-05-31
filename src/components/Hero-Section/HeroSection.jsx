import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hero-section.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const heroImg = "https://yonetim.citius.technology//haber/haber324/egitim.png";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row className="align-items-end">
          <Col lg="6" md="6" >
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Hakkımızda <br />
              </h2>
              <p className="mb-2 hero_content">
                LavisAcademy sizlere İngilizce öğreniminde profesyonel destek sunar.
                İngilizce öğrenim sürecinizi kolaylaştırmak ve hedeflerinize ulaşmanızı sağlamak için buradayız.
              </p>
              <p className="mb-2 hero_content">
                
                Bir eğitimciye ihtiyacınız olmadan her an her yerde İngilizce çalışabilmeniz için burdayız.
              </p>
              <p className="mb-2 hero_content">
                Graduated; Tesol kids And Teaching Practice Certificate.
              </p>
            </div>

          </Col>
          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
