const validateLogin = (values) => {
    let errors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)

    if(!values.email) errors.email = 'Email required'
    else if(!emailRegex) errors.email = 'Invalid Email'

    if(!values.password) {
        errors.password = 'Password required'
    } else if(values.password.length < 6) {
        errors.password = 'Password must be atleast 6 characters'
    }
    

    return errors;
}

export default validateLogin