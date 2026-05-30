import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './navbar/NavBar'
import Banner from './components/Banner'
import HomeShow from './components/HomeShow'
import MovieDetails from './components/MovieDetails'
import Footer from './components/Footer'
import SavedMovie from './components/SavedMovie'
import TvSection from './tv/TvSection'
import Login from './components/Login'
import { AuthProvider } from './context/AuthContext'
import Approved from './components/Approved'
import TvDetails from './tv/TvDetails'
import TopRarted from './components/TopRarted'
import NowPlaying from './components/NowPlaying'



import AboutPage from './Shop/AboutPage'
import ContactPage from './Shop/ContactPage'
import FAQPage from './Shop/FAQPage'
import PrivacyPolicy from './Shop/PrivacyPolicy'
import TermsofUse from './Shop/TermsofUse'



const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path="/login" element={<Login />} />


          <Route path="/" element={
            <>
              <Banner />
              <HomeShow />
              <NowPlaying />
              <TopRarted />


            </>
          } />
          <Route path="/approved" element={<Approved />} />

          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/my-list" element={<SavedMovie />} />
          <Route path="/tv" element={<TvSection />} />
          <Route path="/tv/:id" element={<TvDetails />} />



          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsofUse />} />




        </Routes>

        <Footer />

      </BrowserRouter>
    </AuthProvider>
  )
}

export default App