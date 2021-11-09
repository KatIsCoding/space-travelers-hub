
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { ListGroup, Badge, Image, Button, Col, Row }  from "react-bootstrap";
import { getRocketsFunction } from "../redux/rockets/rockets";


let isLoaded = false;

const Rocket = ({ rocketData }) => (
    <ListGroup.Item>
    <Row>
    <Col xs={2}>
      <Image width="300" height="180" src={rocketData.flickr_images[0]} rounded />
    </Col>
    <Col>
    
    <h3>{rocketData.rocket_name}</h3>
    <Badge variant="primary" pill>
      Dummy Badge
    </ Badge>
    {rocketData.description}
    <br/><br/>
    <Button variant="primary">
      Reserve rocket
    </Button>
    </Col>
    </Row>
  </ListGroup.Item>
  )


Rocket.propTypes = {
  rocketData: PropTypes.shape({
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const RocketsContainer = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(state => state.rocketsReducer);
  
  useEffect(() => {
    if (!isLoaded) {

    dispatch(getRocketsFunction());
    isLoaded = true;
    }
  }, [dispatch]);

  return (
    <div className="rockets">
      <ListGroup>
        {
          rockets.map(rocketObject => (
           <Rocket key={rocketObject.id} rocketData={rocketObject} />
          )
          ) 
        }
      </ListGroup>
    </div>
  )
  
}
    

export default RocketsContainer;