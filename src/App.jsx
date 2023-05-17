import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/navbar/Nav'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
