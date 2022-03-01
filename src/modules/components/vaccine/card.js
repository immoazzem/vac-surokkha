import React, { Fragment, useState, useEffect } from "react";
import NIDVerify from "./nid_verify";
import { getVaccineCard } from "./../../services/vaccine";
import VaccineCard from "./card/VaccineCard";
import { useTranslation } from "react-i18next";
import NewCerd from "../../../../assets/images/new-card.png";
import { NavLink } from "react-router-dom";
import { getLanguage } from "../../../../utils/common/translation";
import LeftNavMenu from "../../../../utils/common/LeftNavMenu";
import CardDescription from "../../../../utils/common/CardDescription";

const CardContent = () => {
  const [t] = useTranslation();
  const [message, setMessage] = useState(false);
  const [vaccineCardData, setVaccineCardData] = useState(false);
  const [disableLeftNavMenu, setDisableLeftNavMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const language = getLanguage();

  const apiServiceHandler = (response) => {
    //console.log('apiServiceHandler', response);
  };

  const c_url = new URL(window.location.href);
  const menu = c_url.searchParams.get('s');
  useEffect(() => {
    if(menu){
      setShowForm(true)
    }else{
      setShowForm(false)
      setDisableLeftNavMenu(false)
    }
  }, [menu])

  const apiServiceHandlerFinal = (response) => {
    if (response) {
      if (response.response.result) {
        setVaccineCardData(response.response.data.data);
      } else {
        setMessage(t("form.error.otp-not-verified"));
      }
    }
  };

  return (
    <>

    <div className="page-inner-title">
      <div className="container">
          <div className="row text-left">
            <div className="col-12">
              <h3>{t("form.title-card-status")}</h3>
            </div>
          </div>
      </div>
    </div>

    <div className="page-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-4 col-xs-12 wrapper-left-navmenu">
            <LeftNavMenu 
              disableLeftNavMenu={disableLeftNavMenu} 
              showForm={showForm}
              activeMenu="nid"
              nidLink="/vaccine-card?s=1"
              nidTitle={t("form.label.national-id-card")}
              birthRegLink="/vaccine-card/birth-registration?s=1"
              birthRegTitle={t("form.label.birth-reg-certificate")}
              passportLink="/vaccine-card/foreigners?s=1"
              passportTitle={t("form.label.passport")}
            />
            {/* <ul>
            {
              disableLeftNavMenu?
              <Fragment>
                <li><a className={showForm?"activated":""} href="#">{t("form.label.national-id-card")}</a></li>
                <li><a href="#">{t("form.label.birth-reg-certificate")}</a></li>
                <li><a href="#">{t("form.label.passport")}</a></li>
              </Fragment>
              :
              <Fragment>
                <li><NavLink className={showForm?"activated":""} to="/vaccine-card?s=1">{t("form.label.national-id-card")}</NavLink></li>
                <li><NavLink to="/vaccine-card/birth-registration?s=1">{t("form.label.birth-reg-certificate")}</NavLink></li>
                <li><NavLink to="/vaccine-card/foreigners?s=1">{t("form.label.passport")}</NavLink></li>
              </Fragment>
            }
            </ul> */}
          </div>
          <div className="col-md-9 col-sm-8 col-xs-12 wrapper-right-navmenu">
            <div className="su-enroll-form-main card-body p-0">
              {
                showForm?
                  <Fragment>
                    <div className="container no-print">
                      {message && (
                        <div className="row px-lg-10 mt-3">
                          <div className="col-md-12">
                            <div className="alert alert-danger">{message}</div>
                          </div>
                        </div>
                      )}
                    </div>
        
                    <NIDVerify
                      apiService={getVaccineCard}
                      apiServiceHandler={apiServiceHandler}
                      apiServiceHandlerFinal={apiServiceHandlerFinal}
                      setDisableLeftNavMenu={setDisableLeftNavMenu}
                      btn_title={"ভ্যাকসিন কার্ড ডাউনলোড"}
                    />
        
                    {vaccineCardData && <VaccineCard data={vaccineCardData} />}
                  </Fragment>
                :
                <div className="container" id="su-nid-verification-form">
                  <div className="form-section-wrapper">
                    <div className="identification-desc">
                      <CardDescription />
                      {/* <h3>{t("form.label.identification-title")}</h3>
                      <ol>
                        <li>
                          <h5>{t("form.label.national-id-card")}</h5>
                          <p>{t("form.subtitle-card-status")}</p>
                        </li>
                        <li>
                          <h5>{t("form.label.birth-reg-certificate")}</h5>
                          <p>{t("form.subtitle-birth-reg-card-status")}</p>
                        </li>
                        <li>
                          <h5>{t("form.label.passport")}</h5>
                          <p>{t("form.subtitle-passport-card-status")}</p>
                        </li>
                      </ol> */}
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>

      
    </>
  );
};

export default CardContent;
