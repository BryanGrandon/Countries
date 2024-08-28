import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <article className="footer__main default-size">
        <section className="footer__main-social">
          <hr className="footer__main-social__hr" />
          <section className="social">
            <a
              href="https://github.com/BryanGrandon"
              target="__blank"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a target="__blank" className="social-icon">
              <FaLinkedin />
            </a>
          </section>
          <hr className="footer__main-social__hr" />
        </section>

        <section className="footer__main-info">
          <h3 className="footer__main-info__h3">BG.Code</h3>
          <p className="footer__main-info__copyright">
            Copyright <FaCopyright /> 2024 BG.Code, Inc.
          </p>
          <section className="footer__main-info__links">
            <a className="footer__main-info__links-link">Legal information</a>
            <a className="footer__main-info__links-link">Privacy policy</a>
          </section>
        </section>
      </article>
    </footer>
  );
}

export default Footer;
