import React, { useState } from 'react'
import './About.css'

const sections = [
  {
    icon: '📋',
    title: 'Information We Collect',
    content: `CineWorld does not collect any personal information directly. When you log in using your TMDB account, we receive a temporary session token provided by TMDB's secure OAuth system. We do not store your TMDB username, password, or personal profile data on our servers.`
  },
  {
    icon: '🔐',
    title: 'How We Use Your Information',
    content: `The session token received from TMDB is used solely to allow you to rate movies on your behalf. It is stored temporarily in your browser session and is never shared with any third party. We use this token only for TMDB API requests initiated by you.`
  },
  {
    icon: '🍪',
    title: 'Cookies & Local Storage',
    content: `CineWorld may use browser local storage to remember your session token between visits. We do not use tracking cookies or advertising cookies. No third-party cookies are placed on your device through our platform.`
  },
  {
    icon: '🌐',
    title: 'Third-Party Services',
    content: `Our platform is powered by The Movie Database (TMDB) API. All movie data, images, ratings, and related content are provided by TMDB. We encourage you to review TMDB's own Privacy Policy at themoviedb.org for details on how they handle your data.`
  },
  {
    icon: '🔗',
    title: 'Data Sharing',
    content: `CineWorld does not sell, trade, or rent your personal information to any third parties. The only data exchange that occurs is between your browser and the TMDB API, which is governed by TMDB's privacy practices.`
  },
  {
    icon: '🛡️',
    title: 'Data Security',
    content: `We take reasonable measures to protect any data handled through our platform. All communications with the TMDB API are conducted over HTTPS. However, no system is completely secure and we cannot guarantee absolute security.`
  },
  {
    icon: '👶',
    title: "Children's Privacy",
    content: `CineWorld is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided personal information through our platform, please contact us immediately.`
  },
  {
    icon: '✏️',
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.`
  },
  {
    icon: '📩',
    title: 'Contact Us',
    content: `If you have any questions or concerns about this Privacy Policy, please reach out to us through our Contact Page. We are happy to address any privacy-related questions you may have.`
  }
]

const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="privacy-wrapper">

      {/* Hero */}
      <div className="privacy-hero">
        <h1>🛡️ Privacy Policy</h1>
        <p>Your privacy matters to us. Here's how we handle your data.</p>
        <span className="privacy-date">Last Updated: May 2025</span>
      </div>

      {/* Intro */}
      <div className="privacy-intro">
        <p>
          Welcome to <strong>CineWorld</strong>. This Privacy Policy explains how we collect,
          use, and protect your information when you use our platform. By using CineWorld,
          you agree to the practices described in this policy.
        </p>
      </div>

      {/* Accordion Sections */}
      <div className="privacy-container">
        {sections.map((section, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className={`privacy-item ${isOpen ? 'open' : ''}`}
              onClick={() => toggle(index)}
            >
              <div className="privacy-question">
                <span className="privacy-title">
                  <span className="privacy-icon">{section.icon}</span>
                  {section.title}
                </span>
                <span className="privacy-toggle">{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && (
                <div className="privacy-answer">
                  {section.content}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Footer Note */}
      <div className="privacy-footer">
        <p>
          🔒 CineWorld is powered by the{' '}
          <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
            TMDB API
          </a>
          . We are not affiliated with TMDB. Movie data and images belong to their respective owners.
        </p>
        <a href="/contact" className="privacy-contact-btn">📩 Contact Us</a>
      </div>

    </div>
  )
}

export default PrivacyPolicy