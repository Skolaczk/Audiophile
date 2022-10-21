import { NavLink } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to='/headphones'
          >
            headphones
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/speakers'>
            speakers
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/earphones'>
            earphones
          </NavLink>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
