import React, { useContext, useState, useEffect } from "react";
import { getCenters, getUnions } from "../../services/enroll";
import EnrollContext from "../../contexts/enroll";
import { divisions, districts, upazillas, unions, ward, professionType } from "../../../../data/enroll";
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
  const [PfizerCatSubCat, setPfizerCatSubCat] = useState([]);
  const [PfizerDivisions, setPfizerDivisions] = useState([]);
  const [PfizerDistrict, setPfizerDistrict] = useState([]);
  const [PfizerUpazilla, setPfizerUpazilla] = useState([]);
  const [PfizerCenters, setPfizerCenters] = useState([]);
  // const [PfizerDhakaSouthCenters, setPfizerDhakaSouthCenters] = useState([]);
  // const [PfizerDhakaNorthCenters, setPfizerDhakaNorthCenters] = useState([]);
  const [allowedPassportRegDivisions, setAllowedPassportRegDivisions] = useState([])
  const [allowedPassportRegDistrict, setAllowedPassportRegDistrict] = useState([])
  const [allowedPassportRegUpazilla, setAllowedPassportRegUpazilla] = useState([])
  const [allowedPassportRegCenters, setAllowedPassportRegCenters] = useState([])
  const [blockedPassportRegDivisions, setBlockedPassportRegDivisions] = useState([])
  const [blockedPassportRegDistrict, setBlockedPassportRegDistrict] = useState([])
  const [blockedPassportRegUpazilla, setBlockedPassportRegUpazilla] = useState([])
  const [blockedPassportRegCenters, setBlockedPassportRegCenters] = useState([])

  const [BirthRegCenters, setBirthRegCenters] = useState([]);
  const { register, errors, passportInfo, enrollmentInfo } = useContext(EnrollContext);
  const language = getLanguage();

  useEffect(() => {
    const setting_data = localStorage.getItem("__sws__");
    if (setting_data) {
      const parsed_setting_data = JSON.parse(setting_data);
      if (parsed_setting_data && parsed_setting_data.passportRegData) {
        setPfizerCatSubCat(parsed_setting_data?.passportRegData?.PfizerCatSubCat ?? [])
        setPfizerDivisions(parsed_setting_data?.passportRegData?.PfizerDivisions ?? [])
        setPfizerDistrict(parsed_setting_data?.passportRegData?.PfizerDistrict ?? [])
        setPfizerUpazilla(parsed_setting_data?.passportRegData?.PfizerUpazilla ?? [])
        setPfizerCenters(parsed_setting_data?.passportRegData?.PfizerCenters ?? [])
        // setPfizerDhakaSouthCenters(parsed_setting_data?.passportRegData?.PfizerDhakaSouthCenters ?? [])
        // setPfizerDhakaNorthCenters(parsed_setting_data?.passportRegData?.PfizerDhakaNorthCenters ?? [])
        setAllowedPassportRegDivisions(parsed_setting_data?.passportRegData?.allowedPassportRegDivisions ?? [])
        setAllowedPassportRegDistrict(parsed_setting_data?.passportRegData?.allowedPassportRegDistrict ?? [])
        setAllowedPassportRegUpazilla(parsed_setting_data?.passportRegData?.allowedPassportRegUpazilla ?? [])
        setAllowedPassportRegCenters(parsed_setting_data?.passportRegData?.allowedPassportRegCenters ?? [])
        setBlockedPassportRegDivisions(parsed_setting_data?.passportRegData?.blockedPassportRegDivisions ?? [])
        setBlockedPassportRegDistrict(parsed_setting_data?.passportRegData?.blockedPassportRegDistrict ?? [])
        setBlockedPassportRegUpazilla(parsed_setting_data?.passportRegData?.blockedPassportRegUpazilla ?? [])
        setBlockedPassportRegCenters(parsed_setting_data?.passportRegData?.blockedPassportRegCenters ?? [])
      }
    } else {
      getSettings({}).then((response) => {
        if (response.response.result) {
          localStorage.setItem("__sws__", JSON.stringify(response.response.data));
          if(response.response.data?.passportRegData){
            setPfizerCatSubCat(response.response.data?.passportRegData?.PfizerCatSubCat ?? [])
            setPfizerDivisions(response.response.data?.passportRegData?.PfizerDivisions ?? [])
            setPfizerDistrict(response.response.data?.passportRegData?.PfizerDistrict ?? [])
            setPfizerUpazilla(response.response.data?.passportRegData?.PfizerUpazilla ?? [])
            setPfizerCenters(response.response.data?.passportRegData?.PfizerCenters ?? [])
            // setPfizerDhakaSouthCenters(response.response.data?.passportRegData?.PfizerDhakaSouthCenters ?? [])
            // setPfizerDhakaNorthCenters(response.response.data?.passportRegData?.PfizerDhakaNorthCenters ?? [])
            setAllowedPassportRegDivisions(response.response.data?.passportRegData?.allowedPassportRegDivisions ?? [])
            setAllowedPassportRegDistrict(response.response.data?.passportRegData?.allowedPassportRegDistrict ?? [])
            setAllowedPassportRegUpazilla(response.response.data?.passportRegData?.allowedPassportRegUpazilla ?? [])
            setAllowedPassportRegCenters(response.response.data?.passportRegData?.allowedPassportRegCenters ?? [])
            setBlockedPassportRegDivisions(response.response.data?.passportRegData?.blockedPassportRegDivisions ?? [])
            setBlockedPassportRegDistrict(response.response.data?.passportRegData?.blockedPassportRegDistrict ?? [])
            setBlockedPassportRegUpazilla(response.response.data?.passportRegData?.blockedPassportRegUpazilla ?? [])
            setBlockedPassportRegCenters(response.response.data?.passportRegData?.blockedPassportRegCenters ?? [])
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
      <div className="container p-0" id="su-nid-verification-form">

        <div className="su-presents-address-area">
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
                        if (PfizerCatSubCat.includes(parseInt(enrollmentInfo.basic_type_id)) || (enrollmentInfo?.basic_sub_type_id && PfizerCatSubCat.includes(parseInt(enrollmentInfo.basic_sub_type_id)))) {
                          if (PfizerDivisions.includes(parseInt(item.value))) {
                            return (
                              <option value={item.value} key={`division-key-${index}`}>
                                {item.title}
                              </option>
                            );
                          }
                        } else {
                          if(allowedPassportRegDivisions.length > 0){
                            if (allowedPassportRegDivisions.includes(parseInt(item.value)) && !blockedPassportRegDivisions.includes(parseInt(item.value))) {
                              return (
                                <option value={item.value} key={`division-key-${index}`}>
                                  {item.title}
                                </option>
                              );
                            }
                          }else{
                            if (!blockedPassportRegDivisions.includes(parseInt(item.value))) {
                              return (
                                <option value={item.value} key={`division-key-${index}`}>
                                  {item.title}
                                </option>
                              );
                            }
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
                        if (PfizerCatSubCat.includes(parseInt(enrollmentInfo.basic_type_id)) || (enrollmentInfo?.basic_sub_type_id && PfizerCatSubCat.includes(parseInt(enrollmentInfo.basic_sub_type_id)))) {
                          if (PfizerDistrict.includes(parseInt(item.value))) {
                            return (
                              <option value={item.value} key={`district-key-${index}`} selected={item.value === district}>
                                {item.title}
                              </option>
                            );
                          }
                        } else {
                          if(allowedPassportRegDistrict.length > 0){
                            if (allowedPassportRegDistrict.includes(parseInt(item.value)) && !blockedPassportRegDistrict.includes(parseInt(item.value))) {
                              return (
                                <option value={item.value} key={`district-key-${index}`} selected={item.value === district}>
                                  {item.title}
                                </option>
                              );
                            }
                          }else{
                            if (!blockedPassportRegDistrict.includes(parseInt(item.value))) {
                              return (
                                <option value={item.value} key={`district-key-${index}`} selected={item.value === district}>
                                  {item.title}
                                </option>
                              );
                            }
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
                        if (PfizerCatSubCat.includes(parseInt(enrollmentInfo.basic_type_id)) || (enrollmentInfo?.basic_sub_type_id && PfizerCatSubCat.includes(parseInt(enrollmentInfo.basic_sub_type_id)))) {
                          if (PfizerUpazilla.includes(parseInt(item.value))) {
                            return (
                              <option value={item.value} key={`upazilla-key-${index}`} selected={item.value === upazilla}>
                                {item.title}
                              </option>
                            );
                          }
                        } else {
                          if(allowedPassportRegUpazilla.length > 0){
                            if (allowedPassportRegUpazilla.includes(parseInt(item.value)) && !blockedPassportRegUpazilla.includes(parseInt(item.value))) {
                              return (
                                <option value={item.value} key={`upazilla-key-${index}`} selected={item.value === upazilla}>
                                  {item.title}
                                </option>
                              );
                            }
                          }else{
                            if (!blockedPassportRegUpazilla.includes(parseInt(item.value))) {
                              return (
                                <option value={item.value} key={`upazilla-key-${index}`} selected={item.value === upazilla}>
                                  {item.title}
                                </option>
                              );
                            }
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
              <div className="col-xl-4">
                <div className="form-group fv-plugins-icon-container">
                  <label>{t("form.label.village")}</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="village"
                      ref={register({ required: true })}
                      className="form-control"
                      id="village"
                      maxLength="255"
                    />
                  </div>
                  {errors.village && <div className="fv-help-block">{t("form.error.no-village")}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="su-presents-address-area">
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
                        if (PfizerCatSubCat.includes(parseInt(enrollmentInfo.basic_type_id)) || (enrollmentInfo?.basic_sub_type_id && PfizerCatSubCat.includes(parseInt(enrollmentInfo.basic_sub_type_id)))) {
                          if (PfizerCenters.includes(parseInt(item))) {
                            if (!BirthRegCenters.includes(parseInt(item))) {
                              return (
                                <option value={item} key={`center-key-${index}`}>
                                  {center[item]}
                                </option>
                              );
                            }
                          }
                        } else {
                          if(allowedPassportRegCenters.length > 0){
                            if (allowedPassportRegCenters.includes(parseInt(item)) && !blockedPassportRegCenters.includes(parseInt(item))) {
                              return (
                                <option value={item} key={`center-key-${index}`}>
                                  {center[item]}
                                </option>
                              );
                            }
                          }else{
                            if (!blockedPassportRegCenters.includes(parseInt(item))) {
                              return (
                                <option value={item} key={`center-key-${index}`}>
                                  {center[item]}
                                </option>
                              );
                            }
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
