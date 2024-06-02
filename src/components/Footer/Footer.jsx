import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

const footerQuickLinks = [
  {
    display: "Hakkımızda",
    url: "/",
  },
  {
    display: "Eğitim Paketlerim",
    url: "/courses-section",
  },
  {
    display: "İletişim",
    url: "/about-us",
  },
];

const footerInfoLinks = [
  {
    display: "Gizlilik Politikası",
    url: "#",
  },
  {
    display: "Üyelik",
    url: "#",
  },

  {
    display: "Satın Alma Rehberi",
    url: "#",
  },

  {
    display: "Kullanım Şartları",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="d-flex" style={{ justifyContent: 'center' }}>
        <Row className="justify-content-center" style={{ justifyContent: 'center' }}>

          <Col className="mb-4 text-center text-md-start">
            <h2 className=" d-flex align-items-center justify-content-center justify-content-md-start gap-1">
              <i class="ri-slideshow-3-line icon-styling"></i> Lavis Academy
            </h2>

            <div className="follows" style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }}>
              <p className="mb-0" style={{ textAlign: 'center' }}>'itslavicim' sosyal medyada takip et !</p>
              <div>
                <span>
                  {" "}
                  <a href="https://www.instagram.com/itslavicim/">
                    <i class="ri-facebook-line iconSocial-styling"></i>
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="https://www.instagram.com/itslavicim/">
                    <i class="ri-instagram-line iconSocial-styling"></i>
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="https://www.instagram.com/itslavicim/">
                    <i class="ri-linkedin-line iconSocial-styling"></i>
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="https://www.instagram.com/itslavicim/">
                    <i class="ri-twitter-line iconSocial-styling"></i>
                  </a>
                </span>
                <p>
                  ©Copyright 2024 TechTable
                </p>
              </div>
            </div>
          </Col>

          <Col className="mb-4 text-center text-md-start">
            <h6 className="fw-bold" >Keşfet</h6>
            <ListGroup className="link__list" >
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col className="mb-4 text-center text-md-start">
            <h6 className="fw-bold">Bize ulaşabilirsiniz.</h6>
            <p >Adres: Tbilisi/Georgia</p>
            <p>Email: haticeday4@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
