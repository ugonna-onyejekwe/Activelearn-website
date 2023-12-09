import "./contact.scss";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export const Contact_us = () => {
  return (
    <>
      <div className="page_header">
        <div className="container">
          <h2>get intouch with us</h2>
          <div className="nav">
            <h3>home</h3>
            <h3>.</h3>
            <h3>contact us</h3>
          </div>
        </div>
      </div>

      <div className="contact_wrapper container">
        <div className="contact_form">
          <h2>get intouch</h2>
          <p className="subtitle">
            Have a question or just wanna say hi?, we will love to hear from
            you.
          </p>

          <form action="#">
            <div className="col">
              <div className="box">
                <input type="text" placeholder="your name" />
              </div>
              <div className="box">
                <input type="text " placeholder="your email" />
              </div>
            </div>

            <div className="box">
              <input type="text " placeholder="your subject" />
            </div>
            <div className="box">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="your message"
              ></textarea>
            </div>

            <div className="btn">
              <button>send message</button>
            </div>
          </form>
        </div>

        <div className="detail_container">
          <div className="box">
            <LocationOnIcon className="icon" />
            <div>
              <h3>new york office</h3>
              <p>maryport current 70-00 upper st</p>
              <p>miorwich no.2 tlt</p>
            </div>
          </div>

          <div className="box">
            <EmailIcon className="icon" />

            <div>
              <h3>email us directly</h3>
              <p>support@gmail.com</p>
              <p>info@gmail.com</p>
            </div>
          </div>

          <div className="box">
            <LocalPhoneIcon className="icon" />
            <div>
              <h3>phone</h3>
              <p>+234 810 0133 0834</p>
              <p>+234 810 4533 0854</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
