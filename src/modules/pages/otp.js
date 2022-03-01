import React, { Component } from 'react';
import EnrollFormOtpVerify from './../components/enroll/otp_verify';
import Layout from './../../../utils/templates/layout/default';


export default class Otp extends Component {

    componentDidMount() {
        console.log('componentDidMount - OTP')
    }


    render() {

        return (
            <Layout>

                <br/>
                <br/>

                <EnrollFormOtpVerify />

                <br/>
                <br/>

            </Layout>
        );
    }
}
