import React from "react";
import "./courses.css"
const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;
  return (
    <div className="single__course__item" style={{width:'30%',height:'30%'}}>
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>
      <div className="courseCard" >
        <h6
          className="course__title"
          style={{fontSize:'17px'}}
        >{title}</h6>
        <p className="enroll d-flex">
          <a href={props.url} style={{fontSize:'17px'}}> Şimdi Satın Al</a>
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
