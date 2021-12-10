// On importe "React" et Link
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // Footer pour le site Groupomonia

    <footer className="bg text-center text-white bg">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          {/* <!-- Facebook --> */}

          <Link
            to="https://fr-fr.facebook.com"
            className="btn btn-primary btn-floating m-1 bg-fb"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>

          {/* <!-- Twitter --> */}

          <Link
            to="https://twitter.com/?lang=fr"
            className="btn btn-primary btn-floating m-1 bg-tw"
          >
            <i className="fab fa-twitter"></i>
          </Link>

          {/* <!-- Instagram --> */}

          <Link
            to="https://www.instagram.com/?hl=fr"
            className="btn btn-primary btn-floating m-1 bg-inst"
          >
            <i className="fab fa-instagram"></i>
          </Link>

          {/* <!-- Linkedin --> */}

          <Link
            to="https://www.linkedin.com/"
            className="btn btn-primary btn-floating m-1 bg-lkd"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </section>
      </div>

      <div className="text-center text-dark fs-5 p-3">
        © 2021 Copyright: Groupomonia
      </div>
    </footer>
  );
};

export default Footer;
