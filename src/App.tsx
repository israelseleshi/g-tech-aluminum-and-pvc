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

import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}
