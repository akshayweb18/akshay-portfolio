import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactus = ({ colors }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wjikpjv",   // replace with your EmailJS service ID
        "template_84sd4uz",  // replace with your EmailJS template ID
        form.current,
        "oR2gsamIHIrMPB-DO"    // replace with your EmailJS public key
      )
      .then(
        (result) => {   
          console.log(result.text);
          alert("Message sent successfully ✅");
          e.target.reset(); // clear form 
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <section
      className={colors ? "navbar-light profile" : "navbar-dark profile"}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="forms-flex">
              {/* Left Side Form */}
              <div className="form-part-left">
                <div className="contact-form-container">
                  <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <h2>Contact Me</h2>

                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="user_email"
                      required
                    />
                    <textarea
                      placeholder="Your Message"
                      rows="5"
                      name="message"
                      required
                    ></textarea>

                    <button type="submit">Send</button>
                  </form>
                </div>
              </div>

              {/* Right Side Contact Info */}
              <div className="right-side">
                <div>
                  <h4>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                    akshayweb18@gmail.com
                  </h4>
                  <h4>
                    <i className="fa fa-phone" aria-hidden="true"></i> 8108645091
                  </h4>
                  <h4>
                    <i className="fa fa-map-marker" aria-hidden="true"></i> New
                    Panvel
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
