import { useEffect, useState } from "react";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import MenuPage from "./pages/MenuPage";
import { routes } from "./siteData";

function useRoute() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (nextPath) => {
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
      setPath(nextPath);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { path: routes[path] ? path : "/", navigate };
}

function App() {
  const { path, navigate } = useRoute();

  return (
    <SiteLayout navigate={navigate} activePath={path}>
      {path === "/" && <HomePage navigate={navigate} />}
      {path === "/menu" && <MenuPage />}
      {path === "/about" && <AboutPage />}
      {path === "/location" && <LocationPage />}
    </SiteLayout>
  );
}

export default App;
