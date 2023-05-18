import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
// import { FaShoppingCart } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className="bg-base-100">
      <div className="max-w navbar">
        <div className="flex-1">
          <Link to='/'>
            <img className="w-[10rem]" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex-none">
          <Link className="btn btn-secondary btn-lg text-2xl font-extrabold">Sing in</Link>
          {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-lg btn-ghost btn-circle">
            <div className="indicator">
              <FaShoppingCart className="text-4xl" />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div> */}
        </div>
      </div>
    </div>

  );
};

export default TopNav;
