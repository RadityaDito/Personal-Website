import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profPic from "./Images/profile-pic.jpg";

function HeroSection() {
  return (
    <section id="home">
      <div className="jumbotron text-center bg-dark text-light" id="home">
        <img
          className="photo rounded-circle img-thumbnail"
          src={profPic}
          alt="Foto"
        />
        <h1> Raditya Ihsan Dhiaulhaq </h1>
        <p>Computer Engineering | University of Indonesia</p>
      </div>
    </section>
  );
}

export default HeroSection;
