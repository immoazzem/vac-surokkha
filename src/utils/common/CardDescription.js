import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// import { ProtectedRoute } from './utils/auth/protected.route';
// import ModuleRoutes from './config/routes';
// import CONSTANT from './config/constant';
import Home from "./modules/web/pages/home";
import Enroll from "./modules/web/pages/enroll";
import ForeignerEnroll from "./modules/web/pages/foreigner-enroll";
import BirthRegEnroll from "./modules/web/pages/BirthRegEnroll";
import Status from "./modules/web/pages/vaccineStatus";
import Card from "./modules/web/pages/vaccineCard";
import CardForeigners from "./modules/web/pages/vaccineCardForeigners";
import vaccineCardBirthReg from "./modules/web/pages/vaccineCardBirthReg";
import Help from "./modules/web/pages/help";
import FAQ from "./modules/web/pages/faq";
import Privacy from "./modules/web/pages/privacy";
import TermsOfService from "./modules/web/pages/TermsOfService";
import CERTIFICATE from "./modules/web/pages/certificate";
import CERTIFICATEForeigners from "./modules/web/pages/certificateForeigners";
import certificateBirthReg from "./modules/web/pages/certificateBirthReg";
import CertificateVerify from "./modules/web/pages/CertificateVerify";
import Otp from "./modules/web/pages/otp";
import OtpForeigners from "./modules/web/pages/otpForeigners";
import otpBirthReg from "./modules/web/pages/otpBirthReg";
import Affiliates from "./modules/web/pages/affiliates";
import { getSettings } from "./modules/web/services/general";
import CertificateVerifyOnline from "./modules/web/pages/CertificateVerifyOnline";
import ForeignerCertificateVerify from "./modules/web/pages/ForeignerCertificateVerify";
import BirthRegCertificateVerify from "./modules/web/pages/BirthRegCertificateVerify";
import ForeignerCertificateVerifyOnline from "./modules/web/pages/ForeignerCertificateVerifyOnline";
import BirthRegCertificateVerifyOnline from "./modules/web/pages/BirthRegCertificateVerifyOnline";

function App() {
  // console.log(ModuleRoutes);

  useEffect(() => {
    getSettings({})
      .then((response) => {
        if (response.response.result) {
          localStorage.setItem("__sws__", JSON.stringify(response.response.data));
        }
      })
      .catch(() => {
        var msg = "Request couldn't be processed! Please try again later.";
      });
  }, []);

  return (
    <>
      <Switch>
        {/* {ModuleRoutes.map(module => (
				<Route {...module} /> 
			))} */}

        <Route exact path="/" component={Home} />
        <Route exact path="/enroll" component={Enroll} />
        <Route exact path="/enroll/foreigners" component={ForeignerEnroll} />
        <Route exact path="/enroll/birth-registration" component={BirthRegEnroll} />
        <Route exact path="/foreigner-enroll" component={ForeignerEnroll} />
        <Route exact path="/birth-reg-enroll" component={BirthRegEnroll} />
        <Route exact path="/vaccine-status" component={Status} />
        <Route exact path="/vaccine-card" component={Card} />
        <Route exact path="/vaccine-card/foreigners" component={CardForeigners} />
        <Route exact path="/vaccine-card/birth-registration" component={vaccineCardBirthReg} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/certificate" component={CERTIFICATE} />
        <Route exact path="/certificate/foreigners" component={CERTIFICATEForeigners} />
        <Route exact path="/certificate/birth-registration" component={certificateBirthReg} />
        <Route exact path="/verify" component={CertificateVerify} />
        <Route exact path="/verify/birth-registration" component={BirthRegCertificateVerify} />
        <Route exact path="/verify/foreigners" component={ForeignerCertificateVerify} />
        <Route exact path="/verify-online" component={CertificateVerifyOnline} />
        <Route exact path="/foreigner-verify" component={ForeignerCertificateVerify} />
        <Route exact path="/birth-reg-verify" component={BirthRegCertificateVerify} />
        <Route exact path="/foreigner-verify-online" component={ForeignerCertificateVerifyOnline} />
        <Route exact path="/birth-cert-reg-verify-online" component={BirthRegCertificateVerifyOnline} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/privacy-policy" component={Privacy} />
        <Route exact path="/terms-of-service" component={TermsOfService} />
        <Route exact path="/otp-verify" component={Otp} />
        <Route exact path="/foreigners-otp-verify" component={OtpForeigners} />
        <Route exact path="/affiliates" component={Affiliates} />
        <Route exact path="/birth-reg-otp-verify" component={otpBirthReg} />
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <ProtectedRoute exact path="/process/tech_support" component={TechSupport} /> */}
        {/* <Route path="*" component={() => <h1>404 NOT FOUND</h1>} /> */}
      </Switch>
    </>
  );
}

export default App;
