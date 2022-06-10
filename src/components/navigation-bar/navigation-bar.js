import styles from "./styles.module.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import closeBtn from "../../assets/shared/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isShowSidePannel, setIsShowSidePannel] = useState(false);

  const toggleSidePannel = () => {
    setIsShowSidePannel(!isShowSidePannel);
  };

  return (
    <nav>
      <section className={styles.nav_container}>
        {/* logo and hamburger button */}
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <button onClick={toggleSidePannel}>
            <img src={hamburger} alt="" />
          </button>
        </div>
        {/* horizontal line */}
        <div className={styles.line}></div>
        {/* navigation links */}
        <div className={styles.links_container}>
          <Link to="/">
            <b>00</b>Home
          </Link>
          <Link to="/destinations">
            <b>01</b>Destination
          </Link>
          <Link to="/crew">
            <b>02</b>Crew
          </Link>
          <Link to="/technology">
            <b>03</b>Technology
          </Link>
        </div>
        {/* side pannel for mobile devices */}
        <SidePannel
          toggleSidePannel={toggleSidePannel}
          isShowSidePannel={isShowSidePannel}
        ></SidePannel>
      </section>
    </nav>
  );
};

const SidePannel = ({ isShowSidePannel, toggleSidePannel }) => {
  return (
    <div
      className={
        `${styles.links_container_side}` +
        " " +
        (isShowSidePannel ? styles.show_sidePannel : "")
      }
    >
      <button onClick={toggleSidePannel}>
        <img src={closeBtn} alt="" />
      </button>
      <Link to="/">
        <b>00</b>Home
      </Link>
      <Link to="/destinations">
        <b>01</b>Destination
      </Link>
      <Link to="/crew">
        <b>02</b>Crew
      </Link>
      <Link to="/technology">
        <b>03</b>Technology
      </Link>
    </div>
  );
};
export default NavigationBar;
