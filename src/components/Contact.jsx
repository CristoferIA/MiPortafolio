import React from "react";
import HeaderTitle from "../headerComponent/HeaderTitle";
import "../../public/css/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <HeaderTitle title={"Contact"} myTitle={"My Contac"} />
        <div className="contact__items">
          <form action="">
            <h1>Message Me</h1>
            <input type="text" placeholder="Name *" required/>
            <input type="email" placeholder="example@mail.com *" required/>
            <input type="text" placeholder="Subject *" required/>
            <textarea name="" id="" cols="30" rows="5" placeholder="Message *" required></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
