import React, { useContext, useEffect, useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { enrollType, enrollSubType, birthDays, birthMonths, birthYears } from '../../../../data/enroll';
import { enrollType_en, enrollSubType_en, birthDays_en, birthMonths_en, birthYears_en } from '../../../../data/enroll_en';
import { useForm } from "react-hook-form";
import { verifyNID } from '../../services/enroll';
import EnrollContext from '../../contexts/enroll';
import { NIDValidator, Date18YearValidator } from './../../../../utils/form/custom_validator';
import { Captcha } from './../../../../utils/captcha/captcha';
import { useTranslation } from 'react-i18next';
import { getLanguage } from "../../../../utils/common/translation";

const EnrollFormStepOne = () => {

    // const [birthDate, setBirthDate] = useState(0);
    const [t] = useTranslation();
    const [typeSelected, setTypeSelected] = useState(false);
    const [readOnlyInfo, setReadOnlyInfo] = useState(false);
    const [subTypeSelected, setSubTypeSelected] = useState(false);
    const [FormLoading, setFormLoading] = useState(false);
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(true);
    const [validationError, setValidationError] = useState(false);
    const [showCaptcha, setShowCaptcha] = useState(true);
    const { register, handleSubmit, errors, setValue, trigger } = useForm();
    const { enrollmentInfo, setEnrollmentInfo, setNidInfo, setTempRegistrationId, nidInfo, errorMsg, setErrorMsg, setDisableLeftNavMenu } = useContext(EnrollContext);
    const captchaRef = useRef();
    const language = getLanguage();

    const onSubmit = (data) => {
        console.log('onSubmit');
        console.log(data);

        const postData = {
            basic_type: data.basic_type,
            basic_sub_type_id: data.basic_sub_type_id ? data.basic_sub_type_id : '',
            nid: data.nid,
            dob: `${data.dob_month}/${data.dob_day}/${data.dob_year}`// moment(data.date_of_birth).format('MM/DD/YYYY')
        };

        //disable submit button
        setDisableSubmitBtn(true);
        setFormLoading(true);
        setReadOnlyInfo(false);

        // TODO:
        verifyNID(postData).then((response) => {
            console.log(response);
            console.log("LANG:: " + getLanguage);
            if (response.response.result) {
                setNidInfo(response.response.voter);
                setEnrollmentInfo({ ...enrollmentInfo, ...data });
                setTempRegistrationId(response.response.id);
                setValidationError(false);
                setErrorMsg(false);
                setDisableSubmitBtn(true);
                setDisableLeftNavMenu(true);
                setShowCaptcha(false);
                setReadOnlyInfo(true);
                setFormLoading(false);
            } else {
                var msg = response.response.message;
                if (language === 'en') {
                    msg = response.response.message_en;
                }
                if (!msg) {
                    msg = "এই মুহূর্তে কাজটি সম্পন্ন করা সম্ভব হচ্ছেনা। কিছুক্ষণ পর আবার চেষ্টা করুন।";
                    if (language === 'en') {
                        msg = "Request couldn't be processed! Please try again later."
                    }
                }
                setFormLoading(false);
                setErrorMsg(msg);
                setShowCaptcha(true);
                captchaRef.current.refresh();
            }
        }).catch(() => {
            var msg = "এই মুহূর্তে কাজটি সম্পন্ন করা সম্ভব হচ্ছেনা। কিছুক্ষণ পর আবার চেষ্টা করুন।";
            if (language === 'en') {
                msg = "Request couldn't be processed! Please try again later."
            }
            setFormLoading(false);
            setErrorMsg(msg);
            captchaRef.current.refresh();
        });
    }

    // useEffect(() => {
    //     setValue('date_of_birth', birthDate);
    //     trigger('date_of_birth');
    // }, [birthDate]);

    React.useEffect(() => {
        // register("date_of_birth", {
        //     required: true,
        //     validate: Date18YearValidator
        // });
        register("captcha_token", {
            required: true
        });
    }, [register])

    const onBasicTypeChangeHandler = (er) => {
        setTypeSelected(er.target.value);
        setSubTypeSelected(false);
    }

    const onBasicSubTypeChangeHandler = (er) => {
        setSubTypeSelected(er.target.value);
    }

    const onCapthaChangeHandler = (value) => {
        setValue('captcha_token', value);
        if (value) {
            setDisableSubmitBtn(false);
        } else {
            setDisableSubmitBtn(true);
        }
    }


    return (
        <div className="container" id="su-nid-verification-form">
            <div className="form-section-wrapper enroll-initial-steps">
                {/*<div className="row px-lg-10 mt-3">*/}
                {/*    <div className="col-md-6">*/}
                {/*        <div className="alert alert-danger">{t('form.error.temporarily-closed')}</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/* <div className="su-c-form-title">
                    <h4>{t('form.header.identity-verify')}</h4>
                </div> */}
                {validationError &&
                    <div className="row px-lg-10 mt-3">
                        <div className="col-md-12">
                            <div className="alert alert-danger">{t('form.error.member-already-enrolled')}</div>
                        </div>
                    </div>
                }
                {errorMsg &&
                    <div className="row px-lg-10 mt-3">
                        <div className="col-md-12">
                            <div className="alert alert-danger">{errorMsg}</div>
                        </div>
                    </div>
                }
                {/* {readOnlyInfo &&
                    <div className="row px-lg-10 mt-3">
                        <div className="col-md-6">
                            <div className="alert alert-success">{t('form.success.identity-verification-successful')}</div>
                        </div>
                    </div>
                } */}

                <div className='row px-lg-12'>
                    <div className="col-xl-6">
                        <div className="form-group fv-plugins-icon-container">
                            <label>{t('form.label.select-type')}</label>
                            <select
                                name="basic_type"
                                onChange={onBasicTypeChangeHandler}
                                ref={register()}
                                className="form-control suk-select-field"
                                id="basic_type"
                                tabIndex="-1"
                                aria-hidden="true"
                                readOnly={readOnlyInfo}
                                value={typeSelected}>
                                <option value="" key={`entype-key-null`}>{t('form.dropdown.default')}</option>
                                {(language === "bn" ? enrollType : enrollType_en).map((type, index) => {
                                    return <option value={type.id} key={`entype-key-${index}`}>{type.title}</option>;
                                })}
                            </select>
                        </div>
                    </div>

                    {enrollSubType[typeSelected] &&
                        <div className="col-xl-6">
                            <div className="form-group fv-plugins-icon-container">
                                <label>{t('form.label.select-sub-type')}</label>
                                <select
                                    name="basic_sub_type_id"
                                    onChange={onBasicSubTypeChangeHandler}
                                    ref={register({ required: true })}
                                    className="form-control suk-select-field"
                                    id="basic_sub_type_id"
                                    tabIndex="-1"
                                    aria-hidden="true"
                                    readOnly={readOnlyInfo}
                                    value={subTypeSelected}>
                                    <option value="" key={`sub-entype-key-null`}>{t('form.dropdown.default')}</option>
                                    {(language === "bn" ? enrollSubType[typeSelected] : enrollSubType_en[typeSelected]).map((type, index) => {
                                        return <option value={type.id} key={`sub-entype-key-${index}`}>{type.title}</option>;
                                    })}
                                </select>
                            </div>
                        </div>
                    }

                    {/* {typeSelected === "govt_selected" &&
                    <>
                        <div className="col-xl-4 govt_selected_div">
                            <div className="form-group fv-plugins-icon-container">
                                <label>প্রতিষ্ঠানের নামঃ</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text flaticon-users-1"></span>
                                    </div>
                                    <input type="text" ref={register({required: true})} name="office_name" className="form-control" placeholder="" id="office-name" />
                                </div>
                                {errors.office_name && <div>প্রতিষ্ঠানের নাম দিন</div>}
                            </div>
                        </div>
                        <div className="col-xl-4 govt_selected_div">
                            <div className="form-group fv-plugins-icon-container">
                                <label>পদবী:</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text flaticon-users-1"></span>
                                    </div>
                                    <input type="text" ref={register({required: true})} name="designation" className="form-control" placeholder="উদাহরণ- পরিচালক" id="designation" />
                                </div>
                                {errors.designation && <div>পদবী দিন</div>}
                            </div>
                        </div>
                    </>
                } */}
                </div>
                {((typeSelected && !enrollSubType[typeSelected]) || (typeSelected && subTypeSelected)) &&
                    <div>
                        <div className="row px-8 px-lg-10">

                            <div className="col-xl-6 form-group">
                                <div className="fv-plugins-icon-container has-success">
                                    <label for="su-dob">{t('form.label.national-id-no')}</label>
                                    <div className="input-group input-radious">
                                        <input
                                            type="number"
                                            id="su-dob"
                                            ref={register({
                                                required: true,
                                                minLength: 10,
                                                maxLength: 17,
                                                validate: NIDValidator
                                            })}
                                            name="nid"
                                            className="form-control"
                                            placeholder={`${t('form.placeholder.nid')}`}
                                            maxLength="17"
                                            autoComplete="off"
                                            readOnly={readOnlyInfo}
                                            id="nid" />
                                    </div>
                                    {errors.nid && <div className="fv-help-block">{t('form.error.nid-number-invalid')}</div>}
                                </div>
                            </div>
                            <div className="col-xl-6 form-group">
                                <div className="fv-plugins-icon-container">
                                    <label for="su-nid-no">{t('form.label.dob-nid')}</label>
                                    {/* <DatePicker
                                    selected={birthDate}
                                    onSelect={setBirthDate}
                                    maxDate={new Date()}
                                    dateFormat={'dd/MM/yyyy'}
                                    showMonthDropdown={true}
                                    showYearDropdown={true}
                                    scrollableYearDropdown={true}
                                    yearDropdownItemNumber={80}
                                    disabledKeyboardNavigation
                                    value={nidInfo?.dob}
                                    id="su-nid-no"
                                    className="form-control datepicker"
                                    // readOnly={true}
                                    placeholderText={`${t('form.placeholder.datepicker')}`} /> */}
                                    <div className="row">

                                        <div className="col-6 col-md-3 mob-mb-15">
                                            <select
                                                name="dob_day"
                                                ref={register({ required: true })}
                                                className="form-control suk-select-field day"
                                                id="basic_dob_day"
                                                tabIndex="-1"
                                                readOnly={readOnlyInfo}
                                                aria-hidden="true">
                                                <option value="" key={`basic-dob-day-null`}>{t('form.dropdown.day')}</option>
                                                {(language === "bn" ? birthDays : birthDays_en).map((type, index) => {
                                                    return <option value={type.value} key={`dob-day-key-${index}`}>{type.title}</option>;
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
                                                aria-hidden="true">
                                                <option value="" key={`basic-dob-month-null`}>{t('form.dropdown.month')}</option>
                                                {(language === "bn" ? birthMonths : birthMonths_en).map((type, index) => {
                                                    return <option value={type.value} key={`dob-month-key-${index}`}>{type.title}</option>;
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
                                                aria-hidden="true">
                                                <option value="" key={`basic-dob-year-null`}>{t('form.dropdown.year')}</option>
                                                {(language === "bn" ? birthYears : birthYears_en).map((type, index) => {
                                                    return <option value={type.value} key={`dob-year-key-${index}`}>{type.title}</option>;
                                                })}
                                            </select>
                                        </div>

                                    </div>
                                    {(errors.dob_day || errors.dob_month || errors.dob_year) && <div className="fv-help-block">{t('form.error.no-dob')}</div>}
                                    {/* {errors.date_of_birth && errors.date_of_birth.type == "validate" && <div className="fv-help-block">{t('form.error.age-below-18')}</div>} */}
                                </div>
                            </div>


                        </div>

                        <div className="row">
                            {showCaptcha &&
                                <div className="col-xl-6 form-group">
                                    <Captcha
                                        ref={captchaRef}
                                        callback={onCapthaChangeHandler}
                                    />
                                </div>
                            }
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-0">
                                    {
                                        FormLoading ?
                                        <button type="button" className="loder-btn"> <i className="icon"></i> </button>
                                        :
                                        <button
                                            id="verify"
                                            onClick={handleSubmit(onSubmit)}
                                            disabled={disableSubmitBtn}
                                            className="btn btn-primary btn-block">
                                            {t('form.label.button.verify')}
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default EnrollFormStepOne;