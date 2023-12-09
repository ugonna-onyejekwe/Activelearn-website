import "./navbar.scss";
import { icons } from "../info";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Nav_bar = () => {
  const [isactive, setIsactive] = useState(false);
  const [menuactive, setMenuactive] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 200 ? setIsactive(true) : setIsactive(false);
  });

  const activate_menu = () => {
    setMenuactive(!menuactive);
  };

  return (
    <>
      <nav className={isactive ? "active" : ""}>
        <div className="nav_container container">
          <NavLink to="/">
            <div className="logo">
              {icons.logo} active <span>learn</span>
            </div>
          </NavLink>

          <div className={menuactive ? "navigators active" : "navigators"}>
            <div className="menu_btn close" onClick={activate_menu}>
              {icons.close}
            </div>

            <div className="links">
              <NavLink
                to="/"
                activeClassName="active"
                exact
                onClick={activate_menu}
              >
                home
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="active"
                onClick={activate_menu}
              >
                about us
              </NavLink>
              <NavLink
                to="/courses"
                activeClassName="active"
                onClick={activate_menu}
              >
                courses
              </NavLink>
              <NavLink
                to="/teachers"
                activeClassName="active"
                onClick={activate_menu}
              >
                teachers
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="active"
                onClick={activate_menu}
              >
                contact us
              </NavLink>
            </div>

            <div className="sign_in_btn">
              <NavLink to="/sign_up" onClick={activate_menu}>
                <button>sign in</button>
              </NavLink>
            </div>
          </div>

          <div className="menu_btn menu" onClick={activate_menu}>
            {icons.menu}
          </div>
        </div>
        <div
          className={menuactive ? "overlay active " : "overlay"}
          onClick={activate_menu}
        ></div>
      </nav>
    </>
  );
};
