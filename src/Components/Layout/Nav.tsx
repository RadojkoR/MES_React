import logo from '../../Assets/logo1.webp';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    // const menuItems: string[] = [
    //     "Početna",
    //     "Usluge",
    //     "Kontakt"
    // ]
    return (
      <nav className="navbar navbar-expand-lg position-fixed w-100">
        <div className="container-fluid justify-content-between">
          <div className="logoContainer">
            <NavLink to="/">
              <img className="logo ms-5" src={logo} alt="MES Logo" />
            </NavLink>
          </div>
          <ul className="menuContainer navbar-nav mb-2 mb-lg-0">
            <li className="nav-item menuItem">
              <NavLink className="nav-link text-light" to="/">
                Početna
              </NavLink>
            </li>
            <li className="nav-item menuItem">
              <NavLink className="nav-link text-light" to="/usluge">
                Usluge
              </NavLink>
            </li>
            <li className="nav-item menuItem">
              <NavLink className="nav-link text-light" to="/kontakt">
                Kontakt
              </NavLink>
            </li>

            {/* {menuItems.map((item, index) => {
              return (
                <li key={index} className="menuItem text-light">
                  {item}
                </li>
              );
            })} */}
          </ul>
        </div>
      </nav>
    );
}