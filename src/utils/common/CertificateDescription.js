import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

function CertificateDescription() {

    const [t] = useTranslation();

    return (
        <Fragment>
            <h3>{t("form.label.identification-title")}</h3>
            <ol>
                <li>
                    <h5>{t("form.label.national-id-card")}</h5>
                    <p>{t("form.subtitle-certificate-status")}</p>
                </li>
                <li>
                    <h5>{t("form.label.birth-reg-certificate")}</h5>
                    <p>{t("form.subtitle-birth-certificate-status")}</p>
                </li>
                <li>
                    <h5>{t("form.label.passport")}</h5>
                    <p>{t("form.subtitle-passport-status")}</p>
                </li>
            </ol>
        </Fragment>
    )
}

export default CertificateDescription
