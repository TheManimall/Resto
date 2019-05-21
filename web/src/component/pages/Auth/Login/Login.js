import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import InputField from '../../../common/InputField';
// import PropTypes from 'prop-types';

import './Login.scss';

const Login = props => {
  return (
    <div className="Login">
      <div className="bg-sector">
        <div className="blue" />
      </div>
      <div className="main-sector">
        <div className="container">
          <h1>Вхід</h1>
          <form>
            <Field
              name="email"
              type="email"
              placeholder="Електронна адреса"
              label="Електронна адреса"
              component={InputField}
            />
            <Field
              name="password"
              type="password"
              placeholder="Ваш пароль"
              label="Ваш пароль"
              component={InputField}
            />
            <div className="buttons">
              <Button variant="contained">
                <Link to="/sign-up/">Реєстрація</Link>
              </Button>
              <Button variant="contained" color="primary">
                Вхід
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Registration.propTypes = {};
export default reduxForm({
  form: 'login'
})(Login);
