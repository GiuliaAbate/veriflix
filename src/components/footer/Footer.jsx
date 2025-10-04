
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <Link to="/originals">Originals</Link>
                    <Link to="/music-videos">Music Videos</Link>
                    <Link to="/discography">Discography</Link>
                    <Link to="/entertainment">Entertainment</Link>
                    <Link to="/performances">Performances</Link>
                    <Link to="/cast">Cast</Link>
                </div>

                <div className="footer-text">
                    <p>© {new Date().getFullYear()} | Made by beriyongs</p>
                    <p>
                        This website is a fan-made project and created for compilation purposes.
                        I do not own the content posted and rights go to their owners.
                    </p>

                    <div className="footer-socials">
                        <p>Follow VERIVERY on:</p>
                        <div className="social-icons">
                            <a
                                href="https://www.youtube.com/@VERIVERY"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Youtube"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="https://www.instagram.com/the_verivery/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://x.com/the_verivery"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="twitter.com/by_verivery"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://www.tiktok.com/@the_verivery"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                            >
                                <FaTiktok />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;