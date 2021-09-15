// #region imports
import React, {useState, useEffect, useRef} from 'react'
import './App.css'
import {SocialMedia, NavLinks} from './constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
// #endregion

function App() {
  // #region Hooks
  const [showLinks, setShowLinks] = useState(false)
  const navRef = useRef(null)
  const linksAreaRef = useRef(null)
  const toggleRef = useRef(null)
  const socialAreaRef = useRef(null)
  const socialRef = useRef(null)

  useEffect(() => {
    let navLinkHeight = navRef.current.getBoundingClientRect().height
    let socialLinksHeight = socialRef.current.getBoundingClientRect().height

    // if nav toggle is clicked, show links and social media icons
    if (showLinks) {
      toggleRef.current.classList.add('rotate-toggle')
      linksAreaRef.current.style.height = `${navLinkHeight}px`
      socialAreaRef.current.style.height = `${socialLinksHeight}px`
    } else {
      toggleRef.current.classList.remove('rotate-toggle')
      linksAreaRef.current.style.height = '0px'
      socialAreaRef.current.style.height = '0px'
    }
  }, [showLinks])
  // #endregion

  return (
    <section className="navbar">
      <article className="nav-header">
        {/* home page */}
        <h1 className="home">
          <a href="/">NavApp</a>
        </h1>
        {/* nav toggle */}
        <FontAwesomeIcon
          icon={faBars}
          className="nav-toggle"
          onClick={() => setShowLinks(!showLinks)}
          forwardedRef={toggleRef}
        />
      </article>
      {/* navigation links */}
      <article className="links-area" ref={linksAreaRef}>
        <ul className="nav-links" ref={navRef}>
          {NavLinks.map((link, index) => {
            let {id, url, text} = link
            return (
              <li key={index}>
                <a className="nav-item" href={url} id={`link-${id}`}>
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </article>
      {/* social media apps */}
      <article className="social-media-area" ref={socialAreaRef}>
        <ul className="social-media" ref={socialRef}>
          {SocialMedia.map((link, index) => {
            let {id, url, icon, title} = link
            return (
              <li key={index}>
                <a
                  href={url}
                  title={title}
                  id={`social-link-${id}`}
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </article>
    </section>
  )
}

export default App
