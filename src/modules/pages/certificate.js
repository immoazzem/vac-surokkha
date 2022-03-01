import React, { Component } from 'react';
import Layout from './../../../utils/templates/layout/default';
import CertificateContent from "../components/certificate/certificateContent";


export default class Help extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Layout>
                <div class="su-main-reg-form-area">
                    <CertificateContent />
                </div>
            </Layout>
        );
    }
}