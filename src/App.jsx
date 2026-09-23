import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './navbar/NavBar'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'

// Lazy-loaded route components
const Banner = lazy(() => import('./components/Banner'))
const HomeShow = lazy(() => import('./components/HomeShow'))
const MovieDetails = lazy(() => import('./components/MovieDetails'))
const SavedMovie = lazy(() => import('./components/SavedMovie'))
const TvSection = lazy(() => import('./tv/TvSection'))
const Login = lazy(() => import('./components/Login'))
const Approved = lazy(() => import('./components/Approved'))
const TvDetails = lazy(() => import('./tv/TvDetails'))
const TopRarted = lazy(() => import('./components/TopRarted'))
const NowPlaying = lazy(() => import('./components/NowPlaying'))
const GenursMovie = lazy(() => import('./components/GenursMovie'))
const AboutPage = lazy(() => import('./Shop/AboutPage'))
const ContactPage = lazy(() => import('./Shop/ContactPage'))
const FAQPage = lazy(() => import('./Shop/FAQPage'))
const PrivacyPolicy = lazy(() => import('./Shop/PrivacyPolicy'))
const TermsofUse = lazy(() => import('./Shop/TermsofUse'))
const SearchFilter = lazy(() => import('./serchfillter/SearchFilter'))

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>

        <NavBar />

        <Suspense fallback={<div className="page-loader">Loading...</div>}>
          <Routes>

            <Route path="/login" element={<Login />} />

            <Route path="/" element={
              <>
                <Banner />
                <GenursMovie />
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
            <Route path="/search" element={<SearchFilter />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsofUse />} />

          </Routes>
        </Suspense>

        <Footer />

      </BrowserRouter>
    </AuthProvider>
  )
}

export default App