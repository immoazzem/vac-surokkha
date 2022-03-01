import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import EnrollContext from "./../../contexts/enroll";
import { sendOTPForBirthReg, verifyBirthRegOTP } from "../../services/enroll";
import { regenerateBirthRegID } from "../../services/otp";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import CardImage from "../../../../assets/images/card.png";
import FileImage from "../../../../assets/images/file.png";
import HelpCircleImage from "../../../../assets/images/help-circle.png";
import BookOpenImage from "../../../../assets/images/book-open.png";
import CountdownTimer from "../../../../utils/common/countdownTimer";
import { getLanguage } from "../../../../utils/common/translation";

const EnrollFormOtpVerify = (props) => {
  const [t] = useTranslation();
  const [otpRequested, setOtpRequested] = useState(false);
  const [otp, setOtp] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [disableResend, setDisableResend] = useState(true);
  const [FormLoading, setFormLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const { enrollmentInfo, tempRegistrationId } = useContext(EnrollContext);
  const { register, errors, trigger, handleSubmit } = useForm();
  const language = getLanguage();

  useEffect(() => {
    if (props.location?.state?.responseMsg) {
      setResponseMsg(props.location?.state.responseMsg);
    }

    if (props.location?.state?.tempRegistrationId) {
      if (!props.location?.state.enrollmentInfo.mobile) {
        const postData = {
          temp_id: props.location?.state.tempRegistrationId,
        };

        regenerateBirthRegID(postData)
          .then((response) => {
            if (response.response.result) {
              props.location.state.enrollmentInfo.mobile = response.response.data.mobile;
              setOtpRequested(true);
              setErrorMsg(false);
            } else {
              var msg = response.response.message;
              if (language === "en") {
                msg = response.response.message_en;
              }
              setErrorMsg(msg);
            }
          })
          .catch(() => {
            // setErrorMsg('');
          });
      } else {
        setOtpRequested(true);
      }
    } else {
      props.history.push({
        pathname: "/birth-reg-enroll",
      });
    }
  }, []);

  const onOTPInputChangeHandler = (e) => {
    //setOtp(e.target.value);
  };

  const onOTPVerifyClickHandler = (data) => {
    //async () => { await
    // triggerValidation("otp");
    //}
    //if (otp) {
    setFormLoading(true);
    const postData = {
      mobile: props.location.state.enrollmentInfo.mobile,
      otp: data.otp,
      id: props.location?.state.tempRegistrationId,
    };
    verifyBirthRegOTP(postData)
      .then((response) => {
        if (response.response.result) {
          setOtpVerified(true);
          setErrorMsg(false);
          setResponseMsg(false);
        } else {
          var msg = response.response.message;
          if (language === "en") {
            msg = response.response.message_en;
          }

          if (!msg) {
            msg = "এই মুহূর্তে কাজটি সম্পন্ন করা সম্ভব হচ্ছেনা। কিছুক্ষণ পর আবার চেষ্টা করুন।";
            if (language === "en") {
              msg = "Request couldn't be processed! Please try again later.";
            }
          }

          setErrorMsg(msg);
          setFormLoading(false);
        }
      })
      .catch(() => {
        var msg = "এই মুহূর্তে কাজটি সম্পন্ন করা সম্ভব হচ্ছেনা। কিছুক্ষণ পর আবার চেষ্টা করুন।";
        if (language === "en") {
          msg = "Request couldn't be processed! Please try again later.";
        }
        setErrorMsg(msg);
        setFormLoading(false);
      });
    //}
  };

  const onOTPResend = (data) => {
    const postData = {
      mobile: props.location.state.enrollmentInfo.mobile,
      id: props.location?.state.tempRegistrationId,
    };

    setDisableResend(true);
    sendOTPForBirthReg(postData)
      .then((response) => {
        if (response.response.result) {
          setResponseMsg(responseMsg);
          setErrorMsg(false);
        } else {
          var msg = response.response.message;
          if (language === "en") {
            msg = response.response.message_en;
          }

          setDisableResend(false);
          setErrorMsg(msg);
        }
      })
      .catch(() => {
        setDisableResend(false);
        var msg = "এই মুহূর্তে কাজটি সম্পন্ন করা সম্ভব হচ্ছেনা। কিছুক্ষণ পর আবার চেষ্টা করুন।";
        if (language === "en") {
          msg = "Request couldn't be processed! Please try again later.";
        }
        setErrorMsg(msg);
      });
  };

  return (
    <div className="container">
      <div className="no-print">
        <div className="su-main-reg-form-header">
          <h2 className="text-center">{t("form.title-birth-reg-enroll")}</h2>
          <p className="text-left">{t("form.subtitle-birth-reg-enroll-prev")}</p>
        </div>
      </div>
      <div className="card su-input-form-style">

        {errorMsg && (
          <div className="row px-lg-10 mt-3">
            <div className="col-xl-6">
              <div className="alert alert-danger">{errorMsg}</div>
            </div>
          </div>
        )}

        {responseMsg && (
          <div className="row px-lg-10 mt-3">
            <div className="col-xl-6">
              <div className="alert alert-info">{responseMsg}</div>
            </div>
          </div>
        )}
        <div className="">
          {otpRequested && !otpVerified && (
            <>
              <div className="row px-lg-10 mt-3">
                <div className="col-xl-4">
                  <div className="form-group fv-plugins-icon-container">
                    <label>{t("form.label.mobile")}</label>
                    <div className="input-group input-radious">
                      <input
                        type="text"
                        value={props.location.state.enrollmentInfo.mobile}
                        className="form-control"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center px-8 px-lg-10">
                <div className="col-xl-4">
                  <div className="form-group fv-plugins-icon-container has-success">
                    <label>{t("form.label.input-otp")}</label>
                    <div className="input-group input-radious">
                      <input
                        type="number"
                        name="otp"
                        onChange={onOTPInputChangeHandler}
                        className="form-control"
                        autocomplete="off"
                        ref={register({ required: true, minLength: 6, maxLength: 6 })}
                        id="otp"
                      />
                    </div>
                    {errors.otp && <div className="fv-help-block">{t("form.label.input-otp")}</div>}
                  </div>
                </div>

                <div className="col-xl-4 mt-4">
                  <div className="form-group">
                    {!disableResend && (
                      <>
                        <button
                          id="verify_send"
                          onClick={onOTPResend}
                          disabled={disableResend}
                          className="btn btn-primary btn-block"
                        >
                          {t("form.label.button.verify-resend")}
                        </button>
                      </>
                    )}

                    {disableResend && (
                      <>
                        <button
                          id="verify_time"
                          onClick={onOTPResend}
                          disabled={disableResend}
                          className="btn btn-block btn-danger"
                        >
                          <span className="su-otp-info-text">{t("form.label.button.verify-resend")}</span>
                          <span className="su-otp-time-count">
                            <CountdownTimer
                              seconds={300}
                              onCounterFinish={() => {
                                setDisableResend(false);
                              }}
                            />
                          </span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-4 mt-4">
                  <div className="form-group">
                  {
                    FormLoading?
                    <button type="button" className="loder-btn"> <i className="icon"></i> </button>
                    :
                    <button
                      id="verify"
                      onClick={handleSubmit(onOTPVerifyClickHandler)}
                      className="btn btn-primary btn-block align-items-center font-weight-bold text-uppercase px-4 py-2"
                    >
                      {t("form.label.button.complete-registration")}
                    </button>
                    }
                  </div>
                </div>
              </div>
            </>
          )}
          
          {otpVerified && (
            <>
              <div className="container">
                <div className="row">
                  <div className="col-md-7 mx-auto">
                    <div className="su-confirmation-text text-center">
                      <h3>{t("form.message.covid-enrollment-success")}</h3>
                    </div>
                  </div>
                </div>

                <div className="su-c-form-title">
                  <h4>{t("help.header.others")}</h4>
                </div>

                <div className="su-co-cards">
                  <Link to="/vaccine-card" className="su-co-card-single text-decoration-none card-collect">
                    <img className="img-fluid" src={CardImage} alt="" />
                    <p>{t("home.title.card-download")}</p>
                  </Link>

                  <Link to="/certificate" className="su-co-card-single text-decoration-none card-file">
                    <img className="img-fluid" src={FileImage} alt="" />
                    <p>{t("home.title.cert-download")}</p>
                  </Link>

                  <Link to="/faq" className="su-co-card-single text-decoration-none card-question">
                    <img className="img-fluid" src={HelpCircleImage} alt="" />
                    <p>{t("home.title.faq")} </p>
                  </Link>

                  <Link to="/help" className="su-co-card-single text-decoration-none card-help">
                    <img className="img-fluid" src={BookOpenImage} alt="" />
                    <p>{t("home.title.manual")} </p>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(EnrollFormOtpVerify);
