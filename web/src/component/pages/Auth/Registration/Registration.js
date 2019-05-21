import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import InputField from '../../../common/InputField';
import { signUp } from '../../../../store/actions/authActions';
// import PropTypes from 'prop-types';

import './Registration.scss';

let Registration = ({ signUp, handleSubmit }) => {
  // const _onSubmit = (data) => signUp(data);

  return (
    <div className="Registration">
      <div className="main-sector">
        <div className="container">
          <h1>Реєстрація</h1>
          <form onSubmit={handleSubmit(signUp)}>
            <Field
              name="name"
              type="text"
              placeholder="Назва закладу"
              label="Назва закладу"
              component={InputField}
            />
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
                <Link to="/">Назад</Link>
              </Button>
              <Button type="submit" variant="contained" color="secondary">
                Підтвердити
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-sector">
        <div className="red" />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUp: data => dispatch(signUp(data))
});

Registration = connect(
  null,
  mapDispatchToProps
)(Registration);

// Registration.propTypes = {};
export default reduxForm({
  form: 'registration'
})(Registration);
