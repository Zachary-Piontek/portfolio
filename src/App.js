import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Contact } from "./Components/Contact/Contact.js";
import { Resume } from "./Components/Resume/Resume.js";
import Projects from "./Components/Projects/Projects.js";
import { About } from "./Components/About/About.js";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
