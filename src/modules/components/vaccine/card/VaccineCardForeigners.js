import React from 'react';
import moment from 'moment';
import QRCode from 'qrcode.react';
import gov_logo from './../../../../../assets/images/gov_logo.png';
import mujib100 from './../../../../../assets/images/mujib100.png';
import tika_logo from './../../../../../assets/images/tika_logo.png';
import DGH_logo from './../../../../../assets/images/DGH_logo.png';
import ICT_Logo from './../../../../../assets/images/ICT_Logo.png';
import { useTranslation } from 'react-i18next';

const VaccineCardForeigners = (props) => {

  const [t] = useTranslation();

  const printThisPage = () => {
    window.print();
  }

  return (
    <>
      <div className="container">
        <div className="row no-print">
          <div className="col-md-12 mb-3 text-center">
            {
              props.data.vaccine_card_link && <>
                <a href={props.data.vaccine_card_link} className="btn btn-primary">Download Vaccine Card</a>
              </>
            }

            {!props.data.link && <>
              <button onClick={() => printThisPage()} className="btn btn-primary">Download Vaccine Card</button>
            </>
            }
          </div>
        </div>


        {/* <div className="card card-custom overflow-hidden" style={{ border: '1px solid', marginBottom: '20px' }}>
          <div className="card-body p-0">
            <div className="row justify-content-center py-8 px-8 py-md-27 px-md-0">
              <div className="col-md-12" style={{ fontSize: '15px !important' }}>

                <div className="d-flex justify-content-between">
                  <div style={{ borderRight: '1px solid', padding: '10px' }} className="d-flex flex-column flex-root col-md-6" align="center">
                    <div style={{ float: 'left', width: '100%' }}>
                      <div style={{ float: 'left', padding: '10px', width: '100px' }}>
                        <img src={gov_logo} width={50} />
                      </div>
                      <div style={{ float: 'left', width: '260px' }}>
                      </div>
                      <div style={{ float: 'right', padding: '5px', width: '100px' }}>
                        <img src={mujib100} width={80} />
                      </div>
                    </div>
                    <span className="font-weight-bolder" style={{ paddingBottom: '10px' }}>Covid-19 Vaccination Card </span>
                    <div style={{ float: 'left', width: '460px' }}>
                      <div style={{ float: 'left', width: '280px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Registration No-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '194px' }}>
                          {props.data.registration_id ? props.data.registration_id : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: 'left', width: '180px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Date-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '141px' }}>
                          {props.data.registration_date}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: 'left', width: '460px' }}>
                      <div style={{ float: 'left', width: '460px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Name-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '434px' }}>
                          {props.data.name ? props.data.name : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: 'left', width: '460px' }}>
                      <div style={{ float: 'left', width: '280px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Date of Birth-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '216px' }}>
                          {props.data.dob ? props.data.dob : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: 'left', width: '180px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Age-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '149px' }}>
                          {props.data.age ? props.data.age : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: 'left', width: '460px' }}>
                      <div style={{ float: 'left', width: '460px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Passport No-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '327px' }}>
                          {props.data.passport_no ? props.data.passport_no : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: 'left', width: '460px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Country-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '327px' }}>
                          {props.data.country ? props.data.country : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: 'left', width: '460px' }}>
                      <div style={{ float: 'left', width: '460px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Mother’s Name-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '397px' }}>
                          {props.data.mother ? props.data.mother : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: 'left', width: '460px' }}>
                      <div style={{ float: 'left', width: '460px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Father’s Name-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '396px' }}>
                          {props.data.father ? props.data.father : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: 'left', width: '460px' }}>
                      <div style={{ float: 'left', width: '230px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">House No-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '141px' }}>
                          {props.data.holding ? props.data.holding : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: 'left', width: '230px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Town/Area-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '137px' }}>
                          {props.data.village ? props.data.village : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: 'left', width: '460px' }}>
                      <div style={{ float: 'left', width: '350px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Upazila/City Corporation-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '205px' }}>
                          {props.data.upazilla ? props.data.upazilla : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: 'left', width: '110px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Word No-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '56px' }}>
                          {props.data.ward ? props.data.ward : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: 'left', width: '460px' }}>
                      <div style={{ float: 'left', width: '230px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">District-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '196px' }}>
                          {props.data.district ? props.data.district : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: 'left', width: '230px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Union-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '179px' }}>
                          {props.data.union ? props.data.union : <span>&nbsp;</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ float: 'left', width: '460px' }}>
                      <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Center Name-</label>
                      <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '390px' }}>
                        {props.data.center ? props.data.center : <span>&nbsp;</span>}
                      </div>
                    </div>
                    <div style={{ paddingTop: '10px', fontWeight: 'bold' }}>
                      <label style={{ textAlign: 'center' }} className="opacity-85"><u>Vaccinator Information</u></label>
                    </div>
                    <div style={{ float: 'left', width: '460px' }}>
                      <div style={{ float: 'left', width: '460px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Name-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '434px' }}>-</div>
                      </div>
                    </div>
                    <div style={{ float: 'left', paddingBottom: '5px', width: '460px' }}>
                      <div style={{ float: 'left', width: '230px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Center ID-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '145px' }}>
                          {props.data.center_id ? props.data.center_id : <span>&nbsp;</span>}
                        </div>
                      </div>
                      <div style={{ float: 'left', width: '230px' }}>
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Mobile-</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '178px' }}>-</div>
                      </div>
                    </div>
                    <table style={{ width: '100%' }}>
                      <tbody><tr style={{ backgroundColor: 'wheat' }}>
                        <th style={{ textAlign: 'center' }} colSpan={3}>Covid-19 Vaccination Information</th>
                      </tr>
                        <tr style={{ backgroundColor: 'wheat' }}>
                          <td style={{ textAlign: 'center' }}>Vaccine Dose</td>
                          <td style={{ textAlign: 'center' }}>Date of Receiving the vaccine</td>
                          <td style={{ textAlign: 'center' }}>Date of Vaccination & Vaccinator’s Signature</td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center', padding: '20px 0 20px 0' }}>1<sup>st</sup> Dose</td>
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <td style={{ textAlign: 'center', padding: '20px 0 20px 0' }}>2<sup>nd Dose</sup></td>
                          <td />
                          <td />
                        </tr>
                        <tr style={{ padding: '20px 0 20px 0', borderRight: '1px solid black' }}>
                          <td rowSpan="2" style={{ padding: "20px 5px", borderRight: "1px solid black" }}> Vaccine Name, Manufacturer, <br /> Batch No
                            </td>
                          <td colSpan="2" style={{ padding: '20px 5px', borderRight: '1px solid black' }}>Dose-1:</td>
                        </tr>
                        <tr>
                          <td colSpan="2" style={{ padding: '20px 5px', borderRight: '1px solid black' }}>Dose-2:</td>
                        </tr>
                      </tbody></table>
                  </div>
                  <div className="d-flex flex-column flex-root col-md-6" style={{ padding: '10px' }} align="left">
                    <span className="font-weight-bolder mb-2" style={{ backgroundColor: 'red', color: '#FFF', fontWeight: 'bold', padding: '20px' }} align="center">General instructions</span>
                    <div className="opacity-85" style={{ padding: '5px 10px 5px 10px' }}>&gt; Bring this Vaccination Card to the designated immunization center on the due date of 1st and 2nd dose of Covid-19 vaccine. </div>
                    <div className="opacity-85" style={{ padding: '5px 10px 10px 10px' }}>&gt; Inform the immunization worker immediately if there is any problem / difficulty after vaccination. If necessary, bring the intended people to the nearest health center. </div>
                    <div className="opacity-85" style={{ padding: '5px 10px 10px 10px' }}>&gt; Before vaccination, the vaccination center and the date of vaccination will be informed via SMS. </div>
                    <div className="opacity-85" style={{ padding: '5px 10px 10px 10px' }}>&gt; Keep the card for future use even if the vaccination is completed </div>
                    <div className="opacity-85" style={{ padding: '5px 10px 10px 10px' }}>&gt; If the vaccine card is lost, it can be downloaded from the website www.surokkha.gov.bd. </div>
                    <div className="opacity-85" style={{ padding: '5px 10px 10px 10px' }}>&gt; Certificate can be collected from www.surokkha.gov.bd after completion of 2 doses of Covid-19 vaccine. </div>
                    <div className="opacity-85" style={{ padding: '5px 10px 10px 10px' }}>&gt; Even if you get vaccinated against Covid-19, follow proper health rules. </div>
                    <div style={{ float: 'right', width: '460px', paddingBottom: '10px' }} align="center">
                      <div className="qr-code-box"><span>
                        <QRCode value={JSON.stringify({ 'passport_no': props.data.passport_no, 'registration_id': props.data.registration_id })} size={80} />
                      </span></div>
                    </div>
                    <div className="font-weight-bolder mb-2" style={{ backgroundColor: 'red', color: '#FFF', fontWeight: 'bold', padding: '20px' }} align="center"> With your cooperation, the Government of Bangladesh is committed to deliver the Covid-19 vaccine to all who are targeted.</div>
                    <div style={{ float: 'left', width: '460px' }}>
                      <div style={{ float: 'left', padding: '10px', width: '120px' }}>
                        <img src={tika_logo} width={70} />
                      </div>
                      <div style={{ float: 'left', width: '220px' }}>
                        <label style={{ textAlign: 'center', paddingTop: '10px' }} className="opacity-100">Expanded Programme on Immunization (EPI)<br />Directorate General of Health Services<br />Ministry of health and family welfare</label>
                      </div>
                      <div style={{ float: 'right', padding: '10px', width: '120px' }}>
                        <img src={DGH_logo} width={100} />
                      </div>
                    </div>
                    <div style={{ fontWeight: 'bold', paddingTop: '10px' }} width={460} align="center">:: In Collaboration With ::</div>
                    <div style={{ width: '460px' }} align="center">
                      <div style={{ width: '100px' }}>
                      </div>
                      <div style={{ width: '460px' }}>
                        <img src={ICT_Logo} width={280} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className="opacity-85" style={{ padding: "15px 10px 30px 10px", align: "center" }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>

        <div className="card card-custom overflow-hidden" style={{ border: " 1px solid", marginBottom: "20px" }}>
          <div className="card-body p-0">
            <div className="row justify-content-center py-8 px-8 py-md-27 px-md-0">
              <div className="col-md-12" style={{ border: "1px solid", fontSize: "15px" }}>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column flex-root col-md-12" style={{ padding: '10px', align: "left" }}  >
                    <span className="font-weight-bolder mb-2" style={{ fontSize: "15px", fontWeight: "bold", borderBottom: "1px solid", textAlign: "center" }}>Consent of Covid-19 vaccine Recipient</span>
                    <div className="opacity-85" style={{ padding: "10px 10px 10px 10px" }} ></div>
                    <div style={{ float: "left", width: "920px" }} >
                      <div style={{ float: "left", width: "300px" }} >
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">Registration No-</label>
                        <div className="opacity-100" style={{ borderBottom: "1px dashed", paddingLeft: "5px", float: "left", textAlign: "left", width: "214px" }} > {props.data.registration_id ? props.data.registration_id : <span>&nbsp;</span>} </div>
                      </div>

                      <div style={{ float: "left", width: " " }} >
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">Registration Date-</label>
                        <div className="opacity-100" style={{ borderBottom: "1px dashed", paddingLeft: "5px", float: "left", textAlign: "left", width: "162px" }} >  {props.data.registration_date} </div>
                      </div>

                      <div style={{ float: "left", width: "340px" }}>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">Passport No-</label>
                        <div className="opacity-100" style={{ borderBottom: "1px dashed", paddingLeft: "5px", float: "left", textAlign: "left", width: "213px" }}>{props.data.passport_no ? props.data.passport_no : <span>&nbsp;</span>}</div>
                        <label style={{ float: "left", textAlign: "left" }} className="opacity-85">Country-</label>
                        <div className="opacity-100" style={{ borderBottom: "1px dashed", paddingLeft: "5px", float: "left", textAlign: "left", width: "213px" }}>{props.data.country ? props.data.country : <span>&nbsp;</span>}</div>
                      </div>
                      <div style={{ float: "left", width: "920px" }}>
                        <div style={{ float: "left", width: "920px" }}>
                          <label style={{ float: "left", textAlign: "left" }} className="opacity-85">Name-</label>
                          <div className="opacity-100" style={{ borderBottom: "1px dashed", paddingLeft: "5px", float: "left", textAlign: "left", width: "460px" }} > {props.data.name ? props.data.name : <span>&nbsp;</span>} </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-85" style={{ padding: "10px 10px 10px 10px" }} ></div>
                    <div className="opacity-85" style={{ padding: "5px 10px 5px 10px" }} >&gt; Information about the corona vaccine has been explained to me online and face-to-face.</div>
                    <div className="opacity-85" style={{ padding: "5px 10px 5px 10px" }} >&gt; I agree that I will provide information on vaccination and its effects if needed.</div>
                    <div className="opacity-85" style={{ padding: "5px 10px 5px 10px" }} >&gt; According to my knowledge, I don't have any drug allergies.</div>
                    <div className="opacity-85" style={{ padding: "5px 10px 5px 10px" }} >&gt; I am giving permission for the preparation of post-vaccination report / research paper.</div>
                    <div className="opacity-85" style={{ padding: "5px 10px 5px 10px" }} >&gt; I voluntarily agree to vaccinate, knowing the benefits and side effects of this vaccine (swelling at the site of vaccination, mild fever, headache, nausea, headache and body aches).</div>
                    <div className="opacity-85" style={{ padding: "5px 10px 5px 10px" }} ></div>

                    <div style={{ float: 'left', width: '920px' }}>
                      <div style={{ float: 'left', width: '620px' }} >
                        <label style={{ float: 'left', textAlign: 'left' }} className="opacity-85">Signature of the Vaccine recipients</label>
                        <div className="opacity-100" style={{ borderBottom: ' 1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '350px' }}>-</div>
                      </div>

                      <div style={{ float: 'left', width: '300px' }}>
                        <label className="opacity-85" style={{ float: 'left', textAlign: 'left' }}>Date</label>
                        <div className="opacity-100" style={{ borderBottom: '1px dashed', paddingLeft: '5px', float: 'left', textAlign: 'left', width: '200px' }}>-</div>
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
}

export default VaccineCardForeigners;