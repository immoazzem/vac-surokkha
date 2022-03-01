import React from 'react';
import { Link } from 'react-router-dom';
import CardImage from './../../../../assets/images/card.png';
import FileImage from './../../../../assets/images/file.png';
import HelpCircleImage from './../../../../assets/images/help-circle.png';
import BookOpenImage from './../../../../assets/images/book-open.png';
import { useTranslation } from 'react-i18next';
import NewBookImage from "../../../../assets/images/new-book-open.png";
import { getManualPDF } from "../../../../utils/common/translation";

const TermsOfServiceContent = () => {

    const [t] = useTranslation();
    const ManualPDF = getManualPDF();

    return (
        <div className="su-main-reg-form-area">

            <div className="container mt-5">

                <div className="row">
                    <h1>
                        TERMS OF SERVICE
                    </h1>
                    <p>
                        These terms of service (<strong>“the Terms”</strong>) govern your use of the SUROKKHA application (<strong>“the App”</strong>) developed by “ICT Division” (<strong>“the Developer”</strong>) as per instructions of ICT Division and DGHS for mobile and handheld devices and the services provided thereunder. Please read these terms and conditions (<strong>“the Terms”</strong>) carefully before you download, install or use the App. By clicking on the “I Agree” button, you signify your acceptance of the Terms, in its entirety, and your intention to be legally bound by them.
                    </p>
                </div>

                <div className="row">
                    <h4>
                        1. SERVICE OVERVIEW
                    </h4>
                    <p>
                        The App is part of a service designed to register to the Covid-19 Vaccine Management System “Surokkha”. When the App is installed on your mobile or handheld device, you will be able to register to the Covid-19 Vaccine Management System “Surokkha” and be able to get other services as well. These data would be shared with the ICT Division and DGHS on behalf of the government of Bangladesh  to only access personal and sensitive data required to directly support the public health emergency, and may only use the data collected to support COVID-19-related efforts or epidemiological research.
                    </p>
                </div>

                <div className="row">
                    <h4>
                        2. REQUIREMENTS FOR USE
                    </h4>
                    <p>
                        In order to get covid-19 vaccinated you must register to Covid-19 Vaccine Management System “Surokkha” by using the app. Later on, you can get various services and information about covid-19 vaccine from the proper authority of Bangladesh Government.
                    </p>
                </div>

                <div className="row">
                    <h4>
                        3. USE
                    </h4>
                    <p>
                        You agree that you will only use the App in good faith and will not provide false or misleading information about yourself. You agree that you will not do anything to throttle, engineer a denial of service, or in any other manner impair the performance or functionality of the App. You agree that you will not tamper with, reverse-engineer or otherwise use the App for any purpose for which it was not intended including, but not limited to, accessing information about registered users stored in the App, identifying or attempting to identify other registered users or gaining or attempting to gain access to the cloud database of the Service.
                    </p>
                </div>


                <div className="row">
                    <h4>
                        4. DATA COLLECTION, SECURITY OF USERS AND IP RIGHTS
                    </h4>
                    <p>
                        You hereby expressly consent in sound mind and good health, to the collection, analyzing, acquiring, possessing, supplying and use of your personal information for the provision to directly support the public health emergency, and may only use the data collected to support COVID-19-related efforts or epidemiological research. The details of the personal information collected and the manner in which it collected as well as the purposes for which it will be used is more fully set out in our privacy policy. Any information collected through this App will be used for the sole purpose for which this App has been developed. The Developer/ICT Division shall not be responsible for any unauthorized usage of data by the persons entrusted with accessing user data by the ICT Division and DGHS. However, our Terms do not allow you to violate or damage or endanger someone else's intellectual property rights when using our Services, including removing, altering or concealing their copyrights, trademarks, service marks or other proprietary rights, notices incorporated in or accompanying this App.
                    </p>
                </div>


                <div className="row">
                    <h4>
                        5. DISRUPTION
                    </h4>
                    <p>
                        You agree that you have no expectation of, or right to permanent and uninterrupted access to the Services. While the Services are intended to be accessible to you from everywhere on a 24x7 basis, from time to time and without prior notice of downtime, access to the App or the Services or to any part thereof may be suspended on either a temporary or permanent basis and either with respect to all or a certain class of users.
                    </p>
                </div>

                <div className="row">
                    <h4>
                        6. LIMITATION OF LIABILITY
                    </h4>
                    <p>
                        You agree and acknowledge that the ICT Division or DGHS will not be liable for any claims in relation to the use of the App, including but not limited to (a) your inability to access or use the App or the Services; (b) the failure of the App or the Services to which may depends on other stakeholders; (d) any unauthorized access to your information or modification thereof.
                    </p>
                </div>


                <div className="row">
                    <h4>
                        7. DISCLAIMER
                    </h4>
                    <p>
                        The App is being made available on an "as-is" basis and the ICT Division or DGHS makes no warranties of any kind, whether express, implied, statutory or otherwise, with respect to the functioning of the App or its ability to serve without interruption. Whilst the App endeavors to ensure that the information provided by this App is correct, it does not warrant its completeness or accuracy; nor does it commit to ensuring that the app remains available or that the material on the app is kept up-to-date.
                    </p>
                    <p>
                        To the maximum extent permitted by applicable law all representations, warranties and conditions relating to this app and the use of this app (including, without limitation, any warranties implied by law of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill) are excluded.
                    </p>
                    <p>
                        All services such as those provided by this App are never wholly free from defects, errors and bugs, and the Developer provides no warranty or representation to that effect or that the App will be compatible with any application, or software not specifically identified as compatible. The functioning of the App is dependent on the compliance by all registered users of the App with these Terms. Accordingly, the Developer and ICT Division and DGHS disclaims all liability on account of such non-compliance by other registered users.
                    </p>
                </div>

                <div className="row">
                    <h4>
                        8. GOVERNING LAW
                    </h4>
                    <p>
                        These Terms and conditions will be governed by and construed in accordance with the laws of People’s Republic of Bangladesh, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Bangladesh.
                    </p>
                </div>

                <div className="row">
                    <h4>
                        9. REVISION OF TERMS AND CONDITIONS
                    </h4>
                    <p>
                        The Terms may be amended from time to time. Revised Terms will apply to the use of the App from the date of the publication of the revised Terms on the App. Please check the App regularly to ensure you are familiar with the current version. For certain revision of terms in order to continue using the App, you will be required to accept the revised Terms. Failure to comply with the Terms can result in suspension of your ability to use the App.
                    </p>
                </div>

                <div className="row">
                    <h4>
                        10. SEVERABILITY
                    </h4>
                    <p>
                        If a provision of these Terms is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue to be in effect. If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.
                    </p>
                </div>
            </div>
            <br />
        </div>
    );
}

export default TermsOfServiceContent;