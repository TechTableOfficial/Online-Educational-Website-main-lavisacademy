import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import "./about-us.css"
const AboutUs = () => {

    return (
        <div>
            <Header></Header>



            <body style={{ marginTop: '4%' }}>
                <div className="container-fluid bg-light position-relative shadow">
                    <nav
                        className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5"
                    >
                    </nav>
                </div>



                <div className="container-fluid pt-5">
                    <div className="text-center pb-2" style={{ marginBottom: '1%' }}>
                        <p className="section-title" style={{ textAlign: 'center' }}>
                            <span style={{ fontSize: '40px', color: '#13a4ac' }}>İletİşİm</span>
                        </p>
                    </div>
                    <div className="container">
                        <div >
                            <div>
                                <p style={{ textAlign: 'center' }}>
                                    LavisAcademy sizlere İngilizce öğreniminde profesyonel destek sunar.
                                    İngilizce öğrenim sürecinizi kolaylaştırmak ve hedeflerinize ulaşmanızı sağlamak için buradayız.
                                    Aşağıdaki iletişim kanallarından bizlere ulaşabilirsiniz.
                                </p>

                                <div className="contacts" style={{ display: 'flex', justifyContent: 'center', marginTop: '4%', marginBottom: '16%' }}>

                                    <div className="d-flex mr-5">
                                        <i
                                            className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center  rounded-circle"
                                            style={{ width: "45px", height: "45px", backgroundColor: '#13a4ac', color: 'black' }}
                                        ></i>
                                        <div className="pl-3">
                                            <h5>Konum</h5>
                                            <p>Tbilisi/Georgia</p>
                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        <i
                                            className="fa fa-envelope d-inline-flex align-items-center justify-content-center  rounded-circle"
                                            style={{ width: "45px", height: "45px", backgroundColor: '#13a4ac', color: 'black' }}
                                        ></i>
                                        <div className="pl-3">
                                            <h5>Email</h5>
                                            <p>ihaticeday4@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




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

            <Footer></Footer>
        </div>
    )

}

export default AboutUs;