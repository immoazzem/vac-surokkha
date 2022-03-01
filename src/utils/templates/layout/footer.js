import React from "react";
import ICTLogo from "./../../../assets/images/ict.png";
import OrgLogo from "./../../../assets/images/org.png";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [t] = useTranslation();

  return (
    <footer className="su-main-footer-area no-print">
      <div className="container mt-5">
        <div className="row text-left">
          <div className="col-12 col-md-2 su-footer-logo mb-3">
            <img src={require("./../../../assets/images/logo_white.svg")} alt="Surokkha" />
          </div>
          <div className="col-12 col-md-2">
            <ul className="list-footer text-small mb-5">
              <li>
                <NavLink to="/faq" className="footer-link">
                  {t("menu.faq")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/help" className="footer-link">
                  {t("menu.manual")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" className="footer-link">
                  {t("menu.privacy-policy")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms-of-service" className="footer-link">
                  {t("menu.terms-of-service")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/affiliates" className="footer-link">
                  {t("menu.other-affiliates")}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 su-footer-l-col">
            <p>{t("footer.technical-help")} &nbsp;</p>
            <img alt="" className="img-fluid" src={ICTLogo} />
          </div>
          <div className="col-12 col-md-4 pt-5 pt-md-0 su-footer-r-col">
            <p>{t("footer.helping-comp")} -&nbsp;</p>
            <img alt="" className="img-fluid" src={OrgLogo} />
          </div>
          {/*<div className="col-12 col-md-2 pt-5 pt-md-0 su-footer-privacy">*/}
          {/*    <Link to="/privacy-policy" className="nav-link">*/}
          {/*        Privacy Policy*/}
          {/*    </Link>*/}
          {/*</div>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
