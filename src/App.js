import React from "react";
import "./App.css";
import {SocialMedia, NavLinks} from "./constants";

function App() {
  return (
    <section className="navbar">
      <h1 className="home">
        <a href="/">Nav App</a>
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
            >
              {icon}
            </a>
          );
        })}
      </article>
    </section>
  );
}

export default App;
