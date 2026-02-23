import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Layout from './layout/Layout';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;
    const prevScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    setTimeout(() => {
      window.scrollTo(0, 0);
      html.style.scrollBehavior = prevScrollBehavior || '';
    }, 0);
  }, [pathname]);

  return null;
}