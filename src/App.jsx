import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Hero from './pages/Hero';
import Banner from './pages/Banner';
import Question from './pages/Question';
import SurveyForm from './components/SurveyForm/SurveyForm';
import AboutPCOS from './components/AboutPCOS/AboutPCOS';
import Footer from './pages/Footer';
import UltrasoundImage from './components/UltrasoundImage/UltrasoundImage';




const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              {/* Only render Banner and Question on the home page */}
              <Banner />
              <Question />
            </>
          }

        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect invalid URLs to Hero */}
        <Route path="/SurveyForm" element={<SurveyForm />} />
        <Route path="/AboutPCOS" element={<AboutPCOS />} />
        <Route path="/UltrasoundImage" element={<UltrasoundImage />} />

      </Routes>
      <Footer />

    </div>
  );
};

export default App;
