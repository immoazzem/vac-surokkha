import React, { Component } from "react";
import Layout from "../../../utils/templates/layout/default";
import CertificateDownloadBirthReg from "../components/certificate/CertificateDownloadBirthReg";

export default class certificateBirthReg extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <div class="su-main-reg-form-area">
          <CertificateDownloadBirthReg />
        </div>
      </Layout>
    );
  }
}
