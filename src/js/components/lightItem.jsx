import PropTypes from "prop-types";
import React from "react";

const LightItem = props => {
    return (
        <div onClick={props.event} className={props.styles}></div>
    )
};

LightItem.propTypes = {
    styles: PropTypes.string,
    event: PropTypes.func
};

export default LightItem;