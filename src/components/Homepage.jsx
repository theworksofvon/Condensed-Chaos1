import React, { useState, useEffect } from "react";
import {
  connectWallet,
  getActiveAccount,
  disconnectWallet,
} from "../utils/wallet";

import heroImg from "../img/hero.png";
import heroImg2 from "../img/hero2.png";
import heroImg3 from "../img/hero3.png";
import heroImg4 from "../img/hero4.png";

const Homepage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [wallet, setWallet] = useState(false);

  const handleConnectWallet = async () => {
    const { wallet } = await connectWallet();
    setWallet(wallet);
  };
  const handleDisconnectWallet = async () => {
    const { wallet } = await disconnectWallet();
    setWallet(wallet);
  };

  useEffect(() => {
    const func = async () => {
      const account = await getActiveAccount();
      if (account) {
        setWallet(account.address);
      }
    };
    func();
  }, []);

  let openMenu;

  if (showMenu) {
    openMenu = (
      <ul className="open-menu">
        <ion-icon
          name="close-outline"
          onClick={() => setShowMenu(!showMenu)}
        ></ion-icon>
        <li>
          <a href="">Connect</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
      </ul>
    );
  }

  return (
    <div className="container">
      <header className="nav">
        <h2 className="nav-title">
          Condensed
          <span>Chaos</span>
        </h2>
        <svg
          viewBox="0 0 100 80"
          width="40"
          height="25"
          onClick={() => setShowMenu(!showMenu)}
        >
          <rect width="80" height="10"></rect>
          <rect y="30" width="80" height="10"></rect>
          <rect y="60" width="80" height="10"></rect>
        </svg>

        <ul className="nav-items">
          <li>
            <a
              href="#"
              onClick={wallet ? handleDisconnectWallet : handleConnectWallet}
            >
              {wallet
                ? wallet.slice(0, 4) +
                  "..." +
                  wallet.slice(wallet.length - 4, wallet.length)
                : "Connect"}
            </a>
          </li>
          <li className="unique-item">
            <a href="">About</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
        </ul>
        {openMenu}
      </header>

      <div className="hero">
        <div className="top">
          <div className="hero-title">
            <h2>
              Condensed <span className="span-a">Chaos</span>
            </h2>
            <h3>
              an on-chain <span className="span-a">generative art</span> project
              of <span className="span-b">1111</span> pieces
            </h3>
            <h1>By Von from WoV</h1>
          </div>
        </div>
        <div className="middle">
          <div className="img-1">
            <img src={heroImg} alt="" />
          </div>
          <div className="img-1">
            <img src={heroImg2} alt="" />
          </div>
          <div className="img-1">
            <img src={heroImg3} alt="" />
          </div>
          <div className="img-1">
            <img src={heroImg4} alt="" />
          </div>
        </div>
        <div className="bottom">
          {wallet ? (
            <button type="button">View Art</button>
          ) : (
            <button type="button" onClick={handleConnectWallet}>
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
