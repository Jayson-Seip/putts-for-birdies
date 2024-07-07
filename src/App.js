
import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import CarouselImg from './components/Carousel';
import AboutUs from './components/AboutUs';
import Lesson from './components/Lessons';
import Tournaments from './components/Tournaments';
import LessonPage from './pages/Lessons';
import Facilities from './components/Facilities';
import TournamentPage from './pages/Tournaments';
import SummerCamp from './components/SummerCamp';
import SummerCampPage from './pages/SummerCamp';
import { Container } from 'react-bootstrap';
import Scroll from './components/Scroll';
import TournamentSearch from "./pages/TournamentSearch";
import GolfCoursePage from './pages/GolfCourse';
import DrivingRangePage from './pages/DrivingRange';
import PuttingGreenPage from './pages/PuttingGreen';
import SignInPage from './pages/SignIn';
import SummerCampSearch from './pages/SummerCampSearch';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReviewForm from './components/ReviewForm';
import WeeklySchedulePage from './pages/WeeklySchedule';
import { Location } from './components/Location';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitReview = (review) => {
    setReviews([...reviews, review]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar handleSignInClick={handleOpenModal} handleReviewClick={openModal} />
        <Scroll />
        <Routes>
          <Route /*Landing Page */
            path="/"
            element={
              <>
                <CarouselImg />
                <AboutUs />
                <Facilities />

                <Container className="Service-Heading mt-4">
                  <h1>Services Offered</h1>
                </Container>
                <Tournaments />
                <Lesson />
                <SummerCamp />
                <Location />
              </>
            }
          />

          <Route path="/lessons" element={<LessonPage />} />
          <Route path="/Tournaments" element={<TournamentPage />} />
          <Route path="/SummerCamp" element={<SummerCampPage />} />
          <Route path="/Tournament-Search" element={<TournamentSearch />} />
          <Route path="/Golf-Courses" element={<GolfCoursePage />} />
          <Route path="/Driving-Range" element={<DrivingRangePage />} />
          <Route path="/Putting-Green" element={<PuttingGreenPage />} />
          <Route path="/WeeklySchedule" element={<WeeklySchedulePage />} />

          <Route path="/Summer-Camp-Search" element={<SummerCampSearch />} />

        </Routes>
        <SignInPage show={showModal} handleClose={handleCloseModal} />
        <ReviewForm isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmitReview} />
      </div>
    </BrowserRouter>



  );
}

export default App;
