import { Link } from "react-router-dom";
import Logo from "../assets/jk-logo.svg";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <div>
        <Link className="nav-text" to="/">
          Hjem
        </Link>
        <a className="nav-text" href="/#projekter">
          Projekter
        </a>
        <Link className="nav-text" to="/om-mig">
          Om mig
        </Link>
        <div className="cta-button">
          <a className="nav-text" href="/#kontakt">
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
