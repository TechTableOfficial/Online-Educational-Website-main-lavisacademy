import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import imageLastShare from "../../assests/images/seo.png"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from "../../components/Footer/Footer";
import "./lessonNotes.css"

const images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/1000/600/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/1000/600//",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/1000/600/",
    }
];


const LessonNotes = () => {

    return (
        <div class="containerCard">
            <Header></Header>
            <div class="container mt-5 mb-5">

                <div class="row g-2 commentsContainer" style={{ marginTop: '10%' }}>

                    <p className="section-title px-5" style={{ textAlign:'center',alignItems: 'center', fontSize: 35, color: '#13a4ac' }}>
                        <span className="px-3" style={{ color: '#13a4ac',justifyContent:'center' }}>yorumlar</span>
                    </p>

                    <div class="col-md-5 commentsCard">
                        <div class="comments p-3 text-center px-4">
                            <div class="user-image">
                                <img src="https://i.imgur.com/w2CKRB9.jpg" class="rounded-circle" width="50" />
                            </div>
                            <div class="user-content">
                                <h5 class="mb-6 mt-4">Ömer Abay</h5>
                                <span>Web Developer</span>
                                <p style={{fontSize:'15px'}}>Gayet güzel bir eğitim. Çok başarılı buldum. Özellikle Ahmet hoca çok iyi anlattı.</p>
                            </div>
                            <div class="ratings">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 commentsCard">
                        <div class="comments p-3 text-center px-4">
                            <div class="user-image">
                                <img src="https://i.imgur.com/w2CKRB9.jpg" class="rounded-circle" width="50" />
                            </div>
                            <div class="user-content">
                                <h5 class="mb-6 mt-4">Ömer Abay</h5>
                                <span>Web Developer</span>
                                <p style={{fontSize:'15px'}}>Gayet güzel bir eğitim. Çok başarılı buldum. Özellikle Ahmet hoca çok iyi anlattı.</p>
                            </div>
                            <div class="ratings">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 commentsCard">
                        <div class="comments p-3 text-center px-4">
                            <div class="user-image">
                                <img src="https://i.imgur.com/w2CKRB9.jpg" class="rounded-circle" width="50" />
                            </div>
                            <div class="user-content">
                                <h5 class="mb-6 mt-4">Ömer Abay</h5>
                                <span>Web Developer</span>
                                <p style={{fontSize:'15px'}}>Gayet güzel bir eğitim. Çok başarılı buldum. Özellikle Ahmet hoca çok iyi anlattı.</p>
                            </div>
                            <div class="ratings">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 commentsCard">
                        <div class="comments p-3 text-center px-4">
                            <div class="user-image">
                                <img src="https://i.imgur.com/w2CKRB9.jpg" class="rounded-circle" width="50" />
                            </div>
                            <div class="user-content">
                                <h5 class="mb-6 mt-4">Ömer Abay</h5>
                                <span>Web Developer</span>
                                <p style={{fontSize:'15px'}}>Gayet güzel bir eğitim. Çok başarılı buldum. Özellikle Ahmet hoca çok iyi anlattı.</p>
                            </div>
                            <div class="ratings">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 commentsCard">
                        <div class="comments p-3 text-center px-4">
                            <div class="user-image">
                                <img src="https://i.imgur.com/w2CKRB9.jpg" class="rounded-circle" width="50" />
                            </div>
                            <div class="user-content">
                                <h5 class="mb-6 mt-4">Ömer Abay</h5>
                                <span>Web Developer</span>
                                <p style={{fontSize:'15px'}}>Gayet güzel bir eğitim. Çok başarılı buldum. Özellikle Ahmet hoca çok iyi anlattı.</p>
                            </div>
                            <div class="ratings">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 commentsCard">
                        <div class="comments p-3 text-center px-4">
                            <div class="user-image">
                                <img src="https://i.imgur.com/w2CKRB9.jpg" class="rounded-circle" width="50" />
                            </div>
                            <div class="user-content">
                                <h5 class="mb-6 mt-4">Ömer Abay</h5>
                                <span>Web Developer</span>
                                <p style={{fontSize:'15px'}}>Gayet güzel bir eğitim. Çok başarılı buldum. Özellikle Ahmet hoca çok iyi anlattı.</p>
                            </div>
                            <div class="ratings">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 commentsCard">
                        <div class="comments p-3 text-center px-4">
                            <div class="user-image">
                                <img src="https://i.imgur.com/w2CKRB9.jpg" class="rounded-circle" width="50" />
                            </div>
                            <div class="user-content">
                                <h5 class="mb-6 mt-4">Ömer Abay</h5>
                                <span>Web Developer</span>
                                <p style={{fontSize:'15px'}}>Gayet güzel bir eğitim. Çok başarılı buldum. Özellikle Ahmet hoca çok iyi anlattı.</p>
                            </div>
                            <div class="ratings">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 commentsCard">
                        <div class="comments p-3 text-center px-4">
                            <div class="user-image">
                                <img src="https://i.imgur.com/w2CKRB9.jpg" class="rounded-circle" width="50" />
                            </div>
                            <div class="user-content">
                                <h5 class="mb-6 mt-4">Ömer Abay</h5>
                                <span>Web Developer</span>
                                <p style={{fontSize:'15px'}}>Gayet güzel bir eğitim. Çok başarılı buldum. Özellikle Ahmet hoca çok iyi anlattı.</p>
                            </div>
                            <div class="ratings">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 commentsCard">
                        <div class="comments p-3 text-center px-4">
                            <div class="user-image">
                                <img src="https://i.imgur.com/w2CKRB9.jpg" class="rounded-circle" width="50" />
                            </div>
                            <div class="user-content">
                                <h5 class="mb-6 mt-4">Ömer Abay</h5>
                                <span>Web Developer</span>
                                <p style={{fontSize:'15px'}}>Gayet güzel bir eğitim. Çok başarılı buldum. Özellikle Ahmet hoca çok iyi anlattı.</p>
                            </div>
                            <div class="ratings">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}


export default LessonNotes;