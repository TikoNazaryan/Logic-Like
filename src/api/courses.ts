import { HOST } from "./";

export const coursesApiGET = async () => {
  const response = await fetch(HOST + "/docs/courses.json", {});
  return response.json();
};
