import React, { useState } from 'react'
import './About.css'
const faqs = [
  {
    category: '🎬 General',
    items: [
      {
        question: 'What is CineWorld?',
        answer:
          'CineWorld is a movie discovery platform powered by the TMDB API. You can explore popular, top-rated, and upcoming movies, watch trailers, and rate films using your TMDB account.'
      },
      {
        question: 'Is CineWorld free to use?',
        answer:
          'Yes! CineWorld is completely free. All you need is a TMDB account to unlock features like rating movies.'
      },
      {
        question: 'What data does CineWorld use?',
        answer:
          'All movie data, images, and ratings are fetched in real-time from The Movie Database (TMDB) API.'
      }
    ]
  },
  {
    category: '🔐 Login & Account',
    items: [
      {
        question: 'How do I log in?',
        answer:
          'Click the "Login to TMDB" button. You will be redirected to the TMDB website to authenticate. Once approved, you will be brought back to CineWorld automatically.'
      },
      {
        question: 'Do I need a TMDB account?',
        answer:
          'You need a TMDB account only to rate movies. Browsing and watching trailers works without logging in.'
      },
      {
        question: 'Is my TMDB account data safe?',
        answer:
          'Yes. CineWorld never stores your TMDB credentials. Authentication is handled entirely by TMDB\'s secure OAuth flow.'
      }
    ]
  },
  {
    category: '⭐ Ratings',
    items: [
      {
        question: 'How do I rate a movie?',
        answer:
          'Open any movie, click "Add Rating", enter a score between 1 and 10, and hit "Rate". You must be logged in with your TMDB account to submit a rating.'
      },
      {
        question: 'Can I change my rating?',
        answer:
          'Yes. Simply rate the movie again with a new score and it will overwrite your previous rating on TMDB.'
      },
      {
        question: 'Where are my ratings saved?',
        answer:
          'Your ratings are saved directly to your TMDB account and are accessible from the TMDB website as well.'
      }
    ]
  },
  {
    category: '🎥 Movies & TV',
    items: [
      {
        question: 'How are Popular movies determined?',
        answer:
          'Popularity is calculated by TMDB based on views, ratings, watchlist adds, and release date activity.'
      },
      {
        question: 'Can I watch full movies on CineWorld?',
        answer:
          'No. CineWorld provides trailers and movie information only. It is a discovery platform, not a streaming service.'
      },
      {
        question: 'How often is the content updated?',
        answer:
          'Content is fetched live from the TMDB API, so it is always up to date with the latest movies and TV shows.'
      }
    ]
  }
]

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-wrapper">

      {/* Hero */}
      <div className="faq-hero">
        <h1>❓ Frequently Asked Questions</h1>
        <p>Everything you need to know about CineWorld.</p>
      </div>

      <div className="faq-container">
        {faqs.map((section, sIdx) => (
          <div key={sIdx} className="faq-section">
            <h2 className="faq-category">{section.category}</h2>

            {section.items.map((faq, iIdx) => {
              const index = `${sIdx}-${iIdx}`
              const isOpen = openIndex === index

              return (
                <div
                  key={iIdx}
                  className={`faq-item ${isOpen ? 'open' : ''}`}
                  onClick={() => toggle(index)}
                >
                  <div className="faq-question">
                    <span>{faq.question}</span>
                    <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                  </div>
                  {isOpen && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {/* Still have questions */}
      <div className="faq-footer">
        <h3>Still have questions?</h3>
        <p>Reach out to us via the <a href="/contact">Contact Page</a> and we'll get back to you.</p>
      </div>

    </div>
  )
}

export default FAQPage