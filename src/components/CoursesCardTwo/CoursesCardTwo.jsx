import React, { useState } from "react";
import "../../pages/coursesScreen.css";
import heroImg from "../../assests/images/a1level.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./coursesCardTwo.css"

const contentA1 = (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 45%', marginRight: '10px' }}>
            <strong>Parts Of Speech:</strong>
            <ul>
                <li>Verb, Adjective, Preposition, Noun, Adverb, Pronoun, Conjunction,
                    Interjection, Article kullanımı.</li>
                <li>Güncel ve Eğlenceli konular ile Reading + Writing + Listening çalışması.</li>
                <li>Tüm becerilere nasıl çalışılır?</li>
                <li>Writing çalışmalarımızı nasıl kontrol edebiliriz?</li>
                <li>Motivasyon için Yol Haritası + Çalışma Programı.</li>
                <li>Sınavlara nasıl hazırlanılır? Nelere dikkate etmeliyiz? Püf noktalar nelerdir?</li>
                <li>Oyun (çarpraz bulmaca,eşya bulmaca)</li>
                <li>Günlük rutinlerle ingilizce.</li>
                <li>Telaffuz (sıfırdan alfabe) eklensin.</li>
                <li>Okuma kitabı</li>
            </ul>
        </div>
    </div>
);

const contentA2 = (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 45%', marginRight: '10px' }}>
            <ul>
                <li>Tüm Grammar konuları (konu anlatımı + test)</li>
                <li>Güncel ve Eğlenceli konular ile Reading + Writing + Listening çalışması</li>
                <li>Tüm becerilere nasıl çalışılır?</li>
                <li>Writing çalışmalarımızı nasıl kontrol edebiliriz?</li>
                <li>Motivasyon için Yol Haritası + Çalışma Programı</li>
                <li>Sınavlara nasıl hazırlanılır? Nelere dikkate etmeliyiz? Püf noktalar nelerdir?</li>
                <li>Kelimelere ek olarak Günlük Kalıplar + Deyimler</li>
                <li>Seviyenize uygun ingilizce girebileceğiniz sınavlar (yönlendirme + bilgi)</li>
                <li>Okuma kitabı</li>
            </ul>
        </div>
    </div>
);

const contentB1 = (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 45%', marginRight: '10px' }}>
            <ul>
                <li>Tüm B1 Grammar konuları (konu anlatımı + test)</li>
                <li>Güncel ve Eğlenceli konular ile Reading + Writing + Listening çalışması</li>
                <li>Tüm becerilere nasıl çalışılır?</li>
                <li>Writing çalışmalarımızı nasıl kontrol edebiliriz?</li>
                <li>Motivasyon için Yol Haritası + Çalışma Programı</li>
                <li>Sınavlara nasıl hazırlanılır? Nelere dikkate etmeliyiz? Püf noktalar nelerdir?</li>
                <li>Kelimelere ek olarak Günlük Kalıplar + Deyimler</li>
                <li>Seviyenize uygun ingilizce girebileceğiniz sınavlar (yönlendirme + bilgi)</li>
                <li>Okuma kitabı</li>
            </ul>
        </div>
    </div>
);

const contentB1Plus = (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 45%', marginRight: '10px' }}>
            <ul>
                <li>Tüm B1 (+) Grammar konuları (konu anlatımı + test)</li>
                <li>Güncel ve Eğlenceli konular ile Reading + Writing + Listening çalışması</li>
                <li>Tüm becerilere nasıl çalışılır?</li>
                <li>Writing çalışmalarımızı nasıl kontrol edebiliriz?</li>
                <li>Motivasyon için Yol Haritası + Çalışma Programı</li>
                <li>Sınavlara nasıl hazırlanılır? Nelere dikkate etmeliyiz? Püf noktalar nelerdir?</li>
                <li>Kelimelere ek olarak Günlük Kalıplar + Deyimler</li>
                <li>Seviyenize uygun ingilizce girebileceğiniz sınavlar (yönlendirme + bilgi)</li>
                <li>Akademik ingilizceye başlangıç (Kelime + Essay çalışmaları)</li>
                <li>Okuma kitabı</li>
            </ul>
        </div>
    </div>
);

const contentB2 = (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 45%', marginRight: '10px' }}>
            <ul>
                <li>Tüm B2 Grammar konuları (konu anlatımı + test)</li>
                <li>Güncel ve Eğlenceli konular ile Reading + Writing + Listening çalışması</li>
                <li>Tüm becerilere nasıl çalışılır?</li>
                <li>Writing çalışmalarımızı nasıl kontrol edebiliriz?</li>
                <li>Motivasyon için Yol Haritası + Çalışma Programı</li>
                <li>Sınavlara nasıl hazırlanılır? Nelere dikkate etmeliyiz? Püf noktalar nelerdir?</li>
                <li>Kelimelere ek olarak Günlük Kalıplar + Deyimler</li>
                <li>Seviyenize uygun ingilizce girebileceğiniz sınavlar (yönlendirme + bilgi)</li>
                <li>Akademik ingilizceye başlangıç (Kelime + Essay çalışmaları)</li>
                <li>Okuma kitabı</li>
            </ul>
        </div>
    </div>
);


const CoursesCardTwo = (props) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    let content;
    switch (props.title) {
        case 'A1':
            content = contentA1;
            break;
        case 'A2':
            content = contentA2;
            break;
        case 'B1':
            content = contentB1;
            break;
        case 'B1+':
            content = contentB1Plus;
            break;
        case 'B2':
            content = contentB2;
            break;
        default:
            content = null;
    }

    return (
        <div className="col-lg-4 mb-5">
            <div className="card border-0 bg-light shadow-sm pb-2">
                <img className="card-img-top mb-2" src={heroImg} alt="" />
                <div className="card-body text-center">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">
                        {props.content}
                    </p>
                </div>
                <div className="d-flex" style={{ justifyContent: 'center' }}>
                    <a
                        href={props.url}
                        className="btn px-4 mb-4 mr-3"
                        style={{ backgroundColor: '#13a4ac', color: 'white' }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#4be2ea';
                            e.target.style.color = '#fff';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#13a4ac';
                            e.target.style.color = 'white';
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Satın Al
                    </a>
                    <a
                        className="btn px-4 mb-4"
                        onClick={toggle}
                        style={{ backgroundColor: '#13a4ac', color: 'white' }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#4be2ea';
                            e.target.style.color = '#fff';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#13a4ac';
                            e.target.style.color = 'white';
                        }}
                    >
                        Detay
                    </a>
                </div>
                <Modal isOpen={modal} toggle={toggle} className="custom-modal">
                    <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
                    <ModalBody>
                        {content}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Kapat</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
};

export default CoursesCardTwo;
