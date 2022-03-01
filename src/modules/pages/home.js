import React, { Component } from 'react';
import HomeContent from './../components/home/content';
import Layout from './../../../utils/templates/layout/default';


export default class Home extends Component {

    componentDidMount() {

    }

    render() {

        return (
            <Layout>
                <HomeContent />
            </Layout>
        );
    }
}