import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Planet from '../assets/planet.png';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md bg-white">
      <div className="container-fluid">
        <img src={Planet} alt="Planet" />
        <span className="navbar-brand px-3">Space Traveler&apos;s Hub</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <AiOutlineMenu className="fs-3" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" activeClassName="active-link" exact>
                Rockets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/missions"
                className="border-end border-dark"
                activeClassName="active-link"
                exact
              >
                Missions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" activeClassName="active-link" exact>
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
