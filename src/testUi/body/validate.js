export default function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.name) {
        errors.name = 'Full Name is required';
    } else if (values.name.length < 8) {
        errors.name = 'Full Name must be 8 or more characters';
    }
    return errors;
}
