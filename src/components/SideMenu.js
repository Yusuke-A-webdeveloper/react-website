import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SideMenu = ({ showMenu, toggleMenu }) => {
  return (
    <Wrapper style={showMenu ? { left: '0' } : { left: '-100%' }}>
      <div className="hidden-navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          onClick={toggleMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          onClick={toggleMenu}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
          onClick={toggleMenu}
        >
          Cotact
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-out;
  z-index: 100;
  .hidden-navbar {
    display: flex;
    flex-direction: column;
    gap: 20px;
    a {
      text-decoration: none;
      font-size: 25px;
      text-transform: uppercase;
    }
  }
`;

export default SideMenu;
