import React, { Fragment } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import "./education-coach.css"
const heroImg = "https://amerikankulturaksaray.com/images/Blog/WEN-a95ae3-ingilizce-3.jpg";
const imgWho = "https://s3.amazonaws.com/production.mediajoint.prx.org/public/piece_images/304536/whois_small.png"
const imgForWho = "https://www.konusarakogren.com/blog/wp-content/uploads/2016/12/Learning-English.png"
function CoachingPage() {
    return (
        <Fragment>
            <Header />
            <div className='containerEducation'>
                <div className="content">
                    <header>
                        <h1 className='title'>Eğitim Koçluğu</h1>
                    </header>

                    <section class="sectionCoach">
                        <div class="educationTop">
                            <div class="text">
                                <h2 className='title'>Nedir?</h2>
                                <ul>
                                    <li>İngilizce eğitim koçluğu, öğrencilere kişiselleştirilmiş öğrenme deneyimi sunarak
                                        İngilizce becerilerini geliştirmeye yardımcı olan bir yöntemdir.</li>
                                    <li>Eğitimimiz evde İngilizce çalışmak isteyen tüm öğrenciler için uygundur. Tamamen bireysel ilerleyebileceğiniz sistemde hazırlanmıştır.
                                        Bolca test, konu anlatımı ve yönlendirmeler ile evde kendini kendinizin öğretmeni olabilirsiniz.</li>
                                    <li>Tüm İngilizce eğitim koçluğu programlarımız, Hatice Dayı tarafından hazırlanmaktadır.</li>
                                </ul>
                            </div>
                            <div class="image">
                                <img src={heroImg} alt="Hero Image" class="hero__img" />
                            </div>
                        </div>

                        <div class="educationTop">
                            <div class="text">
                                <h2 className='title'>Hatice Dayı Kimdir?</h2>
                                <ul>
                                    <li>2004 doğumlu Gürcistan/Tiflis’te yaşayan genç bir öğretmenimizdir.</li>
                                    <li>Eğitiminin bir kısmını İngiliz-Gürcü, bir kısmını ise Amerikan-Gürcü okulunda tamamlamıştır.</li>
                                    <li>2024 yılında TESOL (Teaching English to Speakers of Other Languages) eğitimi almıştır.</li>
                                    <li>2023 yılından itibaren İngilizce Eğitim Koçluğu vermektedir. İngilizce haricinde konuştuğu eğitim verdiği bir diğer dil olan Gürcü dili bulunmaktadır.</li>
                                </ul>
                            </div>

                            <div class="image">
                                <img src={imgWho} alt="Hero Image" class="hero__img" />
                            </div>
                        </div>


                        <div class="mb-10 educationTop">
                            <div class="text">
                                <h2 className='title mb-5'>İngilizce Eğitim Koçluğu Kimler İçin Uygundur?</h2>
                                <h5 className='title mb-4'>Kişiselleştirilmiş Destek Arayanlar:</h5>
                                <ul>
                                    <li>Öğrenme ihtiyaçları ve hedefleri olan bireyler için, koçluk programları kişiselleştirilmiş bir destek sunar.</li>
                                </ul>
                                <h5 className='title mb-4'>Öğrenme Tarzlarına Göre Destek Arayanlar:</h5>
                                <ul>
                                    <li>Farklı öğrenme tarzlarına sahip olanlar,
                                        koçluk yöntemiyle kendi öğrenme tarzlarına uygun bir şekilde destek alabilirle.</li>
                                </ul>
                                <h5 className='title mb-4'>Yoğun İş Ya Da Okul Programına Sahip Olanlar:</h5>
                                <ul>
                                    <li>Zamanları kısıtlı olanlar için, esnek programlar sunan koçluk hizmetleri, kişilere zamanlarını en verimli şekilde kullanma fırsatı sunar.</li>
                                </ul>
                                <h5 className='title mb-4'>Hedef Odaklı Çalışmak İsteyenler:</h5>
                                <ul>
                                    <li>Belirli bir İngilizce dil becerisi kazanma veya belirli bir hedefe ulaşma amacı olanlar için, koçluk yöntemi hedeflerine odaklanmalarına ve bu hedeflere ulaşmalarına yardımcı olabilir.</li>
                                </ul>
                            </div>
                            <div class="image">
                                <img src={imgForWho} alt="Hero Image" class="hero__img" />
                            </div>
                        </div>

                        <h2 className='title'>İngilizce Eğitim Koçluğu süresi ne kadardır?</h2>
                        <ul>
                            <li>Eğitimlerimizi bir kez aldığınız takdirde istediğiniz an erişebilirsiniz.</li>
                            <li>Eğitimler satın alındıktan maximum 24 saat içerisinde mail adresinize iletilecektir.</li>
                        </ul>
                    </section>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default CoachingPage;
