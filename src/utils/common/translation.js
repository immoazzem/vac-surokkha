import i18next from "i18next";
import bn from "./../../assets/translations/bn.json";
import en from "./../../assets/translations/en.json";
import ManualBanglaPDF from "../../assets/files/Surokkha_Web_Portal_User_Manual.pdf";
import ManualEnglishPDF from "../../assets/files/Surokkha_Web_Portal_User_Manual_English.pdf";
import { divisions, districts, upazillas, unions, ward } from './../../data/enroll';
import { divisions_en, districts_en, upazillas_en, unions_en, ward_en } from './../../data/enroll_en';

export const getLanguage = () => {
    const language = localStorage.getItem("language");
    return language ? language : "bn";
}

export const changeLanguage = (language) => {
    i18next.changeLanguage(language);
    localStorage.setItem("language", language);
}

export const getManualPDF = () => {
    var language = localStorage.getItem("language");
    language =  language ? language : "bn";

    if(language === 'bn'){
        return ManualBanglaPDF;
    }else{
        return ManualEnglishPDF;
    }
}


export const getAddresses = () => {
    var language = localStorage.getItem("language");
    language =  language ? language : "bn";

    if(language === 'bn'){
        return [divisions_en, districts_en, upazillas_en, unions_en, ward_en];
    }else{
        return [divisions, districts, upazillas, unions, ward];
    }
}

i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: getLanguage(), // language to use
    resources: {
        en: {
            translation: en 
        },
        bn:  {
            translation: bn 
        }
    },
});

export default i18next;