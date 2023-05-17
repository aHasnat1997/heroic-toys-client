import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/navbar/Nav';
import Footer from './components/footer/Footer';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {

  return (
    <main className='relative'>
      <Nav />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
