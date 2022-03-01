import React from "react";
import moment from "moment";
import QRCode from "qrcode.react";
import gov_logo from "./../../../../../assets/images/gov_logo.png";
import mujib100 from "./../../../../../assets/images/mujib100.png";
import tika_logo from "./../../../../../assets/images/tika_logo.png";
import DGH_logo from "./../../../../../assets/images/DGH_logo.png";
import ICT_Logo from "./../../../../../assets/images/ICT_Logo.png";
import { useTranslation } from "react-i18next";

const VaccineCard = (props) => {
  const [t] = useTranslation();

  const printThisPage = () => {
    window.print();
  };

  return (
    <>
      <div className="container">
        <div className="row no-print">
          <div className="col-md-12 mb-3 text-center">
            {props.data.vaccine_card_link && (
              <>
                <a href={props.data.vaccine_card_link} className="btn btn-primary">
                  {t("form.label.button.vaccine-card-download")}
                </a>
              </>
            )}

            {!props.data.link && (
              <>
                <button onClick={() => printThisPage()} className="btn btn-primary">
                  {t("form.label.button.vaccine-card-download")}
                </button>
              </>
            )}
          </div>
        </div>

        {/* <div className="card card-custom overflow-hidden" style={{ border: "1px solid", marginBottom: "20px" }}>
          <div className="card-body p-0">
            <div className="row justify-content-center py-8 px-8 py-md-27 px-md-0">
              <div className="col-md-12" style={{ fontSize: "15px !important" }}>
                <div className="d-flex justify-content-between">
                  <div
                    style={{ borderRight: "1px solid", padding: "10px" }}
                    className="d-flex flex-column flex-root col-md-6"
                    align="center"
                  >
                    <div style={{ float: "left", width: "100%" }}>
                      <div style={{ float: "left", padding: "10px", width: "100px" }}>
                        <img src={gov_logo} width={50} />
                      </div>
                      <div style={{ float: "left", width: "260px" }}></div>
                      <div style={{ float: "right", padding: "5px", width: "100px" }}>
                        <img src={mujib100} width={80} />
                      </div>
                    </div>
                    <span className="font-weight-bolder" style={{ paddingBottom: "10px" }}>
                      কোভিড-১৯ টিকাদান কার্ড{" "}
                    </span>
                    <span className="font-weight-bolder">(Covid-19 Vaccination Card)</span>
                    <div style={{ float: "left", width: "460px" }}>
                      <div style={{ float: "left", width: "280px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          রেজিস্ট্রেশন নং-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "194px",
                          }}
                        >
                          {props.data.registration_id ? props.data.registration_id : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: "left", width: "180px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          তারিখ-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "141px",
                          }}
                        >
                          {props.data.registration_date}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: "left", width: "460px" }}>
                      <div style={{ float: "left", width: "460px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          নাম-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "434px",
                          }}
                        >
                          {props.data.name ? props.data.name : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: "left", width: "460px" }}>
                      <div style={{ float: "left", width: "280px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          জন্ম তারিখ-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "216px",
                          }}
                        >
                          {props.data.dob ? props.data.dob : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: "left", width: "180px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          বয়স-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "149px",
                          }}
                        >
                          {props.data.age ? props.data.age : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: "left", width: "460px" }}>
                      <div style={{ float: "left", width: "460px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          জাতীয় পরিচয়পত্র নম্বর-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "327px",
                          }}
                        >
                          {props.data.nid ? props.data.nid : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: "left", width: "460px" }}>
                      <div style={{ float: "left", width: "460px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          মাতার নাম-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "397px",
                          }}
                        >
                          {props.data.mother ? props.data.mother : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: "left", width: "460px" }}>
                      <div style={{ float: "left", width: "460px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          পিতার নাম-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "396px",
                          }}
                        >
                          {props.data.father ? props.data.father : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: "left", width: "460px" }}>
                      <div style={{ float: "left", width: "230px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          বাড়ি/হোল্ডিং নং-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "141px",
                          }}
                        >
                          {props.data.holding ? props.data.holding : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: "left", width: "230px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          গ্রাম/মহল্লা/পাড়া-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "137px",
                          }}
                        >
                          {props.data.village ? props.data.village : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: "left", width: "460px" }}>
                      <div style={{ float: "left", width: "350px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          উপজেলা/সিটি কর্পোরেশন-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "205px",
                          }}
                        >
                          {props.data.upazilla ? props.data.upazilla : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: "left", width: "110px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          ওয়ার্ড নং-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "56px",
                          }}
                        >
                          {props.data.ward ? props.data.ward : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: "left", width: "460px" }}>
                      <div style={{ float: "left", width: "230px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          জেলা-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "196px",
                          }}
                        >
                          {props.data.district ? props.data.district : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: "left", width: "230px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          ইউনিয়ন-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "179px",
                          }}
                        >
                          {props.data.union ? props.data.union : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: "left", width: "460px" }}>
                      <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                        কেন্দ্রের নাম-
                      </label>
                      <div
                        className="opacity-100"
                        style={{
                          borderBottom: "1px dashed",
                          paddingLeft: "5px",
                          float: "left",
                          textAlign: "left",
                          width: "390px",
                        }}
                      >
                        {props.data.center ? props.data.center : <span>&nbsp;</span>}
                      </div>
                    </div>
                    <div style={{ paddingTop: "10px", fontWeight: "bold" }}>
                      <label style={{ textAlign: "center" }} className="opacity-85">
                        <u>টিকাদান কর্মীর তথ্য</u>
                      </label>
                    </div>
                    <div style={{ float: "left", width: "460px" }}>
                      <div style={{ float: "left", width: "460px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          নাম-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "434px",
                          }}
                        >
                          -
                        </div>
                      </div>
                    </div>
                    <div style={{ float: "left", paddingBottom: "5px", width: "460px" }}>
                      <div style={{ float: "left", width: "230px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          কেন্দ্রের আইডি-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "145px",
                          }}
                        >
                          {props.data.center_id ? props.data.center_id : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: "left", width: "230px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          মোবাইল-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "178px",
                          }}
                        >
                          -
                        </div>
                      </div>
                    </div>
                    <table style={{ width: "100%" }}>
                      <tbody>
                        <tr style={{ backgroundColor: "wheat" }}>
                          <th style={{ textAlign: "center" }} colSpan={3}>
                            কোভিড-১৯ টিকা প্রদান সম্পর্কিত তথ্য
                          </th>
                        </tr>
                        <tr style={{ backgroundColor: "wheat" }}>
                          <td style={{ textAlign: "center" }}>টিকার ডোজ</td>
                          <td style={{ textAlign: "center" }}>টিকা পাওয়ার তারিখ</td>
                          <td style={{ textAlign: "center" }}>টিকা প্রদানের তারিখ ও কর্মীর স্বাক্ষর</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center", padding: "20px 0 20px 0" }}>কোভিড-১৯ টিকা- ১ম ডোজ</td>
                          <td> {props.data.dose_1 ? props.data.dose_1 : <span>&nbsp;</span>} </td>
                          <td> {props.data.dose_given_date_1 ? props.data.dose_given_date_1 : <span>&nbsp;</span>} </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center", padding: "20px 0 20px 0" }}>কোভিড-১৯ টিকা- ২য় ডোজ</td>
                          <td> {props.data.dose_2 ? props.data.dose_2 : <span>&nbsp;</span>} </td>
                          <td> {props.data.dose_given_date_2 ? props.data.dose_given_date_2 : <span>&nbsp;</span>} </td>
                        </tr>
                        <tr style={{ padding: "20px 0 20px 0", borderRight: "1px solid black" }}>
                          <td rowSpan="2" style={{ padding: "20px 5px", borderRight: "1px solid black" }}>
                            {" "}
                            টিকার নাম, প্রস্তুতকারী প্রতিষ্ঠান, <br /> ব্যাচ নম্বর
                          </td>
                          <td colSpan="2" style={{ padding: "20px 5px", borderRight: "1px solid black" }}>
                            ডোজ-১:
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2" style={{ padding: "20px 5px", borderRight: "1px solid black" }}>
                            ডোজ-২:
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex flex-column flex-root col-md-6" style={{ padding: "10px" }} align="left">
                    <span
                      className="font-weight-bolder mb-2"
                      style={{ backgroundColor: "red", color: "#FFF", fontWeight: "bold", padding: "20px" }}
                      align="center"
                    >
                      সাধারন নির্দেশনাসমূহ
                    </span>
                    <div className="opacity-85" style={{ padding: "5px 10px 5px 10px" }}>
                      &gt; কোভিড-১৯ টিকার ১ম ও ২য় ডোজ নেয়ার জন্য নির্দিষ্ট তারিখে নির্দিষ্ট টিকাদান কেন্দ্রে এই টিকার
                      কার্ডটি সাথে নিয়ে আসুন।{" "}
                    </div>
                    <div className="opacity-85" style={{ padding: "5px 10px 10px 10px" }}>
                      &gt;টিকা দেওয়ার পর যে কোন সমস্যা/অসুবিধা হলে সাথে সাথে টিকাদান কর্মীকে খবর দিন। প্রয়োজনে উদ্দিষ্ট
                      জনগণকে নিকটস্থ স্বাস্থ্য কেন্দ্রে নিয়ে আসুন। ।
                    </div>
                    <div className="opacity-85" style={{ padding: "5px 10px 10px 10px" }}>
                      &gt; টিকা দেওয়ার পূর্বে এসএমএস এর মাধ্যমে টিকা কেন্দ্র ও প্রদানের তারিখ জানানো জানানো হবে।{" "}
                    </div>
                    <div className="opacity-85" style={{ padding: "5px 10px 10px 10px" }}>
                      &gt; টিকা প্রদান শেষ হলেও ভবিষ্যৎ প্রয়োজনে কার্ডটি সংরক্ষণ করুন{" "}
                    </div>
                    <div className="opacity-85" style={{ padding: "5px 10px 10px 10px" }}>
                      &gt; টিকার কার্ডটি হারিয়ে গেলেও www.surokkha.gov.bd ওয়েবসাইট থেকে ডাউনলোড করা যাবে।{" "}
                    </div>
                    <div className="opacity-85" style={{ padding: "5px 10px 10px 10px" }}>
                      &gt; কোভিড-১৯ টিকার ২টি ডোজ সম্পন্ন হলে www.surokkha.gov.bd হতে সনদ সংগ্রহ করা যাবে।{" "}
                    </div>
                    <div className="opacity-85" style={{ padding: "5px 10px 10px 10px" }}>
                      &gt; কোভিড-১৯-এর টিকা পেলেও যথাযথ স্বাস্থ্য বিধি মেনে চলুন।{" "}
                    </div>
                    <div style={{ float: "right", width: "460px", paddingBottom: "10px" }} align="center">
                      <div className="qr-code-box">
                        <span>
                          <QRCode
                            value={JSON.stringify({ nid: props.data.nid, registration_id: props.data.registration_id })}
                            size={80}
                          />
                        </span>
                      </div>
                    </div>
                    <div
                      className="font-weight-bolder mb-2"
                      style={{ backgroundColor: "red", color: "#FFF", fontWeight: "bold", padding: "20px" }}
                      align="center"
                    >
                      {" "}
                      আপনার সহযোগিতায় বাংলাদেশ সরকার কোভিড-১৯ ভ্যাকসিন উদ্দিষ্ট সকলের কাছে পৌঁছে দিতে বদ্ধপরিকর।
                    </div>
                    <div style={{ float: "left", width: "460px" }}>
                      <div style={{ float: "left", padding: "10px", width: "120px" }}>
                        <img src={tika_logo} width={70} />
                      </div>
                      <div style={{ float: "left", width: "220px" }}>
                        <label style={{ textAlign: "center", paddingTop: "10px" }} className="opacity-100">
                          সম্প্রসারিত টিকাদান কর্মসূচি (ইপিআই)
                          <br />
                          স্বাস্থ্য অধিদপ্তর
                          <br />
                          স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রনালয়
                        </label>
                      </div>
                      <div style={{ float: "right", padding: "10px", width: "120px" }}>
                        <img src={DGH_logo} width={100} />
                      </div>
                    </div>
                    <div style={{ fontWeight: "bold", paddingTop: "10px" }} width={460} align="center">
                      :: সহযোগিতায় ::
                    </div>
                    <div style={{ width: "460px" }} align="center">
                      <div style={{ width: "100px" }}></div>
                      <div style={{ width: "460px" }}>
                        <img src={ICT_Logo} width={280} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="opacity-85" style={{ padding: "15px 10px 30px 10px", align: "center" }}>
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </div>

        <div className="card card-custom overflow-hidden" style={{ border: " 1px solid", marginBottom: "20px" }}>
          <div className="card-body p-0">
            <div className="row justify-content-center py-8 px-8 py-md-27 px-md-0">
              <div className="col-md-12" style={{ border: "1px solid", fontSize: "15px" }}>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column flex-root col-md-12" style={{ padding: "10px", align: "left" }}>
                    <span
                      className="font-weight-bolder mb-2"
                      style={{ fontSize: "15px", fontWeight: "bold", borderBottom: "1px solid", textAlign: "center" }}
                    >
                      কোভিড-১৯ টিকা গ্রহণকারীর অবহিতকরণ সম্মতিপত্র
                    </span>
                    <div className="opacity-85" style={{ padding: "10px 10px 10px 10px" }}></div>
                    <div style={{ float: "left", width: "920px" }}>
                      <div style={{ float: "left", width: "300px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          রেজিস্ট্রেশন নং-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "214px",
                          }}
                        >
                          {" "}
                          {props.data.registration_id ? props.data.registration_id : <span>&nbsp;</span>}{" "}
                        </div>
                      </div>

                      <div style={{ float: "left", width: " " }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          রেজিস্ট্রেশনের তারিখ-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "162px",
                          }}
                        >
                          {" "}
                          {props.data.registration_date}{" "}
                        </div>
                      </div>

                      <div style={{ float: "left", width: "340px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          জাতীয় পরিচয়পত্র নম্বর-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "213px",
                          }}
                        >
                          {props.data.nid ? props.data.nid : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: "left", width: "920px" }}>
                        <div style={{ float: "left", width: "920px" }}>
                          <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                            নাম-
                          </label>
                          <div
                            className="opacity-100"
                            style={{
                              borderBottom: "1px dashed",
                              paddingLeft: "5px",
                              float: "left",
                              textAlign: "left",
                              width: "460px",
                            }}
                          >
                            {" "}
                            {props.data.name ? props.data.name : <span>&nbsp;</span>}{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-85" style={{ padding: "10px 10px 10px 10px" }}></div>
                    <div className="opacity-85" style={{ padding: "5px 10px 5px 10px" }}>
                      &gt; করোনা টিকা সম্পর্কিত তথ্য আমাকে অনলাইন ও সামনা সামনি উপায়ে ব্যাখ্যা করা হয়েছে।
                    </div>
                    <div className="opacity-85" style={{ padding: "5px 10px 5px 10px" }}>
                      &gt; আমি সম্মতি দিচ্ছি যে, টিকা গ্রহণ ও এর প্রভাব সম্পর্কিত তথ্যের প্রয়োজন হলে আমি তা প্রদান করবো।
                    </div>
                    <div className="opacity-85" style={{ padding: "5px 10px 5px 10px" }}>
                      &gt; জানামতে আমার কোনো রকম ঔষধজনিত এলার্জি নেই।
                    </div>
                    <div className="opacity-85" style={{ padding: "5px 10px 5px 10px" }}>
                      &gt; টিকাদান পরবর্তী প্রতিবেদন/গবেষণা পত্র তৈরির ব্যাপারে অনুমতি দিলাম।
                    </div>
                    <div className="opacity-85" style={{ padding: "5px 10px 5px 10px" }}>
                      &gt; আমি স্বেচ্ছায়, স্ব-জ্ঞানে এই টিকার উপকারিতা ও পার্শ্ব-প্রতিক্রিয়া (ভ্যাকসিন প্রয়োগের স্থানে
                      ফুলে যাওয়া, সামান্য জ্বর, মাথাব্যথা, বমি বমি ভাব, মাথা ও শরীর ব্যথা) সম্পর্কে অবগত হয়ে টিকা গ্রহণে
                      সম্মত আছি।
                    </div>
                    <div className="opacity-85" style={{ padding: "5px 10px 5px 10px" }}></div>

                    <div style={{ float: "left", width: "920px" }}>
                      <div style={{ float: "left", width: "620px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">
                          টিকা গ্রহণকারীর স্বাক্ষর-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: " 1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "350px",
                          }}
                        >
                          -
                        </div>
                      </div>

                      <div style={{ float: "left", width: "300px" }}>
                        <label className="opacity-85" style={{ float: "left", textAlign: "left" }}>
                          তারিখ-
                        </label>
                        <div
                          className="opacity-100"
                          style={{
                            borderBottom: "1px dashed",
                            paddingLeft: "5px",
                            float: "left",
                            textAlign: "left",
                            width: "200px",
                          }}
                        >
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </>
  );
};

export default VaccineCard;
