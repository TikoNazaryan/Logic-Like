import "./App.scss";
import Layout from "./components/Layout";
import { CoursesContextProvider } from "./context/Cousres";

function App() {
  return (
    <CoursesContextProvider>
      <Layout />
    </CoursesContextProvider>
  );
}

export default App;
