import React, { useState } from 'react'
import './About.css'

const terms = [
  {
    icon: '✅',
    title: 'Acceptance of Terms',
    content: `By accessing or using CineWorld, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our platform. We reserve the right to update these terms at any time, and continued use of the platform constitutes acceptance of the revised terms.`
  },
  {
    icon: '🎯',
    title: 'Use of the Platform',
    content: `CineWorld is intended for personal, non-commercial use only. You agree not to misuse the platform, attempt to gain unauthorized access, scrape or copy content in bulk, or use it for any unlawful purpose. We reserve the right to suspend or terminate access for any violation of these terms.`
  },
  {
    icon: '🔐',
    title: 'TMDB Account & Authentication',
    content: `To use features such as rating movies, you must authenticate via your TMDB account. You are responsible for maintaining the confidentiality of your TMDB credentials. CineWorld does not store your TMDB password and is not responsible for any unauthorized access to your TMDB account.`
  },
  {
    icon: '⭐',
    title: 'Ratings & User Actions',
    content: `When you submit a movie rating through CineWorld, that rating is sent directly to TMDB and is governed by TMDB's Terms of Service. You are solely responsible for the ratings and actions you perform on this platform. Misuse of the rating system may result in your access being revoked.`
  },
  {
    icon: '🖼️',
    title: 'Intellectual Property',
    content: `All movie data, images, descriptions, and related content displayed on CineWorld are sourced from the TMDB API and belong to their respective copyright owners. CineWorld does not claim ownership over any third-party content. The CineWorld brand, design, and original code are the property of its developers.`
  },
  {
    icon: '🌐',
    title: 'Third-Party Links & Services',
    content: `CineWorld may contain links to third-party websites such as TMDB. We are not responsible for the content, privacy practices, or availability of these external sites. Accessing third-party links is at your own risk and subject to their respective terms and policies.`
  },
  {
    icon: '🚫',
    title: 'Prohibited Activities',
    content: `You agree not to reverse engineer or decompile any part of the platform, use automated bots or scrapers, post or transmit harmful or malicious content, impersonate another user or entity, or attempt to interfere with the platform's infrastructure, security, or performance in any way.`
  },
  {
    icon: '⚠️',
    title: 'Disclaimer of Warranties',
    content: `CineWorld is provided on an "as is" and "as available" basis without warranties of any kind. We do not guarantee that the platform will be uninterrupted, error-free, or completely accurate. Use of the platform is at your own risk.`
  },
  {
    icon: '⚖️',
    title: 'Limitation of Liability',
    content: `To the fullest extent permitted by law, CineWorld and its developers shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform, including but not limited to loss of data, loss of profits, or service interruptions.`
  },
  {
    icon: '📍',
    title: 'Governing Law',
    content: `These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Tamil Nadu, India.`
  },
  {
    icon: '✏️',
    title: 'Changes to Terms',
    content: `We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to this page. It is your responsibility to review these terms periodically. Your continued use of CineWorld after changes are posted constitutes your acceptance of the updated terms.`
  },
  {
    icon: '📩',
    title: 'Contact Us',
    content: `If you have any questions about these Terms of Use, please contact us through the Contact Page. We are happy to clarify any concerns you may have regarding your rights and obligations while using CineWorld.`
  }
]

const TermsofUse = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="terms-wrapper">

      {/* Hero */}
      <div className="terms-hero">
        <h1>📜 Terms of Use</h1>
        <p>Please read these terms carefully before using CineWorld.</p>
        <span className="terms-date">Last Updated: May 2025</span>
      </div>

      {/* Intro */}
      <div className="terms-intro">
        <p>
          Welcome to <strong>CineWorld</strong>. These Terms of Use govern your access to
          and use of our platform. By using CineWorld, you acknowledge that you have read,
          understood, and agree to be bound by these terms. If you are using CineWorld on
          behalf of an organization, you agree to these terms on their behalf.
        </p>
      </div>

      {/* Accordion */}
      <div className="terms-container">
        {terms.map((term, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className={`terms-item ${isOpen ? 'open' : ''}`}
              onClick={() => toggle(index)}
            >
              <div className="terms-question">
                <span className="terms-title">
                  <span className="terms-icon">{term.icon}</span>
                  {term.title}
                </span>
                <span className="terms-toggle">{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && (
                <div className="terms-answer">
                  {term.content}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Agreement Banner */}
      <div className="terms-agreement">
        <h3>📌 By using CineWorld, you agree to these Terms of Use.</h3>
        <p>
          If you have any concerns, feel free to reach out via our{' '}
          <a href="/contact">Contact Page</a> before continuing to use the platform.
        </p>
        <div className="terms-btn-group">
          <a href="/" className="terms-btn-accept">✅ I Agree — Go to Home</a>
          <a href="/contact" className="terms-btn-contact">📩 Contact Us</a>
        </div>
      </div>

    </div>
  )
}

export default TermsofUse