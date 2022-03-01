import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../../assets/images/logo-f.png";
import { useTranslation } from "react-i18next";
import { changeLanguage, getLanguage } from "./../../common/translation";
import { showNavigationalCardDesign } from "../../../config/constant";

const Header = () => {
  const ln = getLanguage();
  if (ln == "bn") {
    document.getElementById("bodyStyles").classList.add("bodyStyles");
  } else {
    document.getElementById("bodyStyles").classList.remove("bodyStyles");
  }

  const [t] = useTranslation();
  return (
    <header className="su-h-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink to="/" exact className="navbar-brand main-logo">
            <img width="" className="img-fluid" src={Logo} alt="Surokkha" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav3"
            aria-controls="navbarNav3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav3">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" exact className="nav-link">
                  {t("menu.home")}
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/enroll" className="nav-link">
                  {t("menu.registration")}
                </NavLink>
              </li>
              
                {/* <Fragment>
                  <li className="nav-item">
                    <NavLink to="/birth-reg-enroll" className="nav-link">
                      {t("menu.registration-birth-reg")}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/foreigner-enroll" className="nav-link">
                      {t("menu.registration-passport")}
                    </NavLink>
                  </li>
                </Fragment> */}
              
              {/* <li className="nav-item">
                <NavLink to="/vaccine-status" className="nav-link">
                  {t("menu.reg-status")}
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink to="/vaccine-card" className="nav-link">
                  {t("menu.card-download")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/certificate" className="nav-link">
                  {t("menu.cert-download")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/verify" className="nav-link">
                  {t("menu.certificate-verify")}
                </NavLink>
              </li>
              {/* <li className="nav-item">
                                <NavLink to="/help" className="nav-link">
                                    {t('menu.manual')}
                                </NavLink>
                            </li> */}
              {/* <li className="nav-item">
                <NavLink to="/faq" className="nav-link">
                  {t("menu.faq")}
                </NavLink>
              </li> */}
            </ul>

            {getLanguage() === "en" && (
              <a
                href="javascript:void(0)"
                onClick={() => changeLanguage("bn")}
                className="nav-link btn ml-lg-2 su-lang-btn"
              >
                বাংলা
              </a>
            )}
            {getLanguage() === "bn" && (
              <a
                href="javascript:void(0)"
                onClick={() => changeLanguage("en")}
                className="nav-link btn ml-lg-2 su-lang-btn"
              >
                English
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
