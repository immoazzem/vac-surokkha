import moment from 'moment';

export const NIDValidator = (nid) => {
    const nid_len = `${nid}`.toString().length;
    if(nid <= 0){
        return false;
    }

    if (nid_len === 10 || nid_len === 13 || nid_len === 17) {
        return true;
    }
    return false;
}

export const PhoneValidator = (phone) => {
    const phone_len = `${phone}`.toString().length;
    if (phone_len === 11 && phone.substring(0,2) === "01") {
        return true;
    }
    return false;
}


export const Date18YearValidator = (date) => {

    const today = moment();
    const selected_date = moment(date);

    if (today.diff(selected_date, 'years') >= 18) {
        return true;
    }
    return false;
}