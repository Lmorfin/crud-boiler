/* eslint-disable no-undef */
import { Link } from "react-router-dom";
// import { AiOutlineShopping } from "react-icons/ai";

import { AiOutlineShopping } from "react-icons/ai";
const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>CRUD Demo</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
