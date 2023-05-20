import { useState } from "react";
import NavMenu from "./NavMenu";
import TopNav from "./TopNav";


const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav>
      <TopNav isOpen={isOpen} setOpen={setOpen} />
      <NavMenu isOpen={isOpen} setOpen={setOpen} />
      <hr />
    </nav>
  );
};

export default Nav;
