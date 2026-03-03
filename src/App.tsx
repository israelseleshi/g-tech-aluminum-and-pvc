/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { Solutions } from "./pages/Solutions";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { ProjectDetail } from "./pages/ProjectDetail";
import { ProductDetail } from "./pages/ProductDetail";
import { About } from "./pages/About";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { SplashPage } from "./components/SplashPage";

import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Show splash for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashPage key="splash" onComplete={() => setLoading(false)} />
        ) : (
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="solutions" element={<Solutions />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:id" element={<ProjectDetail />} />
                <Route path="solutions/:productId" element={<ProductDetail />} />
                <Route path="contact-us" element={<Contact />} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="terms" element={<Terms />} />
              </Route>
            </Routes>
          </Router>
        )}
      </AnimatePresence>
    </HelmetProvider>
  );
}
