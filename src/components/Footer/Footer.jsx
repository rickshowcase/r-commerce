import "./Footer.css";
import Link from "next/link";

import ContactForm from "../ContactForm/ContactForm";

const Footer = () => {
  return (
    <>
      <ContactForm />

      <footer>
        <div className="container">
          <div className="footer-row">
            <div className="footer-col">
              <div className="footer-col-header">
                <p className="bodyCopy">Pages</p>
              </div>
              <div className="footer-col-links">
                <Link href="/">Home</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/about">About</Link>
                <Link href="/lookbook">Lookbook</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-col-header">
                <p className="bodyCopy">Follow</p>
              </div>
              <div className="footer-col-links">
                <a
                  href="https://www.instagram.com/rickshowcaseig/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@rickshowcaseyt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-col-header">
                <p className="bodyCopy">Location</p>
              </div>
              <div className="footer-col-links">
                <p>Markham, Ontario</p>
                <p>Canada</p>
              </div>
            </div>
          </div>
          <div className="footer-row">
            <div className="footer-copyright">
              <h5>R Commerce</h5>
              <p className="bodyCopy">&copy;2026 All modules reserved.</p>
              <p className="bodyCopy" id="copyright-text">
                BUILT BY RICK
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
