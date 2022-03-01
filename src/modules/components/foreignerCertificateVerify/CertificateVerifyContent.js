import React, { Fragment, useContext, useEffect, useState } from 'react';
import EnrollContext from '../../contexts/enroll';
import { genderType } from '../../../../data/enroll';
import { PhoneValidator } from '../../../../utils/form/custom_validator';
import { useTranslation } from "react-i18next";
import moment from 'moment';
import { getLanguage } from "../../../../utils/common/translation";


const EnrollFormPersonalInfo = () => {

    const { passportInfo, enrollmentInfo, register, errors } = useContext(EnrollContext);
    const [t] = useTranslation();

    const language = getLanguage();

    const existing_dose_one_date = passportInfo ? moment(passportInfo.dose_given_date_1).format('DD/MM/YYYY') : '';
    const given_dose_one_date = `${enrollmentInfo.vaccination_day ? enrollmentInfo.vaccination_day : ''}/${enrollmentInfo.vaccination_month ? enrollmentInfo.vaccination_month : ''}/${enrollmentInfo.vaccination_year ? enrollmentInfo.vaccination_year : ''}`;

    return (
        <div className="container su-presents-address-area" id="su-reg-information" >
            <div className="form-section-wrapper" id="step2">

                <div className="su-c-form-title">
                    <h4> {t('form.label.personal-info')}</h4>
                </div>

                {enrollmentInfo && ((parseInt(enrollmentInfo.dose_completed_1) == 1) && (existing_dose_one_date != given_dose_one_date) && (existing_dose_one_date !== 'Invalid date')) ?
                    <Fragment>

                        <div className="row px-lg-10 mt-3">
                            <div className="col-md-12">
                                {
                                    language === 'en' ?
                                        <div className="form-group fv-plugins-icon-container">
                                            <label>Your existing data on Dose 1 registration is {existing_dose_one_date} which didn't match with the {given_dose_one_date} that you provided.</label>
                                            <div className="input-group">
                                                <label><input type="checkbox" name="update_vaccination_date" ref={register()} className="form-checkbox" id="update_vaccination_date" /> I want to update my data to {given_dose_one_date}</label>
                                            </div>
                                        </div>
                                        :
                                        <div className="form-group fv-plugins-icon-container">
                                            <label>Your existing data on Dose 1 registration is {existing_dose_one_date} which didn't match with the {given_dose_one_date} that you provided.</label>
                                            <div className="input-group">
                                                <label><input type="checkbox" name="update_vaccination_date" ref={register()} className="form-checkbox" id="update_vaccination_date" /> I want to update my data to {given_dose_one_date}</label>
                                            </div>
                                        </div>
                                }

                            </div>
                        </div>
                    </Fragment>
                    : ''
                }


                <div className="row px-lg-10 mt-3">
                    <div className="col-md-4">
                        <div className="form-group fv-plugins-icon-container">
                            <label> {t('form.label.name_en_passport')}  </label>
                            <div className="input-group">
                                <input type="text" value={passportInfo?.name} name="name" ref={register({ required: true })} className="form-control readonly" placeholder="Example- Md. Abdul Kadir" id="name" readOnly />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="row px-8 px-lg-10">
                            <input type="hidden" ref={register()} name="gender" value={passportInfo?.gender} />

                            <div className="col-md-12">
                                <div className="form-group fv-plugins-icon-container">
                                    <label> {t('form.label.mobile')} </label>
                                    <div className="input-group">
                                        <input
                                            type="number"
                                            ref={register({
                                                required: true,
                                                minLength: 11,
                                                maxLength: 11,
                                                validate: PhoneValidator
                                            })}
                                            name="mobile"
                                            defaultValue={passportInfo?.mobile}
                                            className="form-control"
                                            placeholder={t('form.label.mobile_example')}
                                            maxLength="11"
                                            id="mobile" />
                                    </div>
                                    {errors.mobile && <div className="fv-help-block">{t('form.error.no-mobile')}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row px-8 px-lg-10">
                    <input
                        type="hidden"
                        ref={register()}
                        name="father_name"
                        className="form-control readonly"
                        placeholder="উদাহরণ- মোঃ আব্দুল কাসেম"
                        id="father-name"
                        value={passportInfo?.father}
                        readOnly />
                    <input
                        type="hidden"
                        ref={register()}
                        name="mother_name"
                        className="form-control readonly"
                        placeholder="উদাহরণ- মোছাঃ সালমা বেগম"
                        id="mother-name"
                        value={passportInfo?.mother}
                        readOnly />
                </div>



            </div>
        </div>
    );
}

export default EnrollFormPersonalInfo;