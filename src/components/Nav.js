import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BiMenuAltRight } from 'react-icons/bi';
import SideMenu from './SideMenu';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  return (
    <>
      <Wrapper>
        <h1>my portfolio</h1>
        <div className="navbar">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Cotact
          </NavLink>
        </div>
        <div className="hiddenMenu" onClick={toggleMenu}>
          <BiMenuAltRight />
        </div>
      </Wrapper>
      <SideMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </>
  );
};

const Wrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 80px;
  h1 {
    font-size: 35px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--menu);
  }
  .navbar a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    margin: 20px;
    letter-spacing: 1px;
    transition: 0.3s ease-out;
    :hover {
      color: var(--menu-active);
    }
  }
  .hiddenMenu {
    display: none;
    font-size: 40px;
    cursor: pointer;
    transition: 0.3s ease-out;
    z-index: 101;
    :hover {
      color: var(--menu-active);
    }
  }
  @media (max-width: 992px) {
    .navbar {
      display: none;
    }
    .hiddenMenu {
      display: block;
    }
  }
  @media (max-width: 414px) {
    h1 {
      font-size: 25px;
    }
  }
`;

export default Nav;
