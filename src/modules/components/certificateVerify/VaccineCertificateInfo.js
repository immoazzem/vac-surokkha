import React, { Fragment, useState } from 'react';
import gov_logo from '../../../../assets/images/gov_logo.png';
import mujib100 from '../../../../assets/images/mujib100.png';
import Credit_Logo from './../../../../assets/images/Credit_Logo.png';
import { useTranslation } from 'react-i18next';

const VaccineCertificateInfo = (props) => {

  const [t] = useTranslation();
  const [FontSize, setFontSize] = useState('13px');

  const triggerPrint = () => {
    window.print()
  }

  return (
    <>
      <div className="container">



        <div className="row justify-content-center py-8 px-8 py-md-27 px-md-0">
          <div className="col-md-12 p-sm-0" style={{ fontSize: '15px !important' }}>

            <div className="d-flex justify-content-between">
              <div className="col-md-12 p-sm-0">
                <div className="text-right mb-2 no-print"><button className="btn btn-sm btn-success" onClick={() => triggerPrint()}>Print</button></div>
                <div style={{border: '1px solid #dee2e6'}}>
                  <div className='text-center pt-2 show-mobile no-print'>
                    <img src={gov_logo} width="70" /> 
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <img src={mujib100} width="100" />
                  </div>
                  <div className="row m-0 mt-2">
                    <div className="col-md-3 col-sm-12 text-right hide-mobile">
                      <img src={gov_logo} width="70" />
                    </div>
                    <div className="col-md-6 col-sm-12 text-center" style={{ fontSize: '16px', lineHeight: "70px" }}>
                      <p style={{ lineHeight: '18px', marginBottom: '0', marginTop: '18px' }}>Government of the People's Republic of Bangladesh</p>
                      <p style={{ lineHeight: '18px' }}>Ministry of Health and Family Welfare</p>
                    </div>
                    <div className="col-md-3 col-sm-12 text-left hide-mobile">
                      <img src={mujib100} width="100" />
                    </div>
                  </div>
                  <div className="text-center mt-2 mb-2">
                    <div style={{ fontSize: '30px', color: 'green', fontWeight: "bold" }}>Verification Successful !</div>
                    <div style={{ fontSize: '22px', color: 'green', fontWeight: "350" }}>This Vaccination Certificate is Valid.</div>
                  </div>
                </div>

                <div>
                  <div className="row m-0">
                    <div className='col-md-5 p-0'>
                      <div className='text-center p-2' style={{ textAlign: 'center', backgroundColor: '#eee', fontSize: '14px', fontWeight: "bold", border: '1px solid #dee2e6' }}>Beneficiary Details (টিকা গ্রহণকারীর বিবরণ)</div>
                      
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>Certificate No:<br />সার্টিফিকেট নং:</div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}> {props.data.certificate_no}</div>
                        </div>
                      </div>
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>
                            {
                              props.type == "birthreg" ?
                              <Fragment>
                                Birth Certificate No:<br />জন্ম সনদ নং:
                              </Fragment>
                              :
                              <Fragment>
                                NID Number:<br />জাতীয় পরিচয়পত্র নং:
                              </Fragment>
                            }
                          </div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}> {props.type == "birthreg" ? props.data.birth_reg_no : props.data.nid}</div>
                        </div>
                      </div>
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>Passport No:<br />পাসপোর্ট নং:</div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}>{props.data.passport_no}</div>
                        </div>
                      </div>
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>Country/Nationality:<br />দেশ/জাতীয়তা:</div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}> {props.data.nationality}</div>
                        </div>
                      </div>
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>Name:<br />নাম:</div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}> {props.data.name}</div>
                        </div>
                      </div>
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>Date of Birth:<br />জন্ম তারিখ:</div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}> {props.data.dob}</div>
                        </div>
                      </div>
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>Gender:<br />লিঙ্গ:</div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', textTransform:'capitalize' }}> {props.data.gender}</div>
                        </div>
                      </div>
                    </div>


                    <div className='col-md-7 p-0'>
                      <div className='text-center p-2' style={{ textAlign: 'center', backgroundColor: '#eee', fontSize: '14px', fontWeight: "bold", border: '1px solid #dee2e6' }}>Vaccination Details (টিকা প্রদানের বিবরণ)</div>
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>Date of Vaccination (Dose 1):<br />টিকা প্রদানের তারিখ (ডোজ ১):</div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}> {props.data.dose_given_date_1}</div>
                        </div>
                      </div>
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>Name of Vaccine (Dose 1):<br />টিকার নাম (ডোজ ১):</div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}> {props.data.dose_1_vaccine_name}</div>
                        </div>
                      </div>
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>Date of Vaccination (Dose 2):<br />টিকা প্রদানের তারিখ (ডোজ ২):</div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}>{props.data.dose_given_date_2}</div>
                        </div>
                      </div>
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>Name of Vaccine (Dose 2):<br />টিকার নাম (ডোজ ২):</div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}> {props.data.dose_2_vaccine_name}</div>
                        </div>
                      </div>
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>Vaccination Center:<br />টিকা প্রদানের কেন্দ্র:</div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}> {props.data.center}</div>
                        </div>
                      </div>
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>Vaccinated By:<br />টিকা প্রদানকারী:</div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}> Directorate General of Health Services (DGHS)</div>
                        </div>
                      </div>
                      <div className='row m-0'>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word' }}>Total Doses Given:<br />মোট ডোজ সংখ্যা:</div>
                        </div>
                        <div className='col-6' style={{border:'1px dashed #dee2e6'}}>
                          <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}> {props.data.total_doses_given}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {
                  props.data.booster_dose && Object.keys(props.data.booster_dose).length > 0 ?
                  <Fragment>
                    <div className='text-center p-2' style={{ textAlign: 'center', backgroundColor: '#eee', fontSize: '14px', fontWeight: "bold", border: '1px solid #dee2e6' }}>Other Doses (অন্যান্য ডোজসমূহ):</div>
                    <div className='row m-0'>
                      <div className='col-4' style={{border:'1px dashed #dee2e6'}}>
                        <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', fontWeight: "bold" }}>Dose (ডোজ):</div>
                      </div>
                      <div className='col-4' style={{border:'1px dashed #dee2e6'}}>
                        <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'center', padding: '5px', fontWeight: "bold" }}> Vaccine Name (টিকার নাম):</div>
                      </div>
                      <div className='col-4' style={{border:'1px dashed #dee2e6'}}>
                        <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', fontWeight: "bold" }}> Date (তারিখ):</div>
                      </div>
                    </div>
                
                    {
                      Object.keys(props.data.booster_dose).map((booster_dose_index)=>{
                        return (
                          <div className='row m-0'>
                            <div className='col-4' style={{border:'1px dashed #dee2e6'}}>
                              <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'right', padding: '5px', overflowWrap: 'break-word', textTransform:'capitalize' }}>{booster_dose_index}</div>
                            </div>
                            <div className='col-4' style={{border:'1px dashed #dee2e6'}}>
                              <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'center', padding: '5px', overflowWrap: 'break-word' }}> {props.data.booster_dose[booster_dose_index].vaccine ?? ''}</div>
                            </div>
                            <div className='col-4' style={{border:'1px dashed #dee2e6'}}>
                              <div className='cert-verify-content-div' style={{ fontSize: FontSize, textAlign: 'left', padding: '5px', overflowWrap: 'break-word' }}> {props.data.booster_dose[booster_dose_index].date ?? ''}</div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </Fragment>
                  :
                  ''
                }


                <div className='p-2' style={{ textAlign: 'center', border:'1px solid #dee2e6' }}>For any further assistance, please visit www.dghs.gov.bd or e-mail: info@dghs.gov.bd <br />
                    (প্রয়োজনে www.dghs.gov.bd ওয়েব সাইটে ভিজিট করুন অথবা ইমেইল করুনঃ info@dghs.gov.bd)
                </div>

                <div className='text-center p-2' style={{ textAlign: 'center', backgroundColor: '#eee', fontSize: '14px', fontWeight: "bold", border: '1px solid #dee2e6' }}>In Cooperation With</div>
                <div className='text-center p-2 mb-3 footer-cert-verify-img' style={{ border: '1px solid #dee2e6' }}>
                  <img src={Credit_Logo} alt="ict logo" style={{ maxWidth:'80%' }} />
                </div>

                {/* <table className="table table-bordered">

                  <tr>
                    <td colspan="4" style={{ textAlign: 'center', lineHeight: '50px', borderBottom: 'none' }}>
                      <div className="row">
                        <div className="col-md-3 text-right">
                          <img src={gov_logo} width="70" />
                        </div>
                        <div className="col-md-6 text-center" style={{ fontSize: '16px', lineHeight: "70px" }}>
                          <p style={{ lineHeight: '18px', marginBottom: '0', marginTop: '18px' }}>Government of the People's Republic of Bangladesh</p>
                          <p style={{ lineHeight: '18px' }}>Ministry of Health and Family Welfare</p>
                        </div>
                        <div className="col-md-3 text-left">
                          <img src={mujib100} width="100" />
                        </div>
                      </div>
                    </td>
                  </tr>


                  <tr>
                    <td colspan="4" style={{ textAlign: 'center', lineHeight: '50px', borderTop: 'none' }}>
                      <div style={{ fontSize: '30px', color: 'green', fontWeight: "bold" }}>Verification Successful !</div>
                      <div style={{ fontSize: '22px', color: 'green', fontWeight: "350" }}>This Vaccination Certificate is Valid.</div>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4" style={{ textAlign: 'center', backgroundColor: '#eee' }}>
                      <div style={{ fontSize: '18px', fontWeight: "bold" }}>Certificate Details (সনদের বিবরণ)</div>
                    </td>
                  </tr>

                  <tr>
                    <td width="25%" style={{ fontSize: '14px', textAlign: 'right' }}>Certificate No:<br />সার্টিফিকেট নং:</td>
                    <td width="25%" style={{ fontSize: '14px', textAlign: 'left' }}> {props.data.certificate_no}</td>
                    <td width="25%" style={{ fontSize: '14px', textAlign: 'right' }}>Name:<br />নাম:</td>
                    <td width="25%" style={{ fontSize: '14px', textAlign: 'left' }}> {props.data.name}</td>
                  </tr>

                  <tr>
                    <td width="25%" style={{ fontSize: '14px', textAlign: 'right' }}>NID Number:<br />জাতীয় পরিচয়পত্র নং:</td>
                    <td width="25%" style={{ fontSize: '14px', textAlign: 'left' }}> {props.data.nid}</td>
                    <td width="25%" style={{ fontSize: '14px', textAlign: 'right' }}>Passport No:<br />পাসপোর্ট নং:</td>
                    <td width="25%" style={{ fontSize: '14px', textAlign: 'left' }}>{props.data.passport_no}</td>
                  </tr>

                  <tr>
                    <td colspan="4" style={{ textAlign: 'center' }}>For any further assistance, please visit www.dghs.gov.bd or e-mail: info@dghs.gov.bd <br />
                          (প্রয়োজনে www.dghs.gov.bd ওয়েব সাইটে ভিজিট করুন অথবা ইমেইল করুনঃ info@dghs.gov.bd)
                      </td>
                  </tr>

                  <tr>
                    <td colspan="4" style={{ textAlign: 'center', backgroundColor: '#eee' }}>
                      <div style={{ fontSize: '16px', fontWeight: "bold" }}>In Cooperation With</div>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="4" style={{ textAlign: 'center' }}>
                      <img src={Credit_Logo} alt="ict logo" style={{ height: '60px' }} />
                    </td>
                  </tr>

                </table> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VaccineCertificateInfo;