import React, { Component } from 'react';
import TermsOfServiceContent from '../components/home/TermsOfServiceContent';
import Layout from '../../../utils/templates/layout/default';


export default class TermsOfService extends Component {

    componentDidMount() {

    }

    render() {

        return (
            <Layout>
                <TermsOfServiceContent />
            </Layout>
        );
    }
}