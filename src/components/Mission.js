import PropTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Mission = ({ id, name, desc, reserved }) => {
  const dispatch = useDispatch();

  return (
    <>
      <td className="col-2 fw-bold">{name}</td>
      <td className="col-6">{desc}</td>
      <td className="col-2">
        {!reserved && <Badge bg="secondary">NOT A MEMBER</Badge>}
        {reserved && <Badge bg="primary">Active Member</Badge>}
      </td>
      <td className="col-2">
        {!reserved && (
          <Button variant="outline-secondary" onClick={() => dispatch(joinMission(id))}>
            Join Mission
          </Button>
        )}
        {reserved && (
          <Button variant="outline-danger" onClick={() => dispatch(leaveMission(id))}>
            Leave Mission
          </Button>
        )}
      </td>
    </>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
