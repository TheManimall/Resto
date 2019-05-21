import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputField = ({
  input,
  label,
  type,
  meta: { touched, error },
  ...custom
}) => (
  <div className="InputField">
    <TextField
      {...input}
      {...custom}
      label={`${label}:`}
      type={type}
      errorText={touched && error}
    />
  </div>
);

export default InputField;
