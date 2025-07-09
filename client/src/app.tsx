import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./pages/mainPage";
import { FavoritesPage } from "./pages/favouritesPage";
import { Header } from "./components/shared/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
