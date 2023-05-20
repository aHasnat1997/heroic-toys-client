import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import logo from "../assets/favicon.png"



const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="w-full my-60 text-8xl flex justify-center">
      <img src={logo} className='w-40 animate-ping' />
    </div>
  }

  if (user) {
    return children;
  }

  return <Navigate to='/log-in' state={{ from: location }} replace />;

}
export default ProtectedRoute;
