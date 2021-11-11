import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const RocketList = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  return (
    <ListGroup>
      <h2>Rockets</h2>
      {rockets
        .filter((rocket) => rocket.isReserved)
        .map((rocket) => (
          <ListGroup.Item data-testid="rocket-in-profile" key={rocket.id}>{rocket.rocket_name}</ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default RocketList;
