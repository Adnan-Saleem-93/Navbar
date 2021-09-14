import React, {useState, useEffect, useRef} from 'react'
import './App.css'
import {SocialMedia, NavLinks} from './constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function App() {
  const [showLinks, setShowLinks] = useState(false)
  const navRef = useRef(null)
  const navAreaRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    let navLinkHeight = navRef.current.getBoundingClientRect().height
    if (showLinks) {
      toggleRef.current.classList.add('rotate-toggle')
      navAreaRef.current.style.height = `${navLinkHeight}px`
    } else {
      toggleRef.current.classList.remove('rotate-toggle')
      navAreaRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <section className="navbar">
      <article className="nav-header">
        <h1 className="home">
          <a href="/">NavApp</a>
        </h1>
        <FontAwesomeIcon
          icon={faBars}
          className="nav-toggle"
          onClick={() => setShowLinks(!showLinks)}
          forwardedRef={toggleRef}
        />
      </article>
      <article className="links-area" ref={navAreaRef}>
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
      <article className="social-media">
        {SocialMedia.map((link, index) => {
          let {id, url, icon, title} = link
          return (
            <a
              href={url}
              title={title}
              key={index}
              id={`social-link-${id}`}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              {icon}
            </a>
          )
        })}
      </article>
    </section>
  )
}

export default App
