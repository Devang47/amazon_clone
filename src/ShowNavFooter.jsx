import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { useLocation } from 'react-router-dom';

function ShowNavFooter({ children }) {
  const location = useLocation();
  const noNavbarRoutes = ['/signin', '/register'];
  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      {showNavbar && <Footer />}
    </>
  );
}

export default ShowNavFooter;