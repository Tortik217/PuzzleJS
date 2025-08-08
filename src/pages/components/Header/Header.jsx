import { NavLink } from "react-router-dom";
import '@/pages/components/Header/Header.css'

function Header() {
  return (
    <div className="header d-flex gap-2 align-items-center">
      <h2 className="logo" aria-current="page">
        PuzzleJS
      </h2>
      <ul className="nav nav-underline m-3">
        <li className="nav-item">
          <NavLink className="nav-link" to={"/"}>
            Main
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
