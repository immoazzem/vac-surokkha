import React, { Component } from 'react';
import HelpContent from './../components/home/helpContent';
import Layout from './../../../utils/templates/layout/default';


export default class Help extends Component {

    componentDidMount() {
        
    }

    render() {

        return (
            <Layout>
                <HelpContent />
            </Layout>
        );
    }
}