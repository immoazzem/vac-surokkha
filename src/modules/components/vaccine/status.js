import React, { useState } from 'react';
import NIDVerify from './nid_verify';
import { checkVaccineStatus } from './../../services/vaccine';
import { useTranslation } from 'react-i18next';
import NewCta from "../../../../assets/images/new-cta-trick.png";
import {getLanguage} from "../../../../utils/common/translation";


const StatusContent = () => {

    const [t] = useTranslation();
    const [message, setMessage] = useState(false);
    const language = getLanguage();

    const apiServiceHandler = (response) => {
        //console.log('apiServiceHandler', response);
    }

    const apiServiceHandlerFinal = (response) => {
        //console.log('apiServiceHandler', response);
        if (response) {
            if (response.response.result) {
                var msg = response.response.data.message;
                if(language === 'en'){
                    msg = response.response.data.message_en;
                }
                setMessage(msg);
            } else {
                setMessage(t('form.error.otp-not-verified'));
            }
        }
    }

    return (
        <>


            <div className="su-inner-banner-area new-reg-status-bg">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12 col-sm-6 col-lg-5 col-xl-6 m-auto">
                            <h3> {t('form.title-enroll-status')}</h3>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-5 col-xl-4 m-auto pt-4 pt-sm-0">
                            <div className="su-inner-banner-img">
                                <img alt="image" className="img-fluid" src={NewCta}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="su-main-reg-form-header">
                    {/*<h2 className="text-center">{t('form.title-enroll-status')}</h2>*/}
                    <p className="text-left">
                        {t('form.subtitle-enroll-status')}
                    </p>
                </div>

                {message &&
                <div className="row px-lg-10 mt-3">
                    <div className="col-md-6">
                        <div className="alert alert-danger">{message}</div>
                    </div>
                </div>
                }
            </div>

            <NIDVerify
                apiService={checkVaccineStatus}
                apiServiceHandler={apiServiceHandler}
                apiServiceHandlerFinal={apiServiceHandlerFinal}
                btn_title={t('form.label.button.verify-status')} />

        </>
    );
}

export default StatusContent;