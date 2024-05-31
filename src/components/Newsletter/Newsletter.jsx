import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Bizden haberdar olmak için takip edin</h2>
            <div className="subscribe" style={{ justifyContent: 'center' }}>
              <div className="follows">
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
