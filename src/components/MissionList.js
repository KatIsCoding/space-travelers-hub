import { useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setMissionsAsync } from '../redux/ducks/missions';
import Mission from './Mission';

let isFirstTime = true;

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer.missions);

  useEffect(() => {
    if (isFirstTime) {
      dispatch(setMissionsAsync());
      isFirstTime = false;
    }
  }, [dispatch]);

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
                <th>{}</th>
              </tr>
            </thead>
            <tbody>
              {missions.map((mission) => {
                const { mission_id: id, mission_name: name, description: desc } = mission;
                return (
                  <tr key={id}>
                    <Mission name={name} desc={desc} />
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Missions;
