import React, { useContext, useEffect, useState } from "react";
import { getCenters, getUnions } from "./../../services/enroll";
import EnrollContext from "./../../contexts/enroll";
import { divisions, districts, upazillas, unions, ward, professionType } from "./../../../../data/enroll";
import {
  divisions_en,
  districts_en,
  upazillas_en,
  unions_en,
  ward_en,
  professionType_en,
} from "../../../../data/enroll_en";
import { get } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { getLanguage } from "../../../../utils/common/translation";
import { getSettings } from '../../services/general';

const EnrollFormAddressInfo = () => {
  const [t] = useTranslation();
  const [division, setDivision] = useState(0);
  const [district, setDistrict] = useState(0);
  const [upazilla, setUpazilla] = useState(0);
  const [union, setUnion] = useState(0);
  const [center, setCenter] = useState({});
  // const [BirthRegCenters, setBirthRegCenters] = useState([10202, 10714]);
  const [allowedNIDRegDivisions, setAllowedNIDRegDivisions] = useState([])
  const [allowedNIDRegDistrict, setAllowedNIDRegDistrict] = useState([])
  const [allowedNIDRegUpazilla, setAllowedNIDRegUpazilla] = useState([])
  const [allowedNIDRegCenters, setAllowedNIDRegCenters] = useState([])
  const [blockedNIDRegDivisions, setBlockedNIDRegDivisions] = useState([])
  const [blockedNIDRegDistrict, setBlockedNIDRegDistrict] = useState([])
  const [blockedNIDRegUpazilla, setBlockedNIDRegUpazilla] = useState([])
  const [blockedNIDRegCenters, setBlockedNIDRegCenters] = useState([])
  // const [PfizerCenters, setPfizerCenters] = useState([836, 842, 845, 951, 853, 855, 967, 978]);
  const { register, errors } = useContext(EnrollContext);
  const language = getLanguage();

  useEffect(() => {
    const setting_data = localStorage.getItem("__sws__");
    if (setting_data) {
      const parsed_setting_data = JSON.parse(setting_data);
      if (parsed_setting_data && parsed_setting_data.nidRegData) {
        setAllowedNIDRegDivisions(parsed_setting_data.nidRegData.allowedNIDRegDivisions ?? [])
        setAllowedNIDRegDistrict(parsed_setting_data.nidRegData.allowedNIDRegDistrict ?? [])
        setAllowedNIDRegUpazilla(parsed_setting_data.nidRegData.allowedNIDRegUpazilla ?? [])
        setAllowedNIDRegCenters(parsed_setting_data.nidRegData.allowedNIDRegCenters ?? [])
        setBlockedNIDRegDivisions(parsed_setting_data.nidRegData.blockedNIDRegDivisions ?? [])
        setBlockedNIDRegDistrict(parsed_setting_data.nidRegData.blockedNIDRegDistrict ?? [])
        setBlockedNIDRegUpazilla(parsed_setting_data.nidRegData.blockedNIDRegUpazilla ?? [])
        setBlockedNIDRegCenters(parsed_setting_data.nidRegData.blockedNIDRegCenters ?? [])
      }
    } else {
      getSettings({}).then((response) => {
        if (response.response.result) {
          localStorage.setItem("__sws__", JSON.stringify(response.response.data));
          if(response.response.data.nidRegData){
            setAllowedNIDRegDivisions(response.response.data.nidRegData.allowedNIDRegDivisions ?? [])
            setAllowedNIDRegDistrict(response.response.data.nidRegData.allowedNIDRegDistrict ?? [])
            setAllowedNIDRegUpazilla(response.response.data.nidRegData.allowedNIDRegUpazilla ?? [])
            setAllowedNIDRegCenters(response.response.data.nidRegData.allowedNIDRegCenters ?? [])
            setBlockedNIDRegDivisions(response.response.data.nidRegData.blockedNIDRegDivisions ?? [])
            setBlockedNIDRegDistrict(response.response.data.nidRegData.blockedNIDRegDistrict ?? [])
            setBlockedNIDRegUpazilla(response.response.data.nidRegData.blockedNIDRegUpazilla ?? [])
            setBlockedNIDRegCenters(response.response.data.nidRegData.blockedNIDRegCenters ?? [])
          }
          
        }
      })
    }
  }, []);

  const onDivisionChangeHandler = (e) => {
    setUpazilla(0);
    setDistrict(0);
    setDivision(e.target.value);
  };

  const onDistrictChangeHandler = (e) => {
    setUnion(0);
    setUpazilla(0);
    setDistrict(e.target.value);

    getCenters({
      district_id: e.target.value,
      lang: language,
    }).then((response) => {
      if (response.response.result) {
        setCenter(response.response.data);
      } else {
        setCenter({});
      }
    });
  };

  const onUpazillaChangeHandler = (e) => {
    setUnion(0);
    setUpazilla(e.target.value);
    getCenters({
      upazilla_id: e.target.value,
      district_id: { district }.district,
      lang: language,
    }).then((response) => {
      if (response.response.result) {
        setCenter(response.response.data);
      } else {
        setCenter({});
      }
    });
  };

  return (
    <>
      <div id="su-nid-verification-form">
        <div className="container su-presents-address-area">
          <div className="form-section-wrapper" id="step5">
            <div className="su-c-form-title">
              <h4>{t("form.header.current-address")}</h4>
            </div>
            <div className="row px-lg-10 mt-3">
              <div className="col-xl-4">
                <div className="form-group fv-plugins-icon-container">
                  <label>{t("form.label.division")}</label>
                  <div className="input-group">
                    <select
                      name="division_id"
                      ref={register({ required: true })}
                      onChange={onDivisionChangeHandler}
                      className="form-control suk-select-field"
                      id="divisions"
                    >
                      <option value="" key={`division-key-null`}>
                        {t("form.dropdown.default")}
                      </option>
                      {(language === "bn" ? divisions : divisions_en).map((item, index) => {
                        if(allowedNIDRegDivisions.length > 0){
                          if (allowedNIDRegDivisions.includes(parseInt(item.value)) && !blockedNIDRegDivisions.includes(parseInt(item.value))) {
                            return (
                              <option value={item.value} key={`division-key-${index}`}>
                                {item.title}
                              </option>
                            );
                          }
                        }else{
                          if (!blockedNIDRegDivisions.includes(parseInt(item.value))) {
                            return (
                              <option value={item.value} key={`division-key-${index}`}>
                                {item.title}
                              </option>
                            );
                          }
                        }
                      })}
                    </select>
                  </div>
                  {errors.division_id && <div className="fv-help-block">{t("form.error.no-division")}</div>}
                </div>
              </div>
              <div className="col-xl-4">
                <div className="form-group fv-plugins-icon-container">
                  <label>{t("form.label.district")}</label>
                  <div className="input-group">
                    <select
                      name="district_id"
                      ref={register({ required: true })}
                      onChange={onDistrictChangeHandler}
                      className="form-control suk-select-field"
                      id="districts"
                    >
                      <option value="" key={`district-key-null`}>
                        {t("form.dropdown.default")}
                      </option>
                      {(language === "bn" ? districts[division] : districts_en[division])?.map((item, index) => {
                        if(allowedNIDRegDistrict.length > 0){
                          if (allowedNIDRegDistrict.includes(parseInt(item.value)) && !blockedNIDRegDistrict.includes(parseInt(item.value))) {
                            return (
                              <option value={item.value} key={`district-key-${index}`} selected={item.value === district}>
                                {item.title}
                              </option>
                            );
                          }
                        }else{
                          if (!blockedNIDRegDistrict.includes(parseInt(item.value))) {
                            return (
                              <option value={item.value} key={`district-key-${index}`} selected={item.value === district}>
                                {item.title}
                              </option>
                            );
                          }
                        }
                      })}
                    </select>
                  </div>
                  {errors.district_id && <div className="fv-help-block">{t("form.error.no-district")}</div>}
                </div>
              </div>
              <div className="col-xl-4">
                <div className="form-group fv-plugins-icon-container">
                  <label>{t("form.label.upazilla")}</label>
                  <div className="input-group">
                    <select
                      name="upazilla_id"
                      ref={register({ required: true })}
                      onChange={onUpazillaChangeHandler}
                      className="form-control suk-select-field"
                      id="upazilla"
                    >
                      <option value="">{t("form.dropdown.default")}</option>
                      {(language === "bn" ? upazillas[district] : upazillas_en[district])?.map((item, index) => {
                        if(allowedNIDRegUpazilla.length > 0){
                          if (allowedNIDRegUpazilla.includes(parseInt(item.value)) && !blockedNIDRegUpazilla.includes(parseInt(item.value))) {
                            return (
                              <option value={item.value} key={`upazilla-key-${index}`} selected={item.value === upazilla}>
                                {item.title}
                              </option>
                            );
                          }
                        }else{
                          if (!blockedNIDRegUpazilla.includes(parseInt(item.value))) {
                            return (
                              <option value={item.value} key={`upazilla-key-${index}`} selected={item.value === upazilla}>
                                {item.title}
                              </option>
                            );
                          }
                        }
                      })}
                    </select>
                  </div>
                  {errors.upazilla_id && <div className="fv-help-block">{t("form.error.no-upazilla")}</div>}
                </div>
              </div>
            </div>
            <div className="row px-8 px-lg-10">
              <div className="col-xl-4">
                <div className="form-group fv-plugins-icon-container">
                  <label>{t("form.label.union")}</label>
                  <div className="input-group">
                    <select name="union_id" ref={register({ required: true })} className="form-control suk-select-field" id="union">
                      <option value="">{t("form.dropdown.default")}</option>
                      {(language === "bn" ? unions[upazilla] : unions_en[upazilla])?.map((item, index) => {
                        return (
                          <option value={item.value} key={`union-key-${index}`} selected={item.value === union}>
                            {item.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  {errors.union_id && <div className="fv-help-block">{t("form.error.no-union")}</div>}
                </div>
              </div>

              <div className="col-xl-4">
                <div className="form-group fv-plugins-icon-container">
                  <label>{t("form.label.ward")}</label>
                  <select
                    name="ward"
                    ref={register({ required: true })}
                    className="form-control suk-select-field"
                    id="kt_select2_7"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="">{t("form.dropdown.default")}</option>
                    {(language === "bn" ? ward : ward_en)?.map((item, index) => {
                      return (
                        <option value={item.value} key={`ward-key-${index}`}>
                          {item.title}
                        </option>
                      );
                    })}
                  </select>
                  {errors.ward && <div className="fv-help-block">{t("form.error.no-ward")}</div>}
                </div>
              </div>
              {/* <div className="col-xl-4">
                            <div className="form-group fv-plugins-icon-container">
                                <label>{t('form.label.village')}</label>
                                <div className="input-group">
                                    <input type="text" name="village" ref={register({ required: true })} className="form-control" id="village" maxLength="255" />
                                </div>
                                {errors.village && <div className="fv-help-block">{t('form.error.no-village')}</div>}
                            </div>
                        </div> */}
            </div>
          </div>
        </div>
        <div className="container su-presents-address-area">
          <div className="form-section-wrapper" id="step7">
            <div className="su-c-form-title">
              <h4>{t("form.header.center-wish")}</h4>
            </div>
            <div className="row px-lg-10 mt-3">
              <div className="col-xl-4">
                <div className="form-group fv-plugins-icon-container">
                  <label>{t("form.label.center-name")}</label>
                  <div className="input-group">
                    <select name="center_id" ref={register({ required: true })} className="form-control suk-select-field" id="centers">
                      <option value="">{t("form.dropdown.default")}</option>
                      {Object.keys(center).map((item, index) => {
                        if(allowedNIDRegCenters.length > 0){
                          if (allowedNIDRegCenters.includes(parseInt(item)) && !blockedNIDRegCenters.includes(parseInt(item))) {
                            return (
                              <option value={item} key={`center-key-${index}`}>
                                {center[item]}
                              </option>
                            );
                          }
                        }else{
                          if (!blockedNIDRegCenters.includes(parseInt(item))) {
                            return (
                              <option value={item} key={`center-key-${index}`}>
                                {center[item]}
                              </option>
                            );
                          }
                        }
                      })}
                    </select>
                  </div>
                  {errors.center_id && <div className="fv-help-block">{t("form.error.no-center")}</div>}
                </div>
              </div>
              <div class="col-xl-8">
                <div>
                  <div style={{ border: "1px dashed red", padding: "3px" }}>
                    <p>{t("form.label.center-hint-msg")}</p>
                    <p>{t("form.label.center-choose-warning")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollFormAddressInfo;
