import React from 'react';

import {reduxForm} from 'redux-form';

class RegisterForm extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="experience">Experience</label>
                <select name="experience" id="experiene">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                <button>Register interest</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'register'
})(RegisterForm);
