import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { HomePage } from "./pages/HomePage";
import { Team } from "./pages/Team";
import { About } from "./pages/About";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
