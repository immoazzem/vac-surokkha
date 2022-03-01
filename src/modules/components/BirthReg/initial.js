import React, { useContext, useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { birthDays, birthMonths, birthYears, birthYears_birth_reg } from "../../../../data/enroll";
import {
  birthDays_en,
  birthMonths_en,
  birthYears_en,
  years_en,
  Countries,
  birthYears_birth_reg_en,
} from "../../../../data/enroll_en";
import { useForm } from "react-hook-form";
import { verifyBirthReg } from "../../services/enroll";
import EnrollContext from "../../contexts/enroll";
import { NIDValidator, Date18YearValidator } from "./../../../../utils/form/custom_validator";
import { Captcha } from "./../../../../utils/captcha/captcha";
import { useTranslation } from "react-i18next";
import { getLanguage } from "../../../../utils/common/translation";
import { getSettings } from "../../services/general";

const EnrollFormStepOne = () => {
  const [t] = useTranslation();
  const [typeSelected, setTypeSelected] = useState(false);
  const [completeDoseOneVaccine, setCompleteDoseOneVaccine] = useState(true);
  const [dose_completed_1, setDose_completed_1] = useState(0);
  const [readOnlyInfo, setReadOnlyInfo] = useState(false);
  const [subTypeSelected, setSubTypeSelected] = useState(false);
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(true);
  const [FormLoading, setFormLoading] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(true);
  const [countryList, setCountryList] = useState({});
  const [enrollType, setEnrollType] = useState([]);
  const [enrollType_en, setEnrollType_en] = useState([]);
  const [enrollSubType, setEnrollSubType] = useState([]);
  const [enrollSubType_en, setEnrollSubType_en] = useState([]);
  const [BdEnrollTypeID, setBdEnrollTypeID] = useState([29, 30]);
  const [hideCountry, setHideCountry] = useState(true);
  const { register, handleSubmit, errors, setValue, trigger } = useForm();
  const {
    enrollmentInfo,
    setEnrollmentInfo,
    setBirthRegInfo,
    setTempRegistrationId,
    birthRegInfo,
    errorMsg,
    setErrorMsg,
    setDisableLeftNavMenu,
  } = useContext(EnrollContext);
  const captchaRef = useRef();
  const language = getLanguage();

  useEffect(() => {
    const setting_data = localStorage.getItem("__sws__");
    if (setting_data) {
      const parsed_setting_data = JSON.parse(setting_data);
      if (parsed_setting_data && parsed_setting_data.countries) {
        setCountryList(parsed_setting_data.countries);
        setEnrollType(parsed_setting_data.passport_type.bn);
        setEnrollType_en(parsed_setting_data.passport_type.en);
        setEnrollSubType(parsed_setting_data.passport_sub_type.bn);
        setEnrollSubType_en(parsed_setting_data.passport_sub_type.en);
      }
    } else {
      getSettings({}).then((response) => {
        if (response.response.result) {
          localStorage.setItem("__sws__", JSON.stringify(response.response.data));
          setCountryList(response.response.data.countries);
          setEnrollType(response.response.data.passport_type.bn);
          setEnrollType_en(response.response.data.passport_type.en);
          setEnrollSubType(response.response.data.passport_sub_type.bn);
          setEnrollSubType_en(response.response.data.passport_sub_type.en);
        }
      });
    }
  }, []);

  const onSubmit = (data) => {
    console.log("onSubmit");
    console.log(data);
    setFormLoading(true);
    const postData = {
      birth_reg_no: data.birth_reg_no,
      dob: `${data.dob_month}/${data.dob_day}/${data.dob_year}`, // moment(data.date_of_birth).format('MM/DD/YYYY')
    };

    //disable submit button
    setDisableSubmitBtn(true);
    setReadOnlyInfo(false);

    // TODO:
    verifyBirthReg(postData)
      .then((response) => {
        console.log(response);
        console.log("LANG:: " + getLanguage);
        if (response.response.result) {
          setBirthRegInfo(response.response.data);
          setEnrollmentInfo({ ...enrollmentInfo, ...data });
          setTempRegistrationId(response.response.data.id);
          setValidationError(false);
          setErrorMsg(false);
          setDisableSubmitBtn(true);
          setShowCaptcha(false);
          setReadOnlyInfo(true);
          setDisableLeftNavMenu(true);
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
          setShowCaptcha(true);
          captchaRef.current.refresh();
        }
        setFormLoading(false);
      })
      .catch(() => {
        var msg = "এই মুহূর্তে কাজটি সম্পন্ন করা সম্ভব হচ্ছেনা। কিছুক্ষণ পর আবার চেষ্টা করুন।";
        if (language === "en") {
          msg = "Request couldn't be processed! Please try again later.";
        }
        setErrorMsg(msg);
        captchaRef.current.refresh();
        setFormLoading(false);
      });
  };

  React.useEffect(() => {
    register("captcha_token", {
      required: true,
    });
  }, [register]);

  const onChangeCompleteDoseOneVaccine = (e) => {
    setCompleteDoseOneVaccine(true);
    setDose_completed_1(parseInt(e.target.value));
  };

  const onBasicTypeChangeHandler = (er) => {
    setTypeSelected(er.target.value);
    setSubTypeSelected(false);
    console.log("type", er.target.value);
    if (BdEnrollTypeID.includes(parseInt(er.target.value))) {
      setHideCountry(true);
    } else {
      setHideCountry(false);
    }
  };

  const onBasicSubTypeChangeHandler = (er) => {
    setSubTypeSelected(er.target.value);
  };

  const onCapthaChangeHandler = (value) => {
    setValue("captcha_token", value);
    if (value) {
      setDisableSubmitBtn(false);
    } else {
      setDisableSubmitBtn(true);
    }
  };

  return (
    <div className="container" id="su-nid-verification-form">
      <div className="form-section-wrapper enroll-initial-steps">
        {/* <div className="su-c-form-title">
          <h4>{t("form.header.identity-verify")}</h4>
        </div> */}
        {validationError && (
          <div className="row px-lg-10 mt-3">
            <div className="col-md-12">
              <div className="alert alert-danger">{t("form.error.member-already-enrolled")}</div>
            </div>
          </div>
        )}
        {errorMsg && (
          <div className="row px-lg-10 mt-3">
            <div className="col-md-12">
              <div className="alert alert-danger">{errorMsg}</div>
            </div>
          </div>
        )}

        <div className="row px-lg-10">
          <div className="col-xl-6">
            <div className="form-group fv-plugins-icon-container has-success">
              <label htmlFor="birth_reg_no">{t("form.label.birth-reg-no")}</label>
              <div className="input-group input-radious">
                <input
                  type="number"
                  ref={register({
                    required: true,
                    maxLength: 17,
                    minLength: 17,
                  })}
                  name="birth_reg_no"
                  placeholder={t("form.placeholder.birth-reg-no")}
                  className="form-control"
                  autoComplete="off"
                  readOnly={readOnlyInfo}
                  id="birth_reg_no"
                />
              </div>
              {errors.birth_reg_no && <div className="fv-help-block"> {t("form.error.no-birth-reg")} </div>}
            </div>
          </div>

          <div className="col-xl-6">
            <div className="form-group fv-plugins-icon-container">
              <label htmlFor="su-nid-no">{t("form.label.dob-birth-reg")}</label>
              <div className="row">
                <div className="col-6 col-md-3 mob-mb-15">
                  <select
                    name="dob_day"
                    ref={register({ required: true })}
                    className="form-control suk-select-field day"
                    id="basic_dob_day"
                    tabIndex="-1"
                    readOnly={readOnlyInfo}
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
                    readOnly={readOnlyInfo}
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
                    readOnly={readOnlyInfo}
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
                <div className="fv-help-block"> {t("form.error.no-dob")}</div>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          {showCaptcha && (
            <div className="col-xl-6 form-group">
              <Captcha ref={captchaRef} callback={onCapthaChangeHandler} />
            </div>
          )}
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
            {
              FormLoading?
              <button type="button" className="loder-btn"> <i className="icon"></i> </button>
              :
              <button
                id="verify"
                onClick={handleSubmit(onSubmit)}
                disabled={disableSubmitBtn}
                className="btn btn-primary btn-block"
              >
                {t("form.label.button.verify")}
              </button>
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollFormStepOne;
