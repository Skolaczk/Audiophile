import { useEffect, useState } from 'react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as CartIcon } from 'assets/icons/icon-cart.svg';
import { ReactComponent as UserIcon } from 'assets/icons/user.svg';
import CategoryList from 'components/organisms/CategoryList/CategoryList';
import {
  DesktopNavigation,
  HamburgerButton,
  Navigation,
  StyledHeader,
  Wrapper,
  Background,
  IconButton,
  IconLink,
  IconsWrapper,
} from './Header.styles';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useModal } from 'hooks/useModal';
import { useAppSelector } from 'hooks/useRedux';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const cartListLength = useAppSelector((state) => state.cartList.length);
  const { toggleModal } = useModal();

  const toggleNavigation = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <StyledHeader>
      <Wrapper>
        <HamburgerButton isOpen={isOpen} onClick={toggleNavigation}>
          <div />
          <div />
          <div />
        </HamburgerButton>
        <Link to='/'>
          <Logo />
        </Link>
        <DesktopNavigation>
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
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                to='/speakers'
              >
                speakers
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                to='/earphones'
              >
                earphones
              </NavLink>
            </li>
          </ul>
        </DesktopNavigation>
        <IconsWrapper>
          <IconLink to='/sign-in'>
            <UserIcon />
          </IconLink>
          <IconButton onClick={toggleModal} count={cartListLength}>
            <CartIcon />
          </IconButton>
        </IconsWrapper>
      </Wrapper>
      <Navigation isOpen={isOpen}>
        <CategoryList />
      </Navigation>
      <Background isOpen={isOpen} onClick={toggleNavigation} />
    </StyledHeader>
  );
};

export default Header;
