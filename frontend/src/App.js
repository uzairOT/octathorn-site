import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Nav from "./Components/Header/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Company from "./Pages/Company";
import Portfolio from "./Pages/Portfolio";
import AdminPanel from "./Pages/Admin/AdminPanel";
import GetReviews from "./Components/Admin/GetReviewsForm";
import ProjectDetails from "./Pages/ProjectDetails";
import Technologies from "./Pages/Technologies";
import MainSchedule from "./Components/ScheduleMeeting/MainSchedule";
import Industries from "./Pages/Industries";
import Login from "./Pages/Admin/LoginPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import CalendlyWidget from "./Components/ScheduleMeeting/CalendlyWidget";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

import ProjectView from "./Components/Portfolio/ProjectDetails/ProjectView";
function App() {
  const helmetContext = {};
  // Retrieve the token from sessionStorage or localStorage

  // Alternatively, use localStorage.getItem('token');

  return (
    <div className="App">
      <BrowserRouter>
      <HelmetProvider context={helmetContext}>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:heading" element={<Services />} />
          <Route path="/industries/:heading" element={<Industries />} />
          <Route path="/about" element={<Company />} />
          <Route path="/submitreviews" element={<GetReviews />} />
          <Route
            path="/technologies/:heading"
            element={<Technologies />}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:title" element={<ProjectDetails />} />
          {/* <Route path="/contact" element={<MainSchedule />} /> */}

          <Route path="/adminpanel" element={<PrivateRoutes />}>
            <Route index element={<AdminPanel />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<CalendlyWidget />} />
           <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        </HelmetProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
