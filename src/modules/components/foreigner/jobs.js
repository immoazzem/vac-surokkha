import React, { useContext, useState } from 'react';
import EnrollContext from '../../contexts/enroll';
import { enrollSubType, professionType } from '../../../../data/enroll';
import { enrollSubType_en, professionType_en } from '../../../../data/enroll_en';
import { useTranslation } from 'react-i18next';
import { getLanguage } from "../../../../utils/common/translation";

const EnrollFormJobInfo = () => {

    const [t] = useTranslation();
    const { passportInfo, register, errors, Controller, control } = useContext(EnrollContext);
    // const [isPregnant, setIsPregnant] = useState(false);
    const language = getLanguage();

    return (
        <div className="container su-professions-area su-presents-address-area" id="su-professions-form">

            <div className="form-section-wrapper" id="step6">
                <div className="su-c-form-title">
                    <h4>{t('form.header.jobs-other')}</h4>
                </div>

                <div className="row px-lg-10 mt-3">

                    <div className="col-md-6">
                        <div >
                            <label>{t('form.label.front-line')}</label>
                            <div className="form-group su-form-input-btn">
                                <Controller
                                    render={(
                                        { onChange, value }
                                    ) => (
                                        <>
                                            <input className={`su-yes-button ${value == 1 ? 'active' : ''}`}
                                                type="button"
                                                onClick={() => onChange(1)}
                                                value={t('form.label.yes')} />
                                            <input className={`su-yes-button ${value == 0 ? 'active' : ''}`}
                                                type="button"
                                                onClick={() => onChange(0)}
                                                value={t('form.label.no')} />
                                        </>
                                    )}
                                    rules={{ required: true }}
                                    name="front_liner"
                                    control={control}
                                />
                            </div>
                        </div>
                    </div>
                    {passportInfo?.gender?.toUpperCase() != 'MALE' &&

                        <div className="col-md-6">
                            <div >
                                <label>{t('form.label.pregnant')}</label>
                                <div className="su-form-input-btn">
                                    <Controller
                                        render={(
                                            { onChange, value }
                                        ) => (
                                            <>
                                                <input className={`su-yes-button ${value == 1 ? 'active' : ''}`}
                                                    type="button"
                                                    onClick={() => onChange(1)}
                                                    value={t('form.label.yes')} />
                                                <input className={`su-yes-button ${value == 0 ? 'active' : ''}`}
                                                    type="button"
                                                    onClick={() => onChange(0)}
                                                    value={t('form.label.no')} />
                                            </>
                                        )}
                                        rules={{ required: true }}
                                        name="pregnant"
                                        control={control}
                                    />
                                </div>
                                {errors.pregnant && <div className="fv-help-block">{t('form.error.no-pregnant')}</div>}
                            </div>
                        </div>
                    }
                </div>

                <div className="row px-lg-10">
                    <div className="col-xl-4">
                        <div className="su-input-form-style">
                            <label for="profession">{t('form.label.occupation')}</label>
                            <select name="profession" ref={register({ required: true })} className="form-control suk-select-field" id="profession" tabIndex="-1" aria-hidden="true">
                                {(language === "bn" ? professionType : professionType_en).map((item, index) => {
                                    return <option value={item.value} key={`prof-key-${index}`}>{item.title}</option>;
                                })}
                            </select>
                            {errors.profession && <div className="fv-help-block">{t('form.error.no-occupation')}</div>}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default EnrollFormJobInfo;