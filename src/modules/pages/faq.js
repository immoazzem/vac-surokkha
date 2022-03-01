import React, { Component } from 'react';
import FAQContent from './../components/home/faqContent';
import Layout from './../../../utils/templates/layout/default';


export default class FAQ extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <Layout>
                <FAQContent />
            </Layout>
        );
    }
}