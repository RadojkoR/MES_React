import logo from "../../Assets/logo1.webp";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Nav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    // <nav
    //   className="mainNav navbar navbar-expand-lg position-fixed w-100"
    // >
    //   <div className="container-fluid justify-content-between">
    //     <div className="logoContainer d-flex align-items-center justify-content-center ms-5">
    //       <NavLink to="/">
    //         <img className="logo" src={logo} alt="MES Logo" />
    //       </NavLink>
    //     </div>
    //     <ul className="menuContainer navbar-nav mb-2 mb-lg-0">
    //       <li className="nav-item menuItem">
    //         <NavLink className={({isActive}) =>`menuLink nav-link text-light ${isActive ? 'active' : ''}`} to="/">
    //           Početna
    //         </NavLink>
    //       </li>
    //       <li className="nav-item menuItem">
    //         <NavLink className={({isActive}) =>`menuLink nav-link text-light ${isActive ? 'active' : ''}`} to="/usluge">
    //           Usluge
    //         </NavLink>
    //       </li>
    //       <li className="nav-item menuItem">
    //         <NavLink className={({isActive}) =>`menuLink nav-link text-light ${isActive ? 'active' : ''}`} to="/kontakt">
    //           Kontakt
    //         </NavLink>
    //       </li>

    //       {/* {menuItems.map((item, index) => {
    //           return (
    //             <li key={index} className="menuItem text-light">
    //               {item}
    //             </li>
    //           );
    //         })} */}
    //     </ul>
    //   </div>
    // </nav>

    <nav className="mainNav navbar navbar-expand-lg fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="logoContainer d-flex align-items-center ms-sm-5">
          <NavLink to="/">
            <img className="logo" src={logo} alt="MES Logo" />
          </NavLink>
        </div>

        <button
          className="toggleBtn navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="hamburgerIcon fs-1">
            <RxHamburgerMenu />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="menuContainer navbar-nav ms-auto">
            <li className="menuItem nav-item d-flex justify-content-center">
              <NavLink end className={({ isActive }) => `menuLink nav-link text-light ${isActive ? "active" : ""}` } to="/" >
                Početna
              </NavLink>
            </li>
            <li  className="menuItem nav-item d-flex justify-content-center">
              <NavLink end className={({ isActive }) => `menuLink nav-link text-light ${isActive ? "active" : ""}` } to="/usluge" >
                Usluge
              </NavLink>
            </li>
            <li className="menuItem nav-item d-flex justify-content-center">
              <NavLink end className={({ isActive }) => `menuLink nav-link text-light ${isActive ? "active" : ""}` } to="/projekti" >
                Projekti
              </NavLink>
            </li>
            <li className="menuItem nav-item d-flex justify-content-center">
              <NavLink end className={({ isActive }) => `menuLink nav-link text-light ${isActive ? "active" : ""}` } to="/kontakt" >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
