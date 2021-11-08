import PropTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';

const Mission = ({ name, desc }) => (
  <>
    <td className="col-2 fw-bold">{name}</td>
    <td className="col-6">{desc}</td>
    <td className="col-2">
      <Badge bg="secondary">NOT A MEMBER</Badge>
    </td>
    <td className="col-2">
      <Button variant="outline-secondary">Join Mission</Button>
    </td>
  </>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Mission;
