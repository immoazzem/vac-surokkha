import React from 'react';
import ForeignerCard from '../components/vaccine/foreigner_card';
import Layout from '../../../utils/templates/layout/default';


const vaccineCardForeigners = () => {

    return (
        <Layout>
            <div class="su-main-reg-form-area">
                <ForeignerCard />
            </div>
        </Layout>
    );
}

export default vaccineCardForeigners;