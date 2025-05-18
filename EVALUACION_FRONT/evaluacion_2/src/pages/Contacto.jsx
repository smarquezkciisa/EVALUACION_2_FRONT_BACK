import Header from '../components/Header';
import Footer from '../components/Footer';
import Formulario from '../components/Formulario';
import { useLocation,useNavigate } from 'react-router-dom';


const Contacto = () => (
  <>
    <Header />
    <Formulario />
    <Footer />
  </>
);

export default Contacto;