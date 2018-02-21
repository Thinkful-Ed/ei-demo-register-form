import React from 'react';

import {reduxForm, Field} from 'redux-form';

class RegisterForm extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="name">Name</label>
                <Field component="input" type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <Field component="input" type="text" name="email" id="email" />
                <label htmlFor="experience">Experience</label>
                <Field component="select" name="experience" id="experiene">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </Field>
                <button>Register interest</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'register'
})(RegisterForm);
