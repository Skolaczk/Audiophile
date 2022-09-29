import { useEffect, useState } from 'react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as CartIcon } from 'assets/icons/icon-cart.svg';
import CategoryList from 'components/organisms/CategoryList/CategoryList';
import { HamburgerButton, Navigation, StyledHeader } from './Header.styles';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <StyledHeader>
      <HamburgerButton isOpen={isOpen} onClick={toggleNavigation}>
        <div />
        <div />
        <div />
      </HamburgerButton>
      <Link to='/'>
        <Logo />
      </Link>
      <button>
        <CartIcon />
      </button>
      <Navigation isOpen={isOpen}>
        <CategoryList />
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
