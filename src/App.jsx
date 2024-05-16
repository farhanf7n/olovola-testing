import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Driver from "./pages/Driver";
import Services from "./pages/Services";
import B2B from "./pages/B2B";
import Blog from "./pages/Blog";
import NoPage from "./pages/NoPage";
import AboutUs from "./pages/AboutUs";
import Suggestion from "./pages/Suggestion";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="driver" element={<Driver />} />
        <Route path="b2b" element={<B2B />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="suggestion" element={<Suggestion />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
