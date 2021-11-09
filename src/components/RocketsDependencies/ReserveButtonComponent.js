import React from "react";
import PropTypes from 'prop-types';
import { Button }  from "react-bootstrap";


const ReserveButton = ({ onClickEvent, reserved, rocketID }) => {
  let text; let variant;
  if (reserved){
    text = "Cancel Reservation"
    variant = "secondary"
  } else {
    text = "Reserve"
    variant = "primary"
  }
  return (
    <Button
      variant={variant}
      onClick={() => onClickEvent(rocketID)}
    >
      {text}
    </Button>

  )
    
};

ReserveButton.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  reserved: PropTypes.bool.isRequired,
  rocketID: PropTypes.number.isRequired
};

export default ReserveButton;