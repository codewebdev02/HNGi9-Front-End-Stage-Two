import "./style.scss";

export default function Contact() {
    function handleSubmit(e) {
        e.preventDefault();
      }

  return (
    <div className="container contact">
      <div className="title">
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-input-container">
            <div className="form-field">
                <label htmlFor="First name">First name
                    <input type="text" id="first_name" placeholder="Enter your first name" />
                </label>
                <label htmlFor="Last name">First name
                    <input type="text" id="last_name" placeholder="Enter your last name" />
                </label>
            </div>
            <label htmlFor="Email">Email
                <input type="text" id="email" placeholder="yourname@email.com" />
            </label>
            <label htmlFor="Message">Message
                <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
            </label>
        </div>
        <div className="form_footer">
            <label className="agree">You agree to providing your data to Eaxysunshine who may contact you.
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <button type="submit" id="btn__submit">Send message</button>
        </div>
      </form>
    </div>
  );
}
