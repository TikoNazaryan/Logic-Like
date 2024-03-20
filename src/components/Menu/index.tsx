import React, { FC } from "react";
import styles from "./index.module.scss";
import MenuItem from "./MenuItem";
import useCourses from "../../hooks/useCourses";

interface IMenu {}

const Menu: FC<IMenu> = () => {
  const { tags, selectedCourse, setSelectedCourse } = useCourses();

  const handleOnClick = (tag: string) => {
    setSelectedCourse(tag);
  };

  return (
    <ul className={styles.menu}>
      {tags.map((tag) => {
        return (
          <MenuItem
            key={tag[0]}
            label={tag[1]}
            isActive={tag[1] === selectedCourse}
            handleOnClick={handleOnClick}
          />
        );
      })}
    </ul>
  );
};

export default Menu;
