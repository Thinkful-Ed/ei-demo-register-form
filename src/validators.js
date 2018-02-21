export const required = value =>
    value !== undefined ? undefined : 'This field is required';

export const notEmpty = value =>
    value.trim() !== '' ? undefined : 'This field must contain some text';

export const email = value =>
    /\S+@\S+/.test(value)
        ? undefined
        : 'This field must contain a valid email address';
