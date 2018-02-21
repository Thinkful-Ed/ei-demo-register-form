import React from 'react';

import {reduxForm, Field} from 'redux-form';
import Input from './input';
import {register} from './actions';
import {required, notEmpty, email} from './validators';

class RegisterForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(register(values));
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <Field
                    component={Input}
                    element="input"
                    label="Name"
                    type="text"
                    name="name"
                    id="name"
                    validate={[required, notEmpty]}
                />
                <Field
                    component={Input}
                    element="input"
                    label="Email"
                    type="text"
                    name="email"
                    id="email"
                    validate={[required, notEmpty, email]}
                />
                <Field
                    component={Input}
                    element="select"
                    label="Experience"
                    name="experience"
                    id="experiene">
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
