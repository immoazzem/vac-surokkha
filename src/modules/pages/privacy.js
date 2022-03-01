import React, { Component } from 'react';
import PrivacyContent from './../components/home/privacyContent';
import Layout from './../../../utils/templates/layout/default';


export default class Help extends Component {

    componentDidMount() {
        
    }

    render() {

        return (
            <Layout>
                <PrivacyContent />
            </Layout>
        );
    }
}