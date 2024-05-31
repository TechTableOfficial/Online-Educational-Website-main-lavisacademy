import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./courses.css";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";

const coursesData = [
  {
    id: "01",
    title: "A1 Level",
    url:"https://www.shopier.com/ShowProductNew/products.php?id=26750406",
    lesson: 8,
    students: 12.5,
    rating: 5.1,
    imgUrl: "https://www.arabacademy.com/wp-content/uploads/2020/10/arabic-adults-bg.jpg",
  },
  {
    id: "02",
    title: "A2 Level",
    url:"https://www.shopier.com/ShowProductNew/products.php?id=26750431",
    lesson: 12,
    students: 2.8,
    rating: 5.4,
    imgUrl:  "https://s3.envato.com/files/361727964/268_E39A0819.jpg",
  },
  {
    id: "03",
    title: "B1 Level",
    url:"https://www.shopier.com/ShowProductNew/products.php?id=26750454",
    lesson: 14,
    students: 1.5,
    rating: 5.9,
    imgUrl: "https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "04",
    title: "B1+ Level",
    url:"https://www.shopier.com/ShowProductNew/products.php?id=26750484",
    lesson: 14,
    students: 1.5,
    rating: 5.9,
    imgUrl: "https://www.arabacademy.com/wp-content/uploads/2020/10/arabic-adults-bg.jpg",
  },
  {
    id: "05",
    title: "B2 Level",
    url:"https://www.shopier.com/ShowProductNew/products.php?id=26750501",
    lesson: 14,
    students: 1.5,
    rating: 5.9,
    imgUrl: "https://s3.envato.com/files/361727964/268_E39A0819.jpg",
  }
];

const Courses = (props) => {
  const navigate = useNavigate();
  const breakPoints = [
    { itemsToShow: 4 }
  ];
  const onClickSeeAll = () => {
    navigate("/courses-section");
    window.scrollTo(0, 0);
  }

  return (
    <section>
      <Container className={`containerClass ${props.addMargin ? 'containerClassTwo' : ''}`}>
        <Row className="flex-wrap">
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>{props.header}</h2>
                <p>
                  {props.content}
                </p>
              </div>
              <div className="w-50 text-end">
                <button
                  className="btn"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#4be2ea';
                    e.target.style.color = '#fff';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#13a4ac';
                    e.target.style.color = '#fff';
                  }}
                  onClick={onClickSeeAll}>Hepsini Gör</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="containerr">
          {coursesData.map((item) => (
            <CourseCard 
            key={item.id} 
            item={item}
            url={item.url} />

          ))}
        </div>
      </Container>
    </section>
  );
};

export default Courses;

