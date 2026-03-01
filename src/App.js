import React from "react";
import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import DomesticPackages from "./pages/DomesticPackages";
import InternationalPackages from "./pages/InternationalPackages";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function App() {
  const basename =
  process.env.NODE_ENV === "production"
    ? "/tourtraveldemo"
    : "/";

  return (
    <div className="App">
      <HashRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/domestic-packages" element={<DomesticPackages />} />
          <Route path="/international-packages" element={<InternationalPackages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </HashRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;