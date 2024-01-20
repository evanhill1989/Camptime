// import otherLogo from './app/assets/img/logo.png';
import "./App.css";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import { Route, Routes } from "react-router-dom";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";
import AboutPage from "./pages/AboutPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampsites } from "./features/campsites/campsitesSlice";

function App() {
  console.log("Running inside App");
  async function testFetch() {
    try {
      const response = await fetch("http://localhost:3001/campsites");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  useEffect(() => {
    testFetch();
    console.log("Ran testFetch in useEffect.");
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="directory" element={<CampsitesDirectoryPage />} />
        <Route path="directory/:campsiteId" element={<CampsiteDetailPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
