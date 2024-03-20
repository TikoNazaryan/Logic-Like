import { useCallback, useContext, useEffect } from "react";
import { CoursesContext, ALL_THEMES } from "../context/Cousres";
import { coursesApiGET } from "./../api/courses";
import { v4 as uuidv4 } from "uuid";

const useCourses = () => {
  const {
    data,
    selectedCourse,
    error,
    setData,
    setError,
    setIsLoading,
    setSelectedCourse,
  } = useContext(CoursesContext);

  useEffect(() => {
    if (!data) {
      setIsLoading(true);
      coursesApiGET()
        .then((data) => {
          setData(data);
        })
        .catch((e) => {
          setError("Something went wrong while fetching data");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [data, setIsLoading, setData, setError]);

  const getTags = useCallback(() => {
    const uniqueTags = [[uuidv4(), ALL_THEMES]];
    if (!data) {
      return uniqueTags;
    }

    const exists: Set<string> = new Set([]);

    data.forEach(({ tags }) => {
      tags.forEach((tag) => {
        if (!exists.has(tag)) {
          uniqueTags.push([uuidv4(), tag]);
          exists.add(tag);
        }
      });
    });

    return uniqueTags;
  }, [data]);

  const getSelectedCourses = useCallback(() => {
    if (!data) {
      return [];
    }

    if (selectedCourse === ALL_THEMES) {
      return data;
    }

    return data.filter((course) => course.tags.includes(selectedCourse));
  }, [data, selectedCourse]);

  return {
    data,
    selectedCourse,
    tags: getTags(),
    selectedCourses: getSelectedCourses(),
    error,
    setSelectedCourse,
  };
};

export default useCourses;
