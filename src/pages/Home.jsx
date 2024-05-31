import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import { Container } from "reactstrap";
const heroImg = "https://amerikankulturaksaray.com/images/Blog/WEN-a95ae3-ingilizce-3.jpg";
const imgWho = "https://s3.amazonaws.com/production.mediajoint.prx.org/public/piece_images/304536/whois_small.png"
const imgForWho = "https://www.konusarakogren.com/blog/wp-content/uploads/2016/12/Learning-English.png"

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Features />
      <Courses header={"Eğitim Paketlerimiz"} content={"A1 seviyesinden B2 seviyesine kadar eğitim paketlerimiz ile kursa gitmeden kendi başımıza İngilizce çalışmayı öğreniyoruz. Bu sayede istediğimiz her yerde kimseye ihtiyacımız olmadan İngilizce çalışabiliyoruz..."} />
      <Container>
        <div>
          <div class="text">
            <h2 className='title mb-5'>İngilizce Eğitim Paketlerimiz Kimler İçin Uygundur?</h2>
            <h5 className='title mb-4'>Kişiselleştirilmiş Destek Arayanlar:</h5>
            <ul>
              <li style={{fontSize:'17px',fontFamily:'sans'}}>Öğrenme ihtiyaçları ve hedefleri olan bireyler için, 
              eğitim paketlerimiz kişiselleştirilmiş bir destek sunar.</li>
            </ul>
            <h5 className='title mb-4'>Öğrenme Tarzlarına Göre Destek Arayanlar:</h5>
            <ul>
              <li style={{fontSize:'17px',fontFamily:'sans'}}>Farklı öğrenme tarzlarına sahip olanlar,
                 kendi öğrenme tarzlarına uygun bir şekilde destek alabilirler.</li>
            </ul>
            <h5 className='title mb-4'>Yoğun İş Ya Da Okul Programına Sahip Olanlar:</h5>
            <ul>
              <li style={{fontSize:'17px',fontFamily:'sans'}}>Zamanları kısıtlı olanlar için, esnek programlar sunan eğitim paketlerimiz, kişilere zamanlarını en verimli şekilde kullanma fırsatı sunar.</li>
            </ul>
            <h5 className='title mb-4'>Hedef Odaklı Çalışmak İsteyenler:</h5>
            <ul>
              <li style={{fontSize:'17px',fontFamily:'sans'}}>Belirli bir İngilizce dil becerisi kazanma veya belirli bir hedefe ulaşma amacı olanlar için, eğitim paketlerimiz hedeflerine odaklanmalarına ve bu hedeflere ulaşmalarına yardımcı olabilir.</li>
            </ul>
          </div>
        </div>
      </Container>
      <Newsletter />
      <Footer></Footer>
    </Fragment>
  );
};



export default Home;
