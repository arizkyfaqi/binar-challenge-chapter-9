/* eslint-disable */
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              SUWIT <i class="fas fa-ghost"></i>
            </Link>
          </div>
          <small class="website-rights"></small>
          <div class="social-icons">
            <a
              href="https://facebook.com"
              class="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              href="https://instagram.com"
              class="social-icon-link instagram"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>

            <a
              href="https://twitter.com"
              class="social-icon-link twitter"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </a>
            <a
              href="https://youtube.com"
              class="social-icon-link youtube"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </a>
            <a
              href="https://linkedin.com"
              class="social-icon-link linkedin"
              target="_blank"
              aria-label="Linkedin"
            >
              <i class="fab fa-linkedin" />
            </a>
            {/* <Link
              class="social-icon-link facebook"
              to="/path"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
