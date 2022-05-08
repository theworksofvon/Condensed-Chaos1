import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-content">
          <h1>Follow Our Socials !</h1>
          <div className="footer-socials">
            <a
              href="https://twitter.com/1condensedchaos"
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
          <p className="footer-last">© 2022 Works of Von | Designed by Von</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
