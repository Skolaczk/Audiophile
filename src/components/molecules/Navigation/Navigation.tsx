import { NavLink } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styles';

const Navigation = () => {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to='/category/headphones'
          >
            headphones
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to='/category/speakers'
          >
            speakers
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to='/category/earphones'
          >
            earphones
          </NavLink>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
