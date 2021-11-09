import { Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import React from 'react';
import RocketList from './RocketsDependencies/ProfileComponent';

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const myMissions = missions.filter((mission) => mission.reserved);


  return (
    <Container fluid="md">
      <Row>
        <Col xs={6}>
          <h2>My Missions</h2>
          <Table bordered>
            <tbody>
              {myMissions.map((mission) => {
                const { mission_id: id, mission_name: name } = mission;
                return (
                  <tr key={id}>
                    <td>{name}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <Col xs={6}>
          <RocketList />
        </Col>
      </Row>
    </Container>
    
  );
};

export default Profile;
