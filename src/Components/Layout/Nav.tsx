import logo from '../../Assets/logo1.webp';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';


export default function Nav() {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <nav
      className="mainNav navbar navbar-expand-lg position-fixed w-100"
    >
      <div className="container-fluid justify-content-between">
        <div className="logoContainer d-flex align-items-center justify-content-center ms-5">
          <NavLink to="/">
            <img className="logo" src={logo} alt="MES Logo" />
          </NavLink>
        </div>
        <ul className="menuContainer navbar-nav mb-2 mb-lg-0">
          <li className="nav-item menuItem">
            <NavLink className={({isActive}) =>`menuLink nav-link text-light ${isActive ? 'active' : ''}`} to="/">
              Početna
            </NavLink>
          </li>
          <li className="nav-item menuItem">
            <NavLink className={({isActive}) =>`menuLink nav-link text-light ${isActive ? 'active' : ''}`} to="/usluge">
              Usluge
            </NavLink>
          </li>
          <li className="nav-item menuItem">
            <NavLink className={({isActive}) =>`menuLink nav-link text-light ${isActive ? 'active' : ''}`} to="/kontakt">
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