import React, { useState, useEffect } from "react";
import Courses from "../components/Courses-section/Courses";
import Header from "../components/Header/Header";
import "./coursesScreen.css";
import heroImg from "../assests/images/hero-img1.png";
import Footer from "../components/Footer/Footer";
import CoursesCardTwo from "../components/CoursesCardTwo/CoursesCardTwo";
import { Courses as coursesData } from "../dummyData";
import { Select, MenuItem, OutlinedInput, FormControl, InputLabel, Checkbox, ListItemText } from '@mui/material';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

let CoursesContent = [
  {
    id: 1,
    title: "A1",
    url:"https://www.shopier.com/ShowProductNew/products.php?id=26750406",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    content: "Eğitimlerimiz 1 aylık olarak hazırlanıp program yapılmıştır. Her eğitim paketinden sonra English Score uygulamasından seviye testi yapabiliriz!",
    popupContent: "1)Parts Of Speech; (Verb+Adjective+Preposition+Noun+Adverb+Pronoun+Conjuction+İnterjection+Article kullanımı) 2)Sentence; •Clause+Sentence Type+Sentence Structure+Reported Speech+Subject-Verb Agreement+ Linking And Transitions+Punctuation+Parenthetical Expressions + Clefts •Güncel ve Eğlenceli konular ile Reading + Writing + Listening çalışması •Tüm becerilere nasıl çalışılır?  •Writing çalışmalarımızı nasıl kontrol edebiliriz?  •Motivasyon için Yol Haritası + Çalışma Programı •Sınavlara nasıl hazırlanılır? Nelere dikkate etmeliyiz? Püf noktalar nelerdir?"
  },

  {
    id: 2,
    title: "A2",
    url:"https://www.shopier.com/ShowProductNew/products.php?id=26750431",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    content: "Eğitimlerimiz 1 aylık olarak hazırlanıp program yapılmıştır. Her eğitim paketinden sonra English Score uygulamasından seviye testi yapabiliriz!",
  },

  {
    id: 3,
    title: "B1",
    url:"https://www.shopier.com/ShowProductNew/products.php?id=26750454",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    content: "Eğitimlerimiz 1 aylık olarak hazırlanıp program yapılmıştır. Her eğitim paketinden sonra English Score uygulamasından seviye testi yapabiliriz.",
  },
  {
    id: 4,
    title: "B1+",
    url:"https://www.shopier.com/ShowProductNew/products.php?id=26750484",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    content: "Eğitimlerimiz 1 aylık olarak hazırlanıp program yapılmıştır. Her eğitim paketinden sonra English Score uygulamasından seviye testi yapabiliriz.",
  },
  {
    id: 5,
    title: "B2",
    url:"https://www.shopier.com/ShowProductNew/products.php?id=26750501",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    content: "Eğitimlerimiz 1 aylık olarak hazırlanıp program yapılmıştır. Her eğitim paketinden sonra English Score uygulamasından seviye testi yapabiliriz.",
  }
]

const CoursesScreen = () => {
  const sortedCourses = coursesData.slice().sort((a, b) => a.id - b.id);


  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryBegining, setCategoryBegining] = useState([]);
  const [categoryMiddle, setCategoryMiddle] = useState([]);
  const [categoryAdvance, setCategoryAdvance] = useState([]);

  sortedCourses.forEach(course => {
    const category = course.category;

    if (category === 'A') {
      categoryBegining.push(course);
    } else if (category === 'B') {
      categoryMiddle.push(course);
    } else if (category === 'C') {
      categoryAdvance.push(course);
    }
  });

  const handleCategoryChange = (event) => {
    const {
      target: { value },
    } = event;

    setSelectedCategories(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const categories = [
    {
      id: 1,
      name: "A1",
      title: 'A'
    },
    {
      id: 2,
      name: "A2",
      title: 'B'
    },
    {
      id: 3,
      name: "B1",
      title: 'C'
    },
    {
      id: 4,
      name: "B+",
      title: 'D'
    },
    {
      id: 5,
      name: "B2",
      title: 'E'
    }



  ]

  const handleChange = (event) => {
  };

  const filterClicked = () => {

  }

  return (
    <>
      <html lang="tr">
        <Header></Header>
        <body>
          <div className="container-fluid pt-5">
            <div className="container">

              <div className="row">

                <div className="text-center pb-2" style={{ marginTop: '4%', color: '#13a4ac' }}>
                  <p className="section-title px-5" style={{ alignItems: 'center', fontSize: 35, color: '#13a4ac' }}>
                    <span className="px-3" style={{ color: '#13a4ac' }}>Eğitimler</span>
                  </p>
                </div>

                {CoursesContent.map(course => (
                  <CoursesCardTwo
                    key={course.id}
                    title={course.title}
                    content={course.content}
                    popupContent={course.popupContent}
                    url={course.url}
                  />
                ))}

              </div>
            </div>
          </div>
          <Footer></Footer>




          <a href="#" className="btn btn-primary p-3 back-to-top"
          ><i className="fa fa-angle-double-up"></i
          ></a>

          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
          <script src="lib/easing/easing.min.js"></script>
          <script src="lib/owlcarousel/owl.carousel.min.js"></script>
          <script src="lib/isotope/isotope.pkgd.min.js"></script>
          <script src="lib/lightbox/js/lightbox.min.js"></script>

          <script src="mail/jqBootstrapValidation.min.js"></script>
          <script src="mail/contact.js"></script>

          <script src="js/main.js"></script>
        </body>
      </html >

    </>
  );
};

export default CoursesScreen;
