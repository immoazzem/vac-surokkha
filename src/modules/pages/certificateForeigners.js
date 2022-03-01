import React, { Component } from 'react';
import Layout from '../../../utils/templates/layout/default';
import CertificateDownloadForeigners from "../components/certificate/CertificateDownloadForeigners";


export default class certificateForeigners extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Layout>
                <div class="su-main-reg-form-area">
                    <CertificateDownloadForeigners />
                </div>
            </Layout>
        );
    }
}