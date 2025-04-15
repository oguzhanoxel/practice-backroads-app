import { socialLinks } from "../data";
import PageLinks from "./PageLinks";

const Footer = () => {
    return (
        <>
            <footer className="section footer">
                <PageLinks aClassName={"footer-link"} ulClassName="footer-links" ulId="footer-links"  />
                <ul className="footer-icons">
                    {socialLinks.map(link => {
                        return (
                            <li key = {link.id}>
                                <a href={link.url} target="_blank" className="footer-icon"
                                ><i className={link.icon}></i
                                ></a>
                            </li>
                        );
                    })}
                </ul>
                <p className="copyright">
                    copyright &copy; Backroads travel tours company
                    <span id="date">{new Date().getFullYear()}</span> all rights reserved
                </p>
            </footer>
        </>
    )
}

export default Footer;