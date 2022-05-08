import React from "react";

const About = () => {
  return (
    <div className="about-main">
      <header className="about-top">
        <h1>About the Project</h1>
        <p>
          <span className="span-b">Condensed</span>
          <span className="span-a">Chaos</span> is a project that explores into
          the realm of metaphysics. It encourages exploration into the unknown.
          90% of the known universe is dark matter. This dark matter is also
          chaos. This project condenses and organizes this chaos into 1111
          pieces.
        </p>
      </header>
      <div className="about-middle">
        <h1>Team</h1>
        <div className="team">
          <h1 className="team-title">Creator / Developer</h1>
        </div>
        <div className="team-items">
          <p>Von</p>
          <a
            href="https://twitter.com/theworksofvon"
            rel="noreferrer"
            target="_blank"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            href="https://www.instagram.com/worksofvon/"
            rel="noreferrer"
            target="_blank"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            href="https://discord.gg/fPAtNA5HwF"
            rel="noreferrer"
            target="_blank"
          >
            <ion-icon name="logo-discord"></ion-icon>
          </a>
        </div>
        <div className="team">
          <h1 className="team-title">Community Manager</h1>
        </div>
        <div className="team-items">
          <p rel="noreferrer" target="_blank">
            Jairus
          </p>
          <a
            href="https://twitter.com/jaisakchasing"
            rel="noreferrer"
            target="_blank"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            href="https://www.instagram.com/jaisakchasing/"
            rel="noreferrer"
            target="_blank"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
