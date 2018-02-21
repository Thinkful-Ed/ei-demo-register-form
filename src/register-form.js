import React from 'react';

import {reduxForm, Field} from 'redux-form';
import {required, notEmpty, email} from './validators';

class RegisterForm extends React.Component {
    onSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="name">Name</label>
                <Field
                    component="input"
                    type="text"
                    name="name"
                    id="name"
                    validate={[required, notEmpty]}
                />
                <label htmlFor="email">Email</label>
                <Field
                    component="input"
                    type="text"
                    name="email"
                    id="email"
                    validate={[required, notEmpty, email]}
                />
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
