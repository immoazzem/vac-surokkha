import React, { Component } from 'react';
import Layout from '../../../utils/templates/layout/default';
import CertificateVerifyOnlineContent from "../components/certificateVerifyOnline/CertificateVerifyContent";


export default class CertificateVerifyOnline extends Component {

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