import "./footer.scss";

import { icons } from "../info";

export const Footer = () => {
  return (
    <footer>
      <div className="footer_container container">
        <div className="box ">
          <div className="logo">
            {icons.logo}
            active <span>learn</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            necessitatibus.
          </p>

          <div className="socail">
            <span>{icons.facebook}</span>
            <span>{icons.twitter}</span>
            <span>{icons.youtube}</span>
          </div>
        </div>

        <div className="box">
          <h3>about</h3>
          <div className="quick_links">
            <a href="#">about us</a>
            <a href="#">courses</a>
            <a href="#">instuctors</a>
          </div>
        </div>

        <div className="box">
          <h3>our services</h3>

          <div className="quick_links">
            <a href="#">tutorial</a>
            <a href="#">library</a>
            <a href="#">news & blog</a>
          </div>
        </div>

        <div className="box">
          <h3>company</h3>
          <div className="quick_links">
            <a href="#">career</a>
            <a href="#">contact us</a>
            <a href="#">courses</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
