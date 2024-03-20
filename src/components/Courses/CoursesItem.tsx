import React, { FC } from "react";
import styles from "./index.module.scss";
import { ICourse } from "../../context/Cousres";

interface ICoursesItem extends ICourse {}

const CoursesItem: FC<ICoursesItem> = ({ name, image, bgColor }) => {
  return (
    <div className={styles.courses__item}>
      <div
        className={styles["courses__item-bg"]}
        style={{ backgroundColor: bgColor }}
      >
        <div
          className={styles["courses__item-bg__image"]}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className={styles["courses__item-label"]}>{name}</div>
    </div>
  );
};

export default CoursesItem;
