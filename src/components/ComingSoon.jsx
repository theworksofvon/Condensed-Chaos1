import ccGif from "../img/cc.gif";

const ComingSoon = ({ time }) => {
  return (
    <div>
      <header className="coming-soon">
        <img className="art-gif" src={ccGif} alt="" />
        <div className="content">
          <h1>
            CONDENSED <span> CHAOS</span>
          </h1>
          <h2>MINT DAY: MAY 5TH</h2>
          <div className="countdown">{time}</div>
          <a
            href="https://twitter.com/1condensedchaos"
            rel="noreferrer"
            target="_blank"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            href="https://discord.gg/fPAtNA5HwF"
            rel="noreferrer"
            target="_blank"
          >
            <ion-icon name="logo-discord"></ion-icon>
          </a>
        </div>
      </header>
    </div>
  );
};

export default ComingSoon;
