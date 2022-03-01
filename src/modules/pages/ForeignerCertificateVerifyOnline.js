import React, { Component } from 'react';
import Layout from '../../../utils/templates/layout/default';
import CertificateVerifyOnlineContent from "../components/foreignerCertificateVerifyOnline/CertificateVerifyContent";


export default class ForeignerCertificateVerifyOnline extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Layout>
                <div class="su-main-reg-form-area">
                    <CertificateVerifyOnlineContent />
                </div>
            </Layout>
        );
    }
}