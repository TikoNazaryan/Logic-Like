import React, { FC } from "react";
import styles from "./index.module.scss";
import Menu from "../Menu";
import Courses from "../Courses";

interface ILayout {}

const Layout: FC<ILayout> = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.content}>
        <Courses />
      </div>
    </div>
  );
};

export default Layout;
