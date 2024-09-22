// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomButtonDocs from "./pages/docs/CustomButtonDocs";
import CustomContentDocs from "./pages/docs/CustomContentDocs";
import FooterDocs from "./pages/docs/FooterDocs";
import FooterLinksDocs from "./pages/docs/FooterLinksDocs";
import FullWidthContentDocs from "./pages/docs/FullWidthContentDocs";
import NavbarDocs from "./pages/docs/NavbarDocs";
import NavLinksDocs from "./pages/docs/NavLinksDocs";
import DocumentPage from "./pages/DocumentPage";
import DocsIntro from './pages/docs/DocsIntro';
import "./App.css"; // Assurez-vous d'importer le fichier CSS

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<DocumentPage />}>
            <Route index element={<DocsIntro />} />
            <Route path="/docs/custom-button" element={<CustomButtonDocs />} />
            <Route
              path="/docs/custom-content"
              element={<CustomContentDocs />}
            />
            <Route path="/docs/footer" element={<FooterDocs />} />
            <Route path="/docs/footer-links" element={<FooterLinksDocs />} />
            <Route
              path="/docs/full-width-content"
              element={<FullWidthContentDocs />}
            />
            <Route path="/docs/navbar" element={<NavbarDocs />} />
            <Route path="/docs/nav-links" element={<NavLinksDocs />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
