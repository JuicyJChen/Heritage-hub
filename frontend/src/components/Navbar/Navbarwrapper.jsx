import React from "react";
import { Link } from "react-router-dom";
import pics from "./pic1.png"
import style from "./Navbar.module.css";

const Navbarwrapper = () => {
  return (
    <header className={style.header}>
      <div className={style.subhead}></div>
      <div className={style.px6}>
        <div className={style.px7}>
          <div className={style.mainpart}>
            <div className={style.mainpart1}>
              <div className={style.logo}>
                <a className={style.homepagelink} href="/">
                <img src={pics} alt="xd" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </a>
              </div>
              <div className={style.loginsignup}>
                <Link
                  to="/login"
                  className={style.loginlink}
                  style={{ alignItems: "flex-start" }}
                >
                  Log in
                </Link>
                <Link to="/signup" className={style.loginlink}>
                  Sign up
                </Link>
              </div>
              <div className={style.dropdown}>
                  <label htmlFor="language">Language:</label>
                  <select id="language" name="language">
                    <option value="english">English</option>
                    <option value="español">Español</option>
                    <option value="português">Português</option>
                    <option value="中文">中文</option>
                    <option value="हिन्दी">हिन्दी</option>


                  </select>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbarwrapper;
