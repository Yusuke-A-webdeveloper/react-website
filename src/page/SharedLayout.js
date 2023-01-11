import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import StyledNavbar from '../components/Nav';

const Home = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
