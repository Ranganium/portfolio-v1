import { Link } from "react-router-dom";
import Logo from "../assets/jk-logo.svg";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <Link to="/">Hjem</Link>
      <a href="/#projekter">Projekter</a>
      <Link to="/om-mig">Om mig</Link>
      <a href="/#kontakt">Kontakt</a>
    </nav>
  );
}

export default Navbar;
