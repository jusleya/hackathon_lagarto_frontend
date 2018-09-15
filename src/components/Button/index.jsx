import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

//CSS
import './css/style.css';

const Button = (props) => (
  props.type === 'submit' ? (
    <div id="button-component">
      <button className={`button active ${props.isLoading ? 'is-loading' : ''}`}>
        {props.children}
      </button>
    </div>
  ) : (
  <div id="button-component">
    <NavLink to={props.link} className="button active">
      {props.children}
    </NavLink>
  </div>
  )
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  link: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default Button;
