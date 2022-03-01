import React, { Component } from 'react';
import Layout from './../../../utils/templates/layout/default';
import AffiliatesContent from "./../components/home/affiliatesContent";


export default class Affiliates extends Component {

    render() {

        return (
            <Layout>
                <AffiliatesContent />
            </Layout>
        );
    }
}