import React from 'react';

const validateCreateLink = values => {
    let errors = {};
    const validEmail = /^(ftp|http|https):\/\/[^ "]+$/.test(values.url)

    if(!values.description) errors.description = 'Email required'
    else if(values.description.length < 10) {
        errors.description = 'Description must be at least 10 characters'
    }

    if(!values.url) {
        errors.url = 'URL required'
    } else if(!validEmail) {
        errors.url = 'URL must be valid'
    }
    

    return errors;
}

export default validateCreateLink;