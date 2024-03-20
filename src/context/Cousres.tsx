import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export interface ICourse {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}

export type ICourseData = ICourse[] | null;

export type ICoursesContextContext = {
  data: ICourseData;
  isLoading: boolean;
  error: null | string;
  selectedCourse: string;
  setData: Dispatch<SetStateAction<ICourseData>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<null | string>>;
  setSelectedCourse: Dispatch<SetStateAction<string>>;
};

export const ALL_THEMES = "Все темы";

const CoursesContext = createContext<ICoursesContextContext>({
  data: null,
  isLoading: false,
  error: null,
  selectedCourse: ALL_THEMES,
  setData: () => {},
  setIsLoading: () => {},
  setError: () => {},
  setSelectedCourse: () => {},
});

const CoursesContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ICourseData>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [selectedCourse, setSelectedCourse] = useState(ALL_THEMES);

  return (
    <CoursesContext.Provider
      value={{
        data,
        isLoading,
        error,
        selectedCourse,
        setData,
        setIsLoading,
        setError,
        setSelectedCourse,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export { CoursesContext, CoursesContextProvider };
