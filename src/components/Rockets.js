import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsFunction } from '../redux/rockets/rockets';
import Rocket from './RocketsDependencies/Rocket';

let isLoaded = false;

const RocketsContainer = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(getRocketsFunction());
      isLoaded = true;
    }
  }, [dispatch]);

  return (
    <div className="rockets">
      <ListGroup>
        {rockets.map((rocketObject) => (
          <Rocket key={rocketObject.id} rocketData={rocketObject} />
        ))}
      </ListGroup>
    </div>
  );
};

export default RocketsContainer;
