import { useState } from "react";
import "./Contact.css";
import { useEffect } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let timer;
    if (errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [errorMessage]);

  const sendFormHandle = () => {
    if (!fullName || !email || !message) {
      setErrorMessage("Tüm Alanları Doldurunuz !!!");
      return;
    }
    setFullName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-form">
        <label className="contact-form-label" htmlFor="">
          Full Name :
        </label>
        <input
          className="contact-form-input-fullname"
          type="text"
          placeholder="Your Full Name"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
        <label className="contact-form-label" htmlFor="">
          Email Adress :
        </label>
        <input
          className="contact-form-input"
          type="text"
          placeholder="Your Email Adress"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label className="contact-form-label" htmlFor="">
          Message
        </label>
        <textarea
          className="contact-textarea"
          placeholder="Your Message"
          name=""
          id=""
          cols="100"
          rows="3"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        {errorMessage && (
          <p className={`error-message ${!errorMessage && "hidden"}`}>
            {errorMessage}
          </p>
        )}
        <button onClick={sendFormHandle} className="contact-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
