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
        <Badge bg={reserved ? 'primary' : 'secondary'}>
          {reserved ? 'Active Member' : 'NOT A MEMBER'}
        </Badge>
      </td>
      <td className="col-2">
        <Button
          variant={reserved ? 'outline-danger' : 'outline-secondary'}
          onClick={() => dispatch(reserved ? leaveMission(id) : joinMission(id))}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </Button>
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
