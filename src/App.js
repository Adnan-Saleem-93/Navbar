import React, {useState} from "react";
import "./App.css";
import {SocialMedia, NavLinks} from "./constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section className="navbar">
      <h1 className="home">
        <a href="/">NavApp</a>
      </h1>
      <article className="nav-links">
        {NavLinks.map((link, index) => {
          let {id, url, text} = link;
          return (
            <a className="nav-item" key={index} href={url} id={`link-${id}`}>
              {text}
            </a>
          );
        })}
      </article>
      <article className="social-media">
        {SocialMedia.map((link, index) => {
          let {id, url, icon, title} = link;
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
          );
        })}
      </article>
      <FontAwesomeIcon
        icon={faBars}
        className="nav-toggle"
        onClick={() => setShowLinks(!showLinks)}
      />
    </section>
  );
}

export default App;
