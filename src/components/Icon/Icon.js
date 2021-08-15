import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (<i className={`fas fa-${props.iconName}`}></i>);

Icon.propTypes = {
    iconName: PropTypes.string,
};

export default Icon;