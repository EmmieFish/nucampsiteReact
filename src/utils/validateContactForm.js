export const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = "Required";
    } else if (values.firstName.length < 2) {
        errors.firstName = "Must be at least 2 characters.";
    } else if (values.firstName.length > 15) {
        errors.firstName = "Must be less than 16 characters.";
    }

    if (!values.lastName) {
        errors.lastName = "Required";
    } else if (values.lastName.length < 2) {
        errors.lastName = "Must be at least 2 characters.";
    } else if (values.lastName.length > 15) {
        errors.lastName = "Must be less than 16 characters.";
    }

    const reg = /^\d+$/;
    if (!values.phoneNum) {
        errors.phoneNum = "Required";
    } else if (!reg.test(values.phoneNum) && !(values.phoneNum.length === 10)) {
        errors.phoneNum = "The phone number should contain 10 numbers and only numbers.";
    } else if (!reg.test(values.phoneNum)) {
        errors.phoneNum = "The phone number should contain only numbers.";
    } else if (!(values.phoneNum.length === 10)) {
        errors.phoneNum = "The phone number should contain 10 numbers.";
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (!values.email.includes("@" && ".")) {
        errors.email = "Invalid Email address";
    }

    return errors;
};
