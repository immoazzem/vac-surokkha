import React, {useContext, useEffect, useState} from 'react';
import NewFaqCircle from './../../../../assets/images/new-faq-circle.png';
import { useTranslation } from 'react-i18next';
import {getFAQs} from "../../services/vaccine";
import { getLanguage } from './../../../../utils/common/translation';


const FaqContent = () => {
    const [faqs, setFaqs] = useState({});

    useEffect(() => {
        getFAQs().then((response) => {
            console.log(response.response.data)
            setFaqs(response.response.data)
        });
    }, []); // TODO put a [] here as the second parameter on the useEffect, this will run this only when the component loads, else it will keep running on every render
    

    const [t] = useTranslation();
    const language = getLanguage();

    return (
        <>
            <div className="overflow-hidden">

                <div className="su-inner-banner-area new-faq-bg">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-12 col-sm-6 col-lg-5 col-xl-4 m-auto">
                                <h3> {t('faq.title')}</h3>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-5 col-xl-4 m-auto pt-4 pt-sm-0">
                                <div className="su-inner-banner-img">
                                    <img alt="image" className="img-fluid" src={NewFaqCircle}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center my-5">

                    <div className="container">
                        <div className="su-faq-page-header">
                            <p className="text-left">
                                {t('faq.subtitle')}
                            </p>
                        </div>
                    </div>

                </div>

                <div className="container pb-5">

                    <div className="su-faq-title mb-4">
                        <h4>{t('faq.header.faq')}</h4>
                    </div>

                    <div className="panel-group" id="accordion">
                        {/*{faqs}*/}
                        {/*{console.log(faqs)}*/}
                        {Object.keys(faqs).map((item) => { // TODO because you are sending an object from the server, we need to get the keys to make use of it as an array and loop it through
                            return (
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${item}`}
                                            aria-expanded="true" className>
                                                {language == "en" ? faqs[item]['question_en'] : faqs[item]['question']}
                                            </a>
                                        </h4>
                                    </div>
                                    <div id={`collapse${item}`} className={`panel-collapse in collapse ${item === 0 ? 'show' : ''}`}>
                                        <div className="panel-body">
                                            {language == "en" ? faqs[item]['answer_en'] : faqs[item]['answer']}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        {/* {[...Array(9).keys()].map((item) => {
                            return (
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${item}`}
                                            aria-expanded="true" className>
                                                {t(`faq.questions.${item}.question`)}
                                            </a>
                                        </h4>
                                    </div>
                                    <div id={`collapse${item}`} className={`panel-collapse in collapse ${item === 0 ? 'show' : ''}`}>
                                        <div className="panel-body">
                                            {t(`faq.questions.${item}.answer`)}
                                        </div>
                                    </div>
                                </div>
                            );
                        })} */}
                        {/* <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"
                                       className="collapsed" aria-expanded="false">আমি অনলাইনে টিকার জন্য নিবন্ধন করেছি,
                                        এখন আমার পরবর্তী করনীয় কি?</a>
                                </h4>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse" style={{}}>
                                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"
                                       className="collapsed" aria-expanded="false">নিবন্ধনের শেষ পর্যায়ে OTP পাই নাই
                                        করণীয় কি?</a>
                                </h4>
                            </div>
                            <div id="collapse3" className="panel-collapse collapse" style={{}}>
                                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse4"
                                       className="collapsed" aria-expanded="false">কভিড-১৯ ভ্যাকসিনের জন্য নিবন্ধন
                                        পরবর্তী অবস্থা অনলাইনে কিভাবে যাচাই করব?</a>
                                </h4>
                            </div>
                            <div id="collapse4" className="panel-collapse collapse" style={{}}>
                                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse5"
                                       className="collapsed" aria-expanded="false">কভিড-১৯ টিকা গ্রহণের জন্য টিকা কার্ড
                                        কিভাবে পেতে পারি?</a>
                                </h4>
                            </div>
                            <div id="collapse5" className="panel-collapse collapse" style={{}}>
                                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse6"
                                       className="collapsed" aria-expanded="false">টিকার গ্রহণের জন্য কেন্দ্র ও তারিখ
                                        সম্পর্কে কিভাবে জানবো?</a>
                                </h4>
                            </div>
                            <div id="collapse6" className="panel-collapse collapse" style={{}}>
                                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse7"
                                       className="collapsed" aria-expanded="false">কভিড-১৯ এর টিকার কয়টি ডোজ গ্রহণ করতে
                                        হবে?</a>
                                </h4>
                            </div>
                            <div id="collapse7" className="panel-collapse collapse" style={{}}>
                                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse8"
                                       className="collapsed" aria-expanded="false">টিকার একটি ডোজ গ্রহণের পরে পরবর্তী
                                        ডোজ কবে দেওয়া হবে?</a>
                                </h4>
                            </div>
                            <div id="collapse8" className="panel-collapse collapse" style={{}}>
                                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse9"
                                       className="collapsed" aria-expanded="false">কভিড-১৯ টিকা সম্পন্ন হওয়ার পর টিকা
                                        সনদ কিভাবে পেতে পারি?</a>
                                </h4>
                            </div>
                            <div id="collapse9" className="panel-collapse collapse" style={{}}>
                                <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FaqContent;