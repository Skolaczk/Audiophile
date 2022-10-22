import { useEffect, useState } from 'react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as CartIcon } from 'assets/icons/icon-cart.svg';
import { ReactComponent as UserIcon } from 'assets/icons/user.svg';
import CategoryList from 'components/organisms/CategoryList/CategoryList';
import {
  HamburgerButton,
  StyledNavigation,
  StyledHeader,
  Wrapper,
  Background,
  IconButton,
  IconLink,
  IconsWrapper,
} from './Header.styles';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from 'hooks/useModal';
import { useAppSelector } from 'hooks/useRedux';
import Navigation from 'components/molecules/Navigation/Navigation';
import { getQuantityProducts } from 'helpers/getQuantityProducts';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const cartList = useAppSelector((state) => state.cartList);
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
        <Navigation />
        <IconsWrapper>
          <IconLink to='/sign-in'>
            <UserIcon />
          </IconLink>
          <IconButton onClick={toggleModal} count={getQuantityProducts(cartList)}>
            <CartIcon />
          </IconButton>
        </IconsWrapper>
      </Wrapper>
      <StyledNavigation isOpen={isOpen}>
        <CategoryList />
      </StyledNavigation>
      <Background isOpen={isOpen} onClick={toggleNavigation} />
    </StyledHeader>
  );
};

export default Header;
