import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

function TypeCheckedComponent({ message }) {
    return (
        <p>Message: {message}</p>
    )
}

TypeCheckedComponent.propTypes = {
    message: PropTypes.string
}