import { FaBars, FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="bg-base-100 sticky z-50 top-0">
      <div className="max-w navbar">
        <div className="flex-1">
          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn btn-lg rounded-full">
              <FaBars className="mr-4" /> ALL CATEGORIES <FaAngleDown className="ml-2" />
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-secondary rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-8 text-xl">
            <NavLink to='/' className='font-bold hover:text-primary'>Home</NavLink>
            <NavLink to='/all-toys' className='font-bold hover:text-primary'>All Toys</NavLink>
            <NavLink to='/' className='font-bold hover:text-primary'>My Toys</NavLink>
            <NavLink to='/' className='font-bold hover:text-primary'>Add A Toy</NavLink>
            <NavLink to='/' className='font-bold hover:text-primary'>Blogs</NavLink>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default NavMenu;
