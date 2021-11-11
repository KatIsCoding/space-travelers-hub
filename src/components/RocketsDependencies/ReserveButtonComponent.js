import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

const ReserveButton = ({ onClickEvent, reserved, rocketID }) => {
  let text;
  let variant;
  if (reserved) {
    text = 'Cancel Reservation';
    variant = 'secondary';
  } else {
    text = 'Reserve';
    variant = 'primary';
  }
  return (
    <Button variant={variant} onClick={() => onClickEvent(rocketID)}>
      {text}
    </Button>
  );
};

ReserveButton.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  reserved: PropTypes.bool,
  rocketID: PropTypes.number.isRequired,
};

ReserveButton.defaultProps = {
  reserved: false,
};

export default ReserveButton;
