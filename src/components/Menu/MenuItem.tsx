import React, { FC } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

interface IMenu {
  label: string;
  isActive?: boolean;
  handleOnClick: (tag: string) => void;
}

const MenuItem: FC<IMenu> = ({ label, isActive, handleOnClick }) => {
  return (
    <li
      onClick={() => handleOnClick(label)}
      className={classNames(styles.menu__item, {
        [styles["menu__item--active"]]: isActive,
      })}
    >
      {label}
    </li>
  );
};

export default MenuItem;
