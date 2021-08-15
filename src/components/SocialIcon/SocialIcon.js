import React from 'react';
import PropTypes from 'prop-types';

const SocialIcon = props => (<i className={`fab fa-${props.iconName}`}></i>);

SocialIcon.propTypes = {
    iconName: PropTypes.string,
};

export default SocialIcon;