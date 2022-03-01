import React, { useState, useEffect, useRef, Fragment } from "react";
import { useForm } from "react-hook-form";
import { birthDays, birthMonths, birthYears, birthYears_birth_reg } from "../../../../data/enroll";
import { birthDays_en, birthMonths_en, birthYears_en, birthYears_birth_reg_en } from "../../../../data/enroll_en";
import { NIDValidator } from "./../../../../utils/form/custom_validator";
import { Captcha } from "./../../../../utils/captcha/captcha";
import { useTranslation } from "react-i18next";
import { getLanguage } from "../../../../utils/common/translation";
import CountdownTimer from "../../../../utils/common/countdownTimer";

import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const BirthRegVerify = (props) => {
  const [t] = useTranslation();
  const [disableOtpSentButton, setDisableOtpSentButton] = useState(true);
  const [FormLoading, setFormLoading] = useState(false);
  const [FormLoadingTwo, setFormLoadingTwo] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpMsg, setotpMsg] = useState(false);
  const [disableResend, setDisableResend] = useState(true);
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [otp, setOtp] = useState(false);
  const [birth_reg_no, setBirthRegNo] = useState(false);
  const [passport_no, setPassport_no] = useState(false);
  const [birthDate, setBirthDate] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(true);
  const [passportExists, setPassportExists] = useState(false);
  const [passportConfirmed, setPassportConfirmed] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [noPassportModalIsOpen, setNoPassportModalIsOpen] = useState(false);
  const { register, handleSubmit, errors, setValue, setError } = useForm();
  const captchaRef = useRef();
  const language = getLanguage();

  const onChangeBirthRegHandler = (e) => {
    setBirthRegNo(e.target.value);
    //captchaRef.current.refresh()
  };

  const onChangePassportHandler = (e) => {
    setPassport_no(e.target.value);
  };

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function openNoPassportModal() {
    setNoPassportModalIsOpen(true);
  }

  function closeNoPassportModal() {
    setNoPassportModalIsOpen(false);
  }

  const onOTPChangeHandler = (e) => {
    setOtp(e.target.value);
  };

  // useEffect(() => {
  //     setValue('date_of_birth', birthDate);
  // }, [birthDate]);

  React.useEffect(() => {
    // register("date_of_birth", {required: true});
    register("captcha_token", {
      required: true,
    });
  }, [register]);

  const onCapthaChangeHandler = (value) => {
    setValue("captcha_token", value);
    if (value) {
      setDisableOtpSentButton(false);
    } else {
      setDisableOtpSentButton(true);
    }
  };

  const onOTPSent = (data) => {
    // console.log(data);
    const postData = {
      birth_reg_no: birth_reg_no,
      dob: `${data.dob_month}/${data.dob_day}/${data.dob_year}`, //moment(data.date_of_birth).format('MM/DD/YYYY')
      passport_no: passport_no,
    };
    setBirthDate(`${data.dob_month}/${data.dob_day}/${data.dob_year}`);
    setDisableOtpSentButton(true);
    setFormLoading(true);
    props
      .apiService(postData)
      .then((response) => {
        props.apiServiceHandler(response);
        if (response.response.result) {
          var msg = response.response.message;
          if (language === "en") {
            msg = response.response.message_en;
          }

          if (response.response.data && response.response.data.has_passport) {
            setPassportExists(true);
            setPassportConfirmed(true);
          }

          setShowCaptcha(false);
          setOtpSent(true);
          setotpMsg(msg);
          setErrorMsg(false);
          props.setDisableLeftNavMenu(true)
        } else {
          var msg = response.response.message;
          if (language === "en") {
            msg = response.response.message_en;
          }

          setShowCaptcha(true);
          setOtpSent(false);
          setDisableOtpSentButton(false);
          setErrorMsg(msg);
          captchaRef.current.refresh();
        }
        setFormLoading(false);
      })
      .catch(() => {
        setOtpSent(false);

        var msg = "এই মুহূর্তে কাজটি সম্পন্ন করা সম্ভব হচ্ছেনা। কিছুক্ষণ পর আবার চেষ্টা করুন।";
        if (language === "en") {
          msg = "Request couldn't be processed! Please try again later.";
        }

        setErrorMsg(msg);
        props.apiServiceHandler(false);
        captchaRef.current.refresh();
        setFormLoading(false);
      });
  };

  const onOTPReSend = (data) => {
    // console.log(data);
    const postData = {
      birth_reg_no: birth_reg_no,
      dob: birthDate,
      passport_no: passport_no,
    };
    setDisableOtpSentButton(true);
    setDisableResend(true);
    props
      .apiService(postData)
      .then((response) => {
        props.apiServiceHandler(response);
        if (response.response.result) {
          var msg = response.response.message;
          if (language === "en") {
            msg = response.response.message_en;
          }

          if (response.response.data && response.response.data.has_passport) {
            setPassportExists(true);
            setPassportConfirmed(true);
          }

          setShowCaptcha(false);
          setOtpSent(true);
          setotpMsg(msg);
          setErrorMsg(false);
        } else {
          var msg = response.response.message;
          if (language === "en") {
            msg = response.response.message_en;
          }
          setDisableResend(false);
          setShowCaptcha(true);
          setOtpSent(false);
          setDisableOtpSentButton(false);
          setErrorMsg(msg);
          setDisableOtpSentButton(false);
        }
      })
      .catch(() => {
        setOtpSent(false);
        var msg = "এই মুহূর্তে কাজটি সম্পন্ন করা সম্ভব হচ্ছেনা। কিছুক্ষণ পর আবার চেষ্টা করুন।";
        if (language === "en") {
          msg = "Request couldn't be processed! Please try again later.";
        }
        setDisableResend(false);
        setErrorMsg(msg);
        setDisableOtpSentButton(false);
        props.apiServiceHandler(false);
      });
  };

  const verifyOtp = (data) => {
    const postData = {
      birth_reg_no: birth_reg_no,
      dob: `${data.dob_month}/${data.dob_day}/${data.dob_year}`, // moment(data.date_of_birth).format('MM/DD/YYYY'),
      passport_no: passport_no,
      otp: otp,
    };
    setOtpVerifying(true);
    setFormLoadingTwo(true)
    props
      .apiService(postData)
      .then((response) => {
        if (response) {
          if (!response.response.result) {
            setOtpVerifying(false);
          }
        }
        props.apiServiceHandlerFinal(response);
        setFormLoadingTwo(false)
      })
      .catch(() => {
        setDisableOtpSentButton(false);
        setOtpVerifying(false);
        props.apiServiceHandlerFinal(false);
        setFormLoadingTwo(false)
      });
  };

  const showPassportAlert = () => {
    if (otp.length != 6) {
      setError("otp", {
        type: "manual",
        message: t("form.error.otp-empty"),
      });
    } else {
      if (passport_no != "") {
        openModal();
      } else {
        openNoPassportModal();
      }
    }
  };

  const confirmPassport = () => {
    closeModal();
    closeNoPassportModal();
    setPassportConfirmed(true);
    setTimeout(() => {
      document.getElementById("verify").click();
    }, 200);
  };

  return (
    <>
      <div className="su-reg-status-area no-print">
        <div className="su-reg-status-form">
          <div className="container mob-p-0">
            {errorMsg && (
              <div className="row px-lg-10 mt-3">
                <div className="col-md-12">
                  <div className="alert alert-danger">{errorMsg}</div>
                </div>
              </div>
            )}

            <div id="su-reg-status-form">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label htmlFor="birth_reg_no">{t("form.label.birth-reg-no")}</label>
                  <input
                    type="number"
                    onChange={onChangeBirthRegHandler}
                    ref={register({
                      required: true,
                      maxLength: 17,
                    })}
                    maxLength="17"
                    name="birth_reg_no"
                    className="form-control"
                    placeholder={t("form.placeholder.birth-reg-no")}
                    autoComplete="off"
                    id="birth_reg_no"
                  />
                  {errors.birth_reg_no && <div className="su-alert-phone">{t("form.error.no-birth-reg-max")}</div>}
                </div>

                <div className="col-md-6 mb-4">
                  <label htmlFor="su-v-dob">{t("form.label.dob-birth-reg")}</label>
                  {/* <DatePicker
                                        selected={birthDate}
                                        onSelect={setBirthDate}
                                        maxDate={new Date()}
                                        dateFormat={'dd/MM/yyyy'}
                                        showMonthDropdown={true}
                                        showYearDropdown={true}
                                        scrollableYearDropdown={true}
                                        yearDropdownItemNumber={80}
                                        className="form-control"
                                        placeholderText={t('form.placeholder.datepicker')}/> */}
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
                        {(language === "bn" ? birthYears_birth_reg : birthYears_birth_reg_en).map((type, index) => {
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
                    <div className="su-alert-phone">{t("form.error.no-dob")}</div>
                  )}
                </div>
              </div>

              {showCaptcha && (
                <div className="row">
                  <div className="col-md-6 mt-4">
                    {/* <ReCAPTCHA
                                        sitekey={CAPTCHA_SITE_KEY}
                                        onChange={onCapthaChangeHandler}
                                    /> */}
                    <Captcha ref={captchaRef} callback={onCapthaChangeHandler} />
                  </div>
                </div>
              )}
              <div className="row">
                <div className="col-md-6 mt-4">
                {
                  FormLoading?
                    <button type="button" className="loder-btn"> <i className="icon"></i> </button>
                  :
                  <button
                    id="verify_send"
                    onClick={handleSubmit(onOTPSent)}
                    disabled={disableOtpSentButton}
                    className="btn btn-primary btn-block"
                  >
                    {t("form.label.button.verify")}
                  </button>
                }
                </div>
              </div>

              {otpSent && (
                <>
                  <div className="row align-items-center">
                    <div className="col-md-8 py-3 mr-auto">
                      {otpMsg && (
                        <>
                          <p>{otpMsg}</p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="form-group fv-plugins-icon-container has-success">
                        <div className="input-group input-radious">
                          <input
                            type="number"
                            name="otp"
                            onChange={onOTPChangeHandler}
                            ref={register({
                              required: true,
                              minLength: 6,
                              maxLength: 6,
                            })}
                            className="form-control"
                            autoComplete="off"
                            id="otp"
                          />
                        </div>
                        {errors.otp && <div className="fv-help-block">{t("form.error.otp-empty")}</div>}
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        {!disableResend && (
                          <>
                            <button
                              id="verify_send"
                              onClick={onOTPReSend}
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
                              onClick={onOTPReSend}
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

                  {!passportExists ? (
                    <div className="row align-items-center">
                      <div className="col-md-4 mb-4">
                        <label htmlFor="passport_no">{t("form.label.passport-no")}</label>
                        <input
                          type="text"
                          onChange={onChangePassportHandler}
                          ref={register({
                            maxLength: 10,
                          })}
                          name="passport_no"
                          style={{ textTransform: "uppercase" }}
                          className="form-control"
                          placeholder="i.e AC0215425"
                          autoComplete="off"
                          id="passport_no"
                        />
                        {errors.passport_no && <div className="fv-help-block">{t("form.error.no-passport")}</div>}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="row">
                    <div className="col-md-6 mt-4">
                      {passportConfirmed ? (
                        <Fragment>
                          {
                            FormLoadingTwo?
                              <button type="button" className="loder-btn"> <i className="icon"></i> </button>
                            :
                            <button
                              id="verify"
                              onClick={handleSubmit(verifyOtp)}
                              disabled={otpVerifying}
                              className="btn btn-primary btn-block"
                            >
                              {t("form.label.button.submit")}
                            </button>
                          }
                        </Fragment>
                              
                      ) : (
                        <button
                          onClick={() => showPassportAlert()}
                          disabled={otpVerifying}
                          className="btn btn-primary btn-block"
                        >
                          {t("form.label.button.submit")}
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
            <br />
          </div>
        </div>

        {/* passport confirmation modal */}
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={() => closeModal()}
          style={customStyles}
          contentLabel="Confirm Passport"
          shouldCloseOnOverlayClick={false}
        >
          {language === "en" ? (
            <p>
              Your passport information will be saved and cannot be changed. <br />
              Please make sure your passport number <span style={{ textTransform: "capitalize" }}>
                "{passport_no}"
              </span>{" "}
              is valid.
            </p>
          ) : (
            <p>
              আপনার পাসপোর্টের তথ্য সংরক্ষণ করা হবে এবং পরিবর্তন করা যাবে না। <br />
              আপনার পাসপোর্ট নম্বরটি <span style={{ textTransform: "capitalize" }}>"{passport_no}"</span> ঠিক কিনা তা
              নিশ্চিত করুন।
            </p>
          )}

          <div className="text-right">
            <button onClick={() => closeModal()} className="btn btn-danger" style={{ minWidth: "110px" }}>
              {t("form.label.button.has-passport-not-agree")}
            </button>{" "}
            &nbsp;
            <button onClick={() => confirmPassport()} className="btn btn-primary" style={{ minWidth: "110px" }}>
              {t("form.label.button.has-passport-agree")}
            </button>
          </div>
        </ReactModal>

        {/* no passport confirmation modal */}
        <ReactModal
          isOpen={noPassportModalIsOpen}
          onRequestClose={() => closeNoPassportModal()}
          style={customStyles}
          contentLabel="Confirm Passport"
          shouldCloseOnOverlayClick={false}
        >
          {language === "en" ? (
            <p>
              You have not provided any passport number with this request.
              <br />
              For this reason, no passport number will be included in your certificate at this moment.
              <br />
              You can update your passport number later.
              <br />
              Do you want to proceed?
            </p>
          ) : (
            <p>
              আপনি কোন পাসপোর্ট নম্বর সরবরাহ করেন নি।
              <br />
              তাই কোন পাসপোর্ট নম্বর আপনার টিকা সনদ এর সাথে এই মুহূর্তে সংযুক্ত করা হবে না।
              <br />
              আপনি পরবর্তীতে পাসপোর্ট নম্বর সংযুক্ত করতে পারবেন।
              <br />
              আপনি কি টিকা সনদ ডাউনলোড করতে চান?
            </p>
          )}

          <div className="text-right">
            <button onClick={() => closeNoPassportModal()} className="btn btn-danger" style={{ minWidth: "110px" }}>
              {t("form.label.button.no-passport-not-agree")}
            </button>{" "}
            &nbsp;
            <button onClick={() => confirmPassport()} className="btn btn-primary" style={{ minWidth: "110px" }}>
              {t("form.label.button.no-passport-agree")}
            </button>
          </div>
        </ReactModal>
      </div>
    </>
  );
};

export default BirthRegVerify;
