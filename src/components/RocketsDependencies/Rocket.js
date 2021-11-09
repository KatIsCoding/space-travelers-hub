
import React from "react";
import PropTypes from 'prop-types';
import { ListGroup, Badge, Image, Col, Row }  from "react-bootstrap";
import { useDispatch , useSelector } from "react-redux";
import ReserveButton from "./ReserveButtonComponent";
import { toggleReservationAction } from "../../redux/rockets/rockets";

const visibleBadge = {
  display: "inline-block",
}

const invisibleBadge = {
  display: "none",
}

const Rocket = ({ rocketData }) => {
  const reservations = useSelector(state => state.rocketsReducer.rockets);
  const thisReservation = reservations.find(reservation => reservation.id === rocketData.id);
  const badgevisibility = thisReservation.isReserved ? visibleBadge : invisibleBadge;
  const dispatch = useDispatch();
  const reserveToggle = (reservation) => {
    dispatch(toggleReservationAction(reservation));
  };
    return (

      
    <ListGroup.Item>
    <Row>
    <Col xs={2} style={{width: "fit-content"}}>
      <Image width="300" height="180" src={rocketData.flickr_images[0]} rounded />
    </Col>
    <Col>
      
    <h3>{rocketData.rocket_name}</h3>
    <Badge style={badgevisibility} variant="primary" pill>
      Reserved
    </ Badge>
    {rocketData.description}
    <br/><br/>
    <ReserveButton reserved={thisReservation.isReserved} rocketID={rocketData.id} onClickEvent={(id) => reserveToggle(id)}/>
    </Col>
    </Row>
    </ListGroup.Item>
    )
    }




Rocket.propTypes = {
rocketData: PropTypes.shape({
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
}).isRequired,
};

export default Rocket;