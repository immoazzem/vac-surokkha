import React, { useState, useRef, Fragment, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import NIDVerify from './nid_verify';
import { verifyCertificate } from "./../../services/vaccine";
import VaccineCertificateInfo from "./VaccineCertificateInfo";
import NewCertificate from "./../../../../assets/images/new-certification-card.png";
import { useTranslation } from "react-i18next";
import { getLanguage } from "../../../../utils/common/translation";

import { NIDValidator } from "./../../../../utils/form/custom_validator";
import { useForm } from "react-hook-form";
import { birthDays, birthMonths, birthYears } from "../../../../data/enroll";
import { birthDays_en, birthMonths_en, birthYears_en } from "../../../../data/enroll_en";
import { Captcha } from "./../../../../utils/captcha/captcha";
import LeftNavMenu from "../../../../utils/common/LeftNavMenu";
import VerifyDescription from "../../../../utils/common/VerifyDescription";

const CertificateVerifyContent = (props) => {
  const [t] = useTranslation();

  const [isSubmitted, setIsSubmitted] = useState(true);
  const [nid, setNid] = useState(false);
  const [certificate_no, setCertificate_no] = useState(false);
  const [birthDate, setBirthDate] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(true);
  const [disableLeftNavMenu, setDisableLeftNavMenu] = useState(false);
  const [FormLoading, setFormLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [vaccineCertificateData, setVaccineCertificateData] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const language = getLanguage();
  const { register, handleSubmit, errors, setValue, setError } = useForm();
  const captchaRef = useRef();
  const history = useHistory();

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

  /*const apiServiceHandler = (response) => {
        //console.log('apiServiceHandler', response);
    }*/

  /*const apiServiceHandlerFinal = (response) => {
        if (response) {
            if (response.response.result) {
                setVaccineCertificateData(response.response.data);
            } else {
                var msg = response.response.message;
                if (language === 'en') {
                    msg = response.response.message_en;
                }
                setMessage(msg);
                // setMessage(t('form.error.otp-not-verified'));
            }
        }
    }*/

  const submitForm = (data) => {
    // console.log(data);
    const postData = {
      nid: nid,
      dob: `${data.dob_month}/${data.dob_day}/${data.dob_year}`,
      certificate_no: "BD" + certificate_no,
    };
    setIsSubmitted(true);
    setErrorMsg(false);
    setFormLoading(true);
    verifyCertificate(postData)
      .then((response) => {
        // props.apiServiceHandler(response);
        if (response.response.result) {
          var msg = response.response.message;
          if (language === "en") {
            msg = response.response.message_en;
          }

          setVaccineCertificateData(response.response.data);
          setShowCaptcha(false);
          setErrorMsg(false);
        } else {
          var msg = response.response.message;
          if (language === "en") {
            msg = response.response.message_en;
          }
          setShowCaptcha(true);
          setIsSubmitted(false);
          setErrorMsg(msg);
        }
        setFormLoading(false);
      })
      .catch(() => {
        var msg = "এই মুহূর্তে কাজটি সম্পন্ন করা সম্ভব হচ্ছেনা। কিছুক্ষণ পর আবার চেষ্টা করুন।";
        if (language === "en") {
          msg = "Request couldn't be processed! Please try again later.";
        }
        setIsSubmitted(false);
        setErrorMsg(msg);
        setFormLoading(false);
      });
  };

  const onChangeNIDHandler = (e) => {
    setNid(e.target.value);
    //captchaRef.current.refresh()
  };

  const onChangeCertificateHandler = (e) => {
    setCertificate_no(e.target.value);
  };

  React.useEffect(() => {
    register("captcha_token", {
      required: true,
    });
  }, [register]);

  React.useEffect(() => {
    const nid = new URLSearchParams(window.location.search).get("nid");
    const certificate_no = new URLSearchParams(window.location.search).get("certificate_no");
    const dob = new URLSearchParams(window.location.search).get("dob");
    setValue("nid", nid);
    setNid(nid);
    setValue("certificate_no", certificate_no);
    setCertificate_no(certificate_no);
    if (dob) {
      var dob_splited = dob.split("-");
      if (dob_splited[0]) {
        setValue("dob_day", dob_splited[0]);
      }
      if (dob_splited[1]) {
        setValue("dob_month", dob_splited[1]);
      }
      if (dob_splited[2]) {
        setValue("dob_year", dob_splited[2]);
      }
      setBirthDate(`${dob_splited[1]}/${dob_splited[0]}/${dob_splited[2]}`);
    }
  }, []);

  const onCapthaChangeHandler = (value) => {
    setValue("captcha_token", value);
    if (value) {
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="su-main-reg-form-area">

      <div className="page-inner-title">
        <div className="container">
            <div className="row text-left">
              <div className="col-12">
                <h3>{t("menu.certificate-verify")}</h3>
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
                nidLink="/verify?s=1"
                nidTitle={t("form.label.national-id-card")}
                birthRegLink="/verify/birth-registration?s=1"
                birthRegTitle={t("form.label.birth-reg-certificate")}
                passportLink="/verify/foreigners?s=1"
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
                  <li><NavLink className={showForm?"activated":""} to="/verify?s=1">{t("form.label.national-id-card")}</NavLink></li>
                  <li><NavLink to="/verify/birth-registration?s=1">{t("form.label.birth-reg-certificate")}</NavLink></li>
                  <li><NavLink to="/verify/foreigners?s=1">{t("form.label.passport")}</NavLink></li>
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
                        {errorMsg && (
                          <div className="row px-lg-10 mt-3">
                            <div className="col-md-12">
                              <div className="alert alert-danger">{errorMsg}</div>
                            </div>
                          </div>
                        )}
                      </div>
          
                      <div className="su-reg-status-area no-print">
                        <div className="su-reg-status-form">
                          <div className="container mob-p-0">
                            <div id="su-reg-status-form">
                              <div className="row">
                                <div className="col-md-6  mb-4">
                                  <label htmlFor="su-mobile-otp">{t("form.label.national-id-no")}</label>
                                  <input
                                    type="number"
                                    onChange={onChangeNIDHandler}
                                    ref={register({
                                      required: true,
                                      minLength: 10,
                                      maxLength: 17,
                                      validate: NIDValidator,
                                    })}
                                    name="nid"
                                    className="form-control"
                                    placeholder={t("form.placeholder.nid")}
                                    maxLength="17"
                                    autoComplete="off"
                                    id="nid"
                                  />
                                  {errors.nid && <div className="fv-help-block">{t("form.error.nid-number-invalid")}</div>}
                                </div>
          
                                <div className="col-md-6 mb-4">
                                  <label htmlFor="su-v-dob">{t("form.label.dob-nid")}</label>
                                  <div className="row">
                                    <div className="col-6 col-md-3 mob-mb-15">
                                      <select
                                        name="dob_day"
                                        ref={register({ required: true })}
                                        className="form-control suk-select-field day"
                                        id="basic_dob_day"
                                        tabIndex="-1"
                                        aria-hidden="true"
                                      >
                                        <option value="" key={`basic-dob-day-null`}>
                                          {t("form.dropdown.day")}
                                        </option>
                                        {(language === "bn" ? birthDays : birthDays_en).map((type, index) => {
                                          return (
                                            <option value={type.value} key={`dob-day-key-${index}`}>
                                              {type.title}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </div>
          
                                    <div className="col-md-5 col-6 mob-mb-15">
                                      <select
                                        name="dob_month"
                                        ref={register({ required: true })}
                                        className="form-control suk-select-field"
                                        id="basic_dob_month"
                                        tabIndex="-1"
                                        aria-hidden="true"
                                      >
                                        <option value="" key={`basic-dob-month-null`}>
                                          {t("form.dropdown.month")}
                                        </option>
                                        {(language === "bn" ? birthMonths : birthMonths_en).map((type, index) => {
                                          return (
                                            <option value={type.value} key={`dob-month-key-${index}`}>
                                              {type.title}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </div>
          
                                    <div className="col-md-4 mob-mb-15">
                                      <select
                                        name="dob_year"
                                        ref={register({ required: true })}
                                        className="form-control suk-select-field"
                                        id="basic_dob_year"
                                        tabIndex="-1"
                                        aria-hidden="true"
                                      >
                                        <option value="" key={`basic-dob-year-null`}>
                                          {t("form.dropdown.year")}
                                        </option>
                                        {(language === "bn" ? birthYears : birthYears_en).map((type, index) => {
                                          return (
                                            <option value={type.value} key={`dob-year-key-${index}`}>
                                              {type.title}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </div>
                                  </div>
                                  {(errors.dob_day || errors.dob_month || errors.dob_year) && (
                                    <div className="fv-help-block">{t("form.error.no-dob")}</div>
                                  )}
                                </div>
                              </div>
          
                              <div className="row align-items-center">
                                <div className="col-md-6 mb-4">
                                  <label htmlFor="certificate_no">{t("form.label.Vaccination-Certificate-Number")}</label>
          
                                  <div class="input-group">
                                    <div class="input-group-prepend">
                                      <div class="input-group-text" id="btnGroupAddon" style={{ border: "0.5px solid #00113E" }}>
                                        BD
                                      </div>
                                    </div>
                                    <input
                                      type="number"
                                      onChange={onChangeCertificateHandler}
                                      ref={register({
                                        required: true,
                                        maxLength: 100,
                                        minLength: 12,
                                      })}
                                      name="certificate_no"
                                      className="form-control"
                                      placeholder={t("form.placeholder.certificate-no")}
                                      autoComplete="off"
                                      id="certificate_no"
                                    />
                                  </div>
                                  {errors.certificate_no && <div className="fv-help-block">{t("form.error.no-certificate")}</div>}
                                </div>
                              </div>
          
                              {showCaptcha && (
                                <div className="row">
                                  <div className="col-md-6">
                                    <Captcha ref={captchaRef} callback={onCapthaChangeHandler} />
                                  </div>
                                </div>
                              )}
                              {/* <div className="row">
                                                <div className="col-md-4 mt-4">
                                                    <button
                                                        id="verify_send"
                                                        onClick={handleSubmit(onOTPSent)}
                                                        disabled={disableOtpSentButton}
                                                        className="btn btn-primary btn-block">
                                                        {t('form.label.button.verify')}
                                                    </button>
                                                </div>
                                            </div> */}
          
                              {/* <div className="row align-items-center">
                                                <div className="col-md-8 py-3 mr-auto">
                                                    {otpMsg && <>
                                                        <p>
                                                            {otpMsg}
                                                        </p>
                                                    </>
                                                    }
                                                </div>
                                            </div> */}
          
                              <div className="row">
                                <div className="col-md-6 mt-4">
                                {
                                  FormLoading?
                                    <button type="button" className="loder-btn"> <i className="icon"></i> </button>
                                  :
                                  <button
                                    id="verify"
                                    onClick={handleSubmit(submitForm)}
                                    disabled={isSubmitted}
                                    className="btn btn-primary btn-block"
                                  >
                                    {t("form.label.button.Verify-Vaccination-Certificate")}
                                  </button>
                                }
                                </div>
                              </div>
                            </div>
                            <br />
                          </div>
                        </div>
                      </div>
          
                      {vaccineCertificateData && <VaccineCertificateInfo data={vaccineCertificateData} type="nid" />}
                    </Fragment>
                  :
                  <div className="container" id="su-nid-verification-form">
                    <div className="form-section-wrapper">
                      <div className="identification-desc">
                      <VerifyDescription />
                        {/* <h3>{t("form.label.identification-title")}</h3>
                        <ol>
                          <li>
                            <h5>{t("form.label.national-id-card")}</h5>
                            <p>{t("form.subtitle-certificate-verify")}</p>
                          </li>
                          <li>
                            <h5>{t("form.label.birth-reg-certificate")}</h5>
                            <p>{t("form.subtitle-birth-reg-certificate-verify")}</p>
                          </li>
                          <li>
                            <h5>{t("form.label.passport")}</h5>
                            <p>{t("form.subtitle-passport-certificate-verify")}</p>
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

      



    </div>
  );
};

export default CertificateVerifyContent;
