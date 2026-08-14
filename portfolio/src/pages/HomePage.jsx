import heroPattern from "../assets/hero-pattern.svg";
import scrollArrow from "../assets/scroll-arrow.svg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>JEPPE KRISTENSEN</h1>
          <p>
            Jeg kan godt lide finde ud af, hvordan ting fungerer, så jeg selv
            kan lave <br />
            det. Jeg brænder for at skabe brugercentrerede digitale <br />
            løsninger
          </p>
          <div className="small-hyper-button">
            <Link to="/om-mig">LÆS MERE OM MIG</Link>
          </div>
          <img src={heroPattern} aria-hidden="true" />
          <div className="hero-scroll" aria-hidden>
            <img src={scrollArrow} />
            <span>SCROLL</span>
          </div>
        </div>
      </section>
      <section className="projekts-section"></section>
      <section className="contact-section"></section>
    </div>
  );
}

export default HomePage;
