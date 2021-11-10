import PropTypes from 'prop-types';
import React from 'react';
import { Badge, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleReservationAction } from '../../redux/rockets/rockets';
import ReserveButton from './ReserveButtonComponent';

const visibleBadge = {
  display: 'inline-block',
};

const invisibleBadge = {
  display: 'none',
};

const Rocket = ({ rocketData }) => {
  const badgevisibility = rocketData.isReserved ? visibleBadge : invisibleBadge;
  const dispatch = useDispatch();
  const reserveToggle = (reservation) => {
    dispatch(toggleReservationAction(reservation));
  };
  return (
    <ListGroup.Item>
      <Row>
        <Col xs={2} style={{ width: 'fit-content' }}>
          <Image width="300" height="180" src={rocketData.flickr_images[0]} rounded />
        </Col>
        <Col>
          <h3>{rocketData.rocket_name}</h3>
          <Badge style={badgevisibility} variant="primary" pill>
            Reserved
          </Badge>
          {rocketData.description}
          <br />
          <br />
          <ReserveButton
            reserved={rocketData.isReserved}
            rocketID={rocketData.id}
            onClickEvent={(id) => reserveToggle(id)}
          />
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

Rocket.propTypes = {
  rocketData: PropTypes.shape({
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    isReserved: PropTypes.bool,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

Rocket.defaultProps = {
  rocketData: {
    isReserved: false,
    description: '',
  },
};

export default Rocket;
