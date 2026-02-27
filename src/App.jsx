import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from "./pages/Home";
import Career from "./pages/Career";
import JobDetails from "./pages/JobDetails";
import JobApply from "./pages/JobApply";
import Termsandconditions from "./pages/Termsandconditions";
import Privacypolicy from "./pages/Privacypolicy";

function App() {
  return (
    <>
      <div className="font-sans">
        <BrowserRouter>
          {/* <Header /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/career/:jobSlug" element={<JobDetails />} />
            <Route path="/career/:jobSlug/apply" element={<JobApply />} />
            <Route path="/terms-and-conditions" element={<Termsandconditions />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
