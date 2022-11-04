import "./style.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="profileDetails">
        <div className="profileImg">
          <img
            id="profile__img"
            src="https://ca.slack-edge.com/T042F7V19Q8-U048FNHNQB0-8efb94b0e78c-512"
            alt=""
          />
        </div>
        <h1 id="twitter">@eaxysunshine_te</h1>
        <h1 id="slack">@Eaxysunshine</h1>
      </div>
      <div className="link-section">
        <div className="tooltip">
          <a id="btn__zuri" href="https://training.zuri.team/">
            Zuri Team
          </a>
          <span className="tooltiptext">Meet the Zuri Family</span>
        </div>
        <div className="tooltip">
          <a id="books" href="https://books.zuri.team/">
            Zuri Books Store
          </a>
          <span className="tooltiptext">
            You can buy all kinds of tech related books right here on the Zuri
            store
          </span>
        </div>
        <div className="tooltip">
          <a
            id="book__python"
            href="https://books.zuri.team/python-for-beginners?ref_id=Eaxysunshine"
          >
            Python Books Store
          </a>
          <span className="tooltiptext">
            Get in here to get your beginner friendly Python books
          </span>
        </div>
        <div className="tooltip">
          <a id="pitch" href="https://background.zuri.team/">
            Learn and earn
          </a>
          <span className="tooltiptext">
            Learn & Earn Remotely Like Never Before.
          </span>
        </div>
        <div className="tooltip">
          <a id="book__design" href="https://books.zuri.team/design-rules">
            UI/UX Design Books
          </a>
          <span className="tooltiptext">
            The HNG Design Rules Book gives you the tips & guidelines you need
            to create truly professional designs, by addressing errors that
            could you get you disqualified.
          </span>
        </div>
        <a href="/contact" id="contact">
          Contact
        </a>
      </div>
    </div>
  );
}
