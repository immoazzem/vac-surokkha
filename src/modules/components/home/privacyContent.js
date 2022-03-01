import React from 'react';
import { Link } from 'react-router-dom';
import CardImage from './../../../../assets/images/card.png';
import FileImage from './../../../../assets/images/file.png';
import HelpCircleImage from './../../../../assets/images/help-circle.png';
import BookOpenImage from './../../../../assets/images/book-open.png';
import { useTranslation } from 'react-i18next';
import NewBookImage from "../../../../assets/images/new-book-open.png";
import { getManualPDF } from "../../../../utils/common/translation";

const PrivacyContent = () => {

    const [t] = useTranslation();
    const ManualPDF = getManualPDF();

    return (
        <div className="su-main-reg-form-area">

            <div className="container mt-5">

                <div className="row">
                    <h1>
                        PRIVACY POLICY
                    </h1>
                    <p>
                        When you use SUROKKHA (App), some personal information will be collected about you. You hereby expressly give consent to such collection, store, use, supply, share, analysis of such personal information for emergency health service only. We are committed to protecting the security of this information and safeguarding your privacy. This privacy policy sets out the details of the personal information collected, the manner in which it collected, by whom as well as the purposes for which it is used. At registration you accepted the terms of this Privacy Policy and your use of the App signifies your continued acceptance thereof. This Privacy Policy may be revised from time to time Please check the app regularly to ensure you are familiar with the current version. Revised privacy policy will apply to the use of the app from the date of the publication of revised privacy policy on the app. In order to use the App, you will be required to consent to the terms of the Privacy Policy as revised from time to time.
                    </p>
                </div>

                <div className="row">
                    <h4>
                        1. INFORMATION COLLECTED AND MANNER OF COLLECTION
                    </h4>
                    <p>
                        When you register on the App, your phone number and your National ID is collected and a system-generated unique id (<strong>UserID</strong>) is assigned to you. The information collected from you and your UserID during registration is stored securely on a server managed by ICT Division and DGHS (<strong>Server</strong>) on behalf of the government. This information stored on the Server will be stored against with a unique id (<strong>UserID</strong>) that is pushed to your App. The UserID will thereafter be used to identify you in all subsequent App related services and will be associated with any data or information uploaded from the App to the Server. only access personal and sensitive data required to directly support the public health emergency, and may only use the data collected to support COVID-19-related efforts or epidemiological research, especially for covid-19 vaccination and certification.
                    </p>
                </div>

                <div className="row">
                    <h4>
                        2. USE OF INFORMATION
                    </h4>
                    <p>
                        <ol>
                            <li>
                                The personal information collected from you at the time of registration under Clause 1(a) above, will be stored on the Server and only be used by the ICT Division and DGHS for the purpose of generating reports and other statistical visualizations for the purpose of the management of COVID-19 Vaccine Management System “Surokkha” in the country or to provide you general notifications pertaining to COVID-19 as may be required for emergency health service. Your UserID will only be co-related with your personal information in order medical service and administrative interventions necessary in relation to COVID-19 Vaccination, the information they might need about you in order to be able to do their job.
                            </li>
                            <li>
                                The information collected from any other user’s mobile device and uploaded and stored on the Server in accordance with Clause 1(b) will be used to administration of the COVID-19 Vaccine.
                            </li>
                            <li>
                                The information collected under Clause 1 will not be used for any purpose other than those mentioned in this Clause 2.
                            </li>
                        </ol>

                    </p>
                </div>

                <div className="row">
                    <h4>
                        3. RETENTION
                    </h4>
                    <p>
                        <ol>
                            <li>
                                All personal information collected from you under Clause 1(a) at the time of registration will be retained for as long as your account remains in existence and for such period thereafter as required under any law for the time being in force.
                            </li>
                            <li>
                                All information collected under Clauses 1(b) and 1(c) and uploaded to the Server may be purged from the Server at the discretion of the ICT Division and DGHS, the government entity if the data is deemed to have no further value in terms of alleviating COVID-19.
                            </li>
                            <li>
                                Nothing set out herein shall apply to the aggregated datasets generated by the personal data of registered users of the App or any reports or other visualization created using such datasets. Nothing set out herein shall apply to medical reports, diagnoses or other medical information generated by medical professionals in the course of treatment.
                            </li>
                        </ol>
                    </p>
                </div>

                <div className="row">
                    <h4>
                        4. RIGHTS
                    </h4>
                    <p>
                        As a registered user you have the right to cancel your registration at any time by sending an email to <a href="mailto:info@dghs.gov.bd">info@dghs.gov.bd</a> If you decide to cancel your registration the information already provided by you will be retained or deleted as per Clause 3 of the Privacy policy. Barring cancellation of registration, the user would not have any control of how they receive the communications from us or the way the communication is received.
                    </p>
                </div>

                <div className="row">
                    <h4>
                        5. DATA SECURITY
                    </h4>
                    <p>
                        The App is equipped with standard security features to protect the confidentiality and security of your information. Data is encrypted in transit as well as at rest. Personal information provided at the time of registration is encrypted before being uploaded to the NDC (National Data Center) cloud where it is stored in a secure encrypted way.
                    </p>
                    <p>
                        Access to data will be provided to authorized individuals at the express consent of the Government of Bangladesh.
                    </p>
                </div>

                <div className="row">
                    <h4>
                        6. DISCLOSURES AND TRANSFER
                    </h4>
                    <p>
                        Save as otherwise set out in Clause 2 with respect to information provided to persons carrying out medical and administrative interventions necessary in relation to COVID-19, no personal information collected by the App will disclosed or transferred to any third party.
                    </p>
                </div>

                <div className="row">
                    <h4>
                        7. GRIEVANCES
                    </h4>
                    <p>
                        If you have any concerns or questions in relation to Privacy Policy, Security issues or intellectual property rights you may address them to the Grievance Redress focal point at DGHS at <a href="mailto:info@dghs.gov.bd">info@dghs.gov.bd</a>
                    </p>
                </div>

            </div>
            <br />
        </div>
    );
}

export default PrivacyContent;