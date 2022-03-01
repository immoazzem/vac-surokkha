import React, { Component } from "react";
import Layout from "../../../utils/templates/layout/default";
import CertificateVerifyContent from "../components/BirthRegCertificateVerify/CertificateVerifyContent";

export default class ForeignerCertificateVerify extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <div class="su-main-reg-form-area">
          <CertificateVerifyContent />
        </div>
      </Layout>
    );
  }
}
