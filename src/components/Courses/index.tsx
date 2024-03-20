import React, { FC } from "react";
import styles from "./index.module.scss";
import CoursesItem from "./CoursesItem";
import useCourses from "../../hooks/useCourses";

interface ICourses {}

const Courses: FC<ICourses> = () => {
  const { selectedCourses, error } = useCourses();

  if (error) return <>{error}</>;

  return (
    <div className={styles.courses}>
      {selectedCourses.map((course) => (
        <CoursesItem key={course.id} {...course} />
      ))}
    </div>
  );
};

export default Courses;
