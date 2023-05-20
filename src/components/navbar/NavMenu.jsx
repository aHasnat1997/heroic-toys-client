import { useEffect, useState } from "react";
import { FaBars, FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavMenu = ({ isOpen, setOpen }) => {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    const options = { method: 'GET' };

    fetch('https://heroic-toys-server.vercel.app/categories', options)
      .then(response => response.json())
      .then(response => setCategories(response))
      .catch(err => console.error(err));
  }, [])


  return (
    <div className={`bg-base-100 h-screen lg:h-full fixed top-0 z-30 duration-500 lg:sticky
    ${isOpen ? 'right-0' : '-right-96'}`}>
      <div className="max-w navbar flex-col lg:flex-row">
        <div className="flex-1">
          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn btn-lg rounded-full">
              <FaBars className="mr-4" /> ALL CATEGORIES <FaAngleDown className="ml-2" />
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-secondary rounded-box w-full">
              {
                categories.map(category => <li key={category._id}>
                  <a className="uppercase">{category.category}</a>
                </li>)
              }
            </ul>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu flex-col lg:flex-row menu-horizontal gap-8 text-xl">
            <NavLink to='/'
              className={({ isActive }) => isActive ? "text-primary" : ""}>
              <span className="font-bold hover:text-primary">Home</span>
            </NavLink>
            <NavLink to='/all-toys'
              className={({ isActive }) => isActive ? "text-primary" : ""}>
              <span className="font-bold hover:text-primary">All Toys</span>
            </NavLink>
            <NavLink to='/my-toys'
              className={({ isActive }) => isActive ? "text-primary" : ""}>
              <span className="font-bold hover:text-primary">My Toys</span>
            </NavLink>
            <NavLink to='/add-toy'
              className={({ isActive }) => isActive ? "text-primary" : ""}>
              <span className="font-bold hover:text-primary">Add A Toy</span>
            </NavLink>
            <NavLink to='/blogs'
              className={({ isActive }) => isActive ? "text-primary" : ""}>
              <span className="font-bold hover:text-primary">Blogs</span>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default NavMenu;
