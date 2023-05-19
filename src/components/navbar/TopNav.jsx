import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import userIcon from '../../assets/icons/profile-icon.jpg';

const TopNav = () => {
  const { user, singOutUser } = useContext(AuthContext);
  return (
    <div className="bg-base-100">
      <div className="max-w navbar">
        <div className="flex-1">
          <Link to='/'>
            <img className="w-[10rem]" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex-none">
          {
            user ? <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={user?.displayName}>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL ? user?.photoURL : userIcon} />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile<span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><button onClick={singOutUser} className="btn btn-secondary">Logout</button></li>
              </ul>
            </div>
              :
              <Link to='/log-in' className="btn btn-secondary btn-lg text-2xl font-extrabold">Log in</Link>
          }
        </div>
      </div>
    </div>

  );
};

export default TopNav;
