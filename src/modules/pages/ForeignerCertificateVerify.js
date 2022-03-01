import React, { Component } from 'react';
import Layout from '../../../utils/templates/layout/default';
import ForeignerCertificateVerifyContent from "../components/foreignerCertificateVerify/CertificateVerifyContent";


export default class ForeignerCertificateVerify extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Layout>
                <div class="su-main-reg-form-area">
                    <ForeignerCertificateVerifyContent />
                </div>
            </Layout>
        );
    }
}