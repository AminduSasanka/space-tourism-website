import styles from "./styles.module.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import closeBtn from "../../assets/shared/icon-close.svg";
import { useState } from "react";

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
          <a href="">
            <img src={logo} alt="" />
          </a>
          <button onClick={toggleSidePannel}>
            <img src={hamburger} alt="" />
          </button>
        </div>
        {/* horizontal line */}
        <div className={styles.line}></div>
        {/* navigation links */}
        <div className={styles.links_container}>
          <a href="">
            <b>00</b>Home
          </a>
          <a href="">
            <b>01</b>Destination
          </a>
          <a href="">
            <b>02</b>Crew
          </a>
          <a href="">
            <b>03</b>Technology
          </a>
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
      <a href="">
        <b>00</b>Home
      </a>
      <a href="">
        <b>01</b>Destination
      </a>
      <a href="">
        <b>02</b>Crew
      </a>
      <a href="">
        <b>03</b>Tehnology
      </a>
    </div>
  );
};
export default NavigationBar;
