import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/navbar/Nav';
import Footer from './components/footer/Footer';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'aos/dist/aos.css'
import StayTop from './components/StayTop';

function App() {
  return (
    <main className='min-h-screen flex flex-col'>
      <StayTop />
      <Nav />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
