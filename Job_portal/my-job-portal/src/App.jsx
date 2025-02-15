import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '.src/pages/Home.jsx';
import JobListings from '.src//pages/JobListings.jsx';
import JobDetails from '.src/pages/JobDetails.jsx';
import EmployerDashboard from '.src/pages/EmployerDashboard.jsx';
import CandidateDashboard from '.src/pages/CandidateDashboard.jsx';
import Navbar from '.src/components/NavBar.jsx';
import Footer from '.src/components/Footer.jsx';
import SearchBar from '.src/Componets/SearchBar.jsx';
import ApplicationForm from '.src/Componets/ApplicationForm.jsx';
import './styles.css';

const App = () => {
  return (


    <Router>
      <div>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
        </Routes>
        <Footer />
        <ApplicationForm/>
        <NavBar/>
        <SearchBar/>
      </div>
    </Router>
  );
};

export default App;