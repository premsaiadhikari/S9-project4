import { Link,useLocation } from "react-router-dom";
import React from "react";
import "./styles.css";

function Contact() {
  const location = useLocation();
  return (
    <>
      {/* NAVBAR ONLY FOR CONTACT PAGE */}
      <div className="head">
        <Link to="/" state={{course:"cse"}}>Main</Link>
                <Link to="/home"  state={{course:"cse"}}>Home</Link>
                <Link to="/about" state={{course:"cse"}}>About</Link>
                <Link to="/contact"  state={{course:"cse"}}o>Contact</Link>
                <br></br>
                <p>im belongs to----{location.state?.course}</p>
      </div>

      {/* CONTACT CARD */}
      <div className="contact-container">
        <div className="contact-card">

          <img src="/src/assets/comicfigure.jpg" alt="Student" className="profile-pic" />

          <h2>Prem sai</h2>
          <p className="student-id">University ID: 2500030209</p>

          <div className="info">
            <p><b>University:</b> KL University</p>
            <p><b>Department:</b>CSE</p>
            <p><b>Email:</b> premsaiadhikari@gmail.com</p>
            <p><b>Phone:</b> +91 8309988543</p>
            <p><b>Address:</b>Vijayawada, guntur, vaddeswaram</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
