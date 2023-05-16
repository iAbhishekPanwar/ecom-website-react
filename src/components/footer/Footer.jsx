import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <h5>About Us</h5>
            <p>
              We're just your average, run-of-the-mill company specializing in
              creating "amazing" websites and applications. Nothing too
              extraordinary, really.
            </p>
          </div>
          <div className="col-sm-4">
            <h5>Address</h5>
            <p>Grand Plaza,</p>
            <p>Muzaffarnagar, Uttar Pradesh.</p>
          </div>
          <div className="col-sm-4">
            <h5>Contact Us</h5>
            <p>Phone: 8755 14 xxxx</p>
            <p>Email: imabhishek612@gmail.com</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 text-center">
            <hr />
            <p className="text-muted footer-text">
              &copy; 2023 developed by MaxTechies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
