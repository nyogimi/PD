import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainScreen1 from "./pages/MainScreen1";
import MainScreen2 from "./pages/MainScreen2";
import HealthScreen from "./pages/HealthScreen";
import MainScreen3 from "./pages/MainScreen3";
import MainScreen from "./pages/MainScreen";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/screen-5":
        title = "";
        metaDescription = "";
        break;
      case "/screen-4":
        title = "";
        metaDescription = "";
        break;
      case "/screen-3":
        title = "";
        metaDescription = "";
        break;
      case "/screen-2":
        title = "";
        metaDescription = "";
        break;
      case "/screen-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/screen-5" element={<MainScreen1 />} />
      <Route path="/screen-4" element={<MainScreen2 />} />
      <Route path="/screen-3" element={<HealthScreen />} />
      <Route path="/screen-2" element={<MainScreen3 />} />
      <Route path="/screen-1" element={<MainScreen />} />
    </Routes>
  );
}
export default App;
