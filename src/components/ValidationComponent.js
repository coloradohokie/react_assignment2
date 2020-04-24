import React from 'react';

const validationComponent = (props) => {
    return (props.length < 5) ? "Too Short" : "Text Long Enough";
}

export default validationComponent;