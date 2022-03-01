import React, { Fragment, useState, useEffect } from "react";
import Layout from "../../../utils/templates/layout/default";
import EnrollFormStepOne from "../components/BirthReg/initial";
import EnrollFormPersonalInfo from "../components/BirthReg/personalInfo";
import EnrollFormDiseaseInfo from "../components/BirthReg/disease";
import EnrollFormJobInfo from "../components/BirthReg/jobs";
import EnrollFormAddressInfo from "../components/BirthReg/address";
// import EnrollFormCenterInfo from './../components/BirthReg/center';
import EnrollFormOtpVerify from "../components/BirthReg/otp_verify";
import { EnrollProvider } from "../contexts/enroll";
import { saveBirthRegVaccineEntry } from "../services/enroll";
import { useForm, Controller } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import moment from "moment";
import { useTranslation } from "react-i18next";
import NewUsers from "../../../assets/images/new-user.png";
import { getLanguage } from "../../../utils/common/translation";
import LeftNavMenu from "../../../utils/common/LeftNavMenu";
import RegistrationDescription from "../../../utils/common/RegistrationDescription";

const ForeignerEnroll = (props) => {
  const [t] = useTranslation();
  const [enrollmentInfo, setEnrollmentInfo] = useState({ name: "dafa" });
  const [birthRegInfo, setBirthRegInfo] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [disableSubmittedBtn, setDisableSubmittedBtn] = useState(false);
  const [disableLeftNavMenu, setDisableLeftNavMenu] = useState(false);
  const [FormLoading, setFormLoading] = useState(false);
  const [tempRegistrationId, setTempRegistrationId] = useState(0);
  const [responseMsg, setResponseMsg] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const language = getLanguage();
  const { register, handleSubmit, errors, setValue, trigger, control } = useForm();

  const onAgreementChecked = (e) => {
    if (e.target.checked) {
      setDisableSubmittedBtn(false);
    } else {
      setDisableSubmittedBtn(true);
    }
  };

  const c_url = new URL(window.location.href);
  const menu = c_url.searchParams.get('s');
  useEffect(() => {
    if (menu) {
      setShowForm(true)
    }
  }, [menu])

  const onSubmit = (data) => {
    const finalFormData = {
      ...enrollmentInfo,
      ...data,
      ...{
        temp_member_id: tempRegistrationId,
        date_of_birth: `${enrollmentInfo.dob_month}/${enrollmentInfo.dob_day}/${enrollmentInfo.dob_year}`,
        dose_given_date_1: `${enrollmentInfo.vaccination_month ? enrollmentInfo.vaccination_month : ""}/${enrollmentInfo.vaccination_day ? enrollmentInfo.vaccination_day : ""
          }/${enrollmentInfo.vaccination_year ? enrollmentInfo.vaccination_year : ""}`,
        mobile: data.mobile,
      },
    };
    setEnrollmentInfo(finalFormData);
    setDisableSubmittedBtn(true);
    setFormLoading(true);
    saveBirthRegVaccineEntry(finalFormData)
      .then((response) => {
        console.log("saveBirthRegVaccineEntry", response);
        if (response.response.result) {
          var msg = response.response.message;
          setErrorMsg(false);
          setResponseMsg(msg);

          props.history.push({
            pathname: "/birth-reg-otp-verify",
            state: {
              enrollmentInfo: enrollmentInfo,
              tempRegistrationId: tempRegistrationId,
              responseMsg: responseMsg,
            },
          });
        } else {
          var msg = response.response.message;
          setErrorMsg(msg);
          setDisableSubmittedBtn(false);
        }
        console.log(errorMsg);
        setFormLoading(false);
      })
      .catch((errors) => {
        var msg = "Request couldn't be processed! Please try again later.";
        setErrorMsg(msg);
        setDisableSubmittedBtn(false);
        setFormLoading(false);
      });
  };

  return (
    <Layout>

      <div className="page-inner-title">
        <div className="container">
          <div className="row text-left">
            <div className="col-12">
              <h3>{t("form.title-birth-reg-enroll")}</h3>
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
                activeMenu="birthReg"
                nidLink="/enroll?s=1"
                nidTitle={t("form.label.national-id-card")}
                birthRegLink="/enroll/birth-registration?s=1"
                birthRegTitle={t("form.label.birth-reg-certificate")}
                passportLink="/enroll/foreigners?s=1"
                passportTitle={t("form.label.passport")}
              />
              {/* <ul>
                  {
                    disableLeftNavMenu?
                    <Fragment>
                      <li><a href="#">{t("form.label.national-id-card")}</a></li>
                      <li><a className={showForm ? "activated" : ""} href="#">{t("form.label.birth-reg-certificate")}</a></li>
                      <li><a href="#">{t("form.label.passport")}</a></li>
                    </Fragment>
                    :
                    <Fragment>
                      <li><NavLink to="/enroll?s=1">{t("form.label.national-id-card")}</NavLink></li>
                      <li><NavLink className={showForm ? "activated" : ""} to="/enroll/birth-registration?s=1">{t("form.label.birth-reg-certificate")}</NavLink></li>
                      <li><NavLink to="/enroll/foreigners?s=1">{t("form.label.passport")}</NavLink></li>
                    </Fragment>
                  }
              </ul> */}
            </div>
            <div className="col-md-9 col-sm-8 col-xs-12 wrapper-right-navmenu">
              <div className="su-enroll-form-main card-body p-0  enroll-container-wrappwer">
                {
                  showForm ?
                    <Fragment>
                      <EnrollProvider
                        value={{
                          enrollmentInfo,
                          setEnrollmentInfo,
                          birthRegInfo,
                          setBirthRegInfo,
                          register,
                          errors,
                          handleSubmit,
                          setValue,
                          trigger,
                          tempRegistrationId,
                          setTempRegistrationId,
                          errorMsg,
                          setErrorMsg,
                          Controller,
                          control,
                          setDisableLeftNavMenu,
                        }}
                      >
                        {/* <div className="container" id="su-nid-verification-form">
                                    <div className="form-section-wrapper" style={{ padding: '3em 0' }}>
                                        <div className="row px-lg-10 mt-3">
                                            <div className="col-md-6">
                                                <div className="alert alert-danger">{t('form.error.temporarily-closed')}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                        {!formSubmitted && <EnrollFormStepOne />}

                        {formSubmitted && <EnrollFormOtpVerify />}

                        {birthRegInfo && !formSubmitted && (
                          <>
                            <EnrollFormPersonalInfo />
                            {/* <EnrollFormDiseaseInfo /> */}
                            {/* <EnrollFormJobInfo /> */}
                            <EnrollFormAddressInfo />
                          </>
                        )}
                      </EnrollProvider>

                      {birthRegInfo && !formSubmitted && (
                        <>
                          <div className="container form-section-wrapper" id="step8">
                            <div className="d-flex border-top py-3 mr-10 ml-10">
                              <div className="checkbox-inline">
                                <input type="hidden" name="agree" value="0" />
                                <input
                                  type="checkbox"
                                  name="agree"
                                  onChange={onAgreementChecked}
                                  ref={register()}
                                  value="1"
                                  id="agree"
                                  checked={!disableSubmittedBtn}
                                  required
                                />
                                &nbsp;{t("form.enroll-agreement")}
                              </div>
                            </div>
                            <div className="container">
                              <div className="row align-items-center">
                                <div className="col-md-4 mx-auto">
                                  <div className="text-center form-confirmation form-confirmation-btn-conainer pb-5">
                                    <Link to="/" className="btn btn-outline-danger mr-2">
                                      {t("form.label.button.cancel")}
                                    </Link>
                                    {
                                      FormLoading?
                                      <button type="button" className="loder-btn"> <i className="icon"></i> </button>
                                      :
                                      <button
                                        onClick={handleSubmit(onSubmit)}
                                        id="beneficiary-submit"
                                        disabled={disableSubmittedBtn}
                                        className="btn btn-primary"
                                      >
                                        {t("form.label.button.save")}
                                      </button>
                                    }
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </Fragment>
                    :
                    <div className="container" id="su-nid-verification-form">
                      <div className="form-section-wrapper">
                        <div className="identification-desc">
                          <RegistrationDescription />
                          {/* <h3>{t("form.label.identification-title")}</h3>
                          <ol>
                            <li>
                              <h5>{t("form.label.national-id-card")}</h5>
                              <p>{t("form.subtitle-enroll")}</p>
                            </li>
                            <li>
                              <h5>{t("form.label.birth-reg-certificate")}</h5>
                              <p>{t("form.subtitle-birth-reg-enroll")}</p>
                            </li>
                            <li>
                              <h5>{t("form.label.passport")}</h5>
                              <p>{t('form.subtitle-foreigner-enroll')}</p>
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


    </Layout>
  );
};

export default ForeignerEnroll;
