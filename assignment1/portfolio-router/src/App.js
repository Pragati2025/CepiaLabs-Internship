import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/* Layout component — shows Navbar, the current page (Outlet), and Footer */
function Layout(){
  return (
    <div style={{maxWidth:900, margin:"0 auto", padding:20}}>
      <Navbar />
      <main style={{minHeight:"60vh", paddingTop:20}}>
        <Outlet />    {/* child routes render here */}
      </main>
      <Footer />
    </div>
  );
}

function App(){
  return (
    <BrowserRouter>
      <Routes>
        {/* root route that applies Layout to its children */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />            {/* path = "/" */}
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />     {/* 404 for all other paths */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
