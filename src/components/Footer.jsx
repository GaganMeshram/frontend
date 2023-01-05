import React from "react";
import { GiPoliceBadge } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="container-fluid sticky-bottom">
      <div className="row bg-dark">
        <div className="text-white col">
          <div className="d-flex text-center justify-content-around mt-3">
            <p>
              <span className="mx-1">
                <FaLinkedin size="30px" />
              </span>
              <a
                target="_blank"
                href="https://linkedin.com/in/gagan-meshram
"
              >
                Linkedin
              </a>
            </p>
            <p>
              <span className="mx-1">
                <FaGithub size="30px" />
              </span>
              <a target="blank" href="https://github.com/GaganMeshram">
                Github
              </a>
            </p>
          </div>
        </div>
        <div className="text-white col">
          <div class="text-center p-3">
            © 2023 Copyright:
            <a className="mx-1" href="mailto:gmeshram774@gmail.com?subject=Regarding%20Job%20Opening%20At&body=Hello%20Gagan%2C%0A%0A%0AThanks%0AYour%20Name">
              GaganMeshram.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
