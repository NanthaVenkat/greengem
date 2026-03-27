import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from "./pages/Home";
import Career from "./pages/Career";
import JobDetails from "./pages/JobDetails";
import JobApply from "./pages/JobApply";
import Termsandconditions from "./pages/Termsandconditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <div className="font-sans">
        <BrowserRouter>
          {/* <Header /> */}
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career/:jobSlug" element={<JobDetails />} />
            <Route path="/career/:jobSlug/apply" element={<JobApply />} />
            <Route path="/terms-and-conditions" element={<Termsandconditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
