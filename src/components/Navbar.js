import logo from '../images/logo.svg'
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="backroads"/>
                        <button type="button" className="nav-toggle" id="nav-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    {/* <!-- left this comment on purpose --> */}
                    <PageLinks aClassName={"nav-link"} ulClassName="nav-links" ulId="nav-links"  />

                    <ul className="nav-icons">
                        {socialLinks.map((link) => {
                            const { id, url, icon } = link;
                            return (
                                <li key={id}>
                                    <a href={url} target="_blank" rel="noreferrer" className="nav-icon"
                                    ><i className={icon}></i
                                    ></a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;