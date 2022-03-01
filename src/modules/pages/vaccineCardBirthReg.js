import React from "react";
import BirthRegCard from "../components/vaccine/birth_reg_card";
import Layout from "../../../utils/templates/layout/default";

const vaccineCardForeigners = () => {
  return (
    <Layout>
      <div class="su-main-reg-form-area">
        <BirthRegCard />
      </div>
    </Layout>
  );
};

export default vaccineCardForeigners;
