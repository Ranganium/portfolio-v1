import aboutPattern from "../assets/about-pattern.svg";
import JeppeBillede from "../assets/jeppe-billede.jpg";
import figmaLogo from "../assets/figma-logo.svg";
import illustratorLogo from "../assets/illustrator-logo.svg";
import cssLogo from "../assets/css-logo.svg";
import htmlLogo from "../assets/html-logo.svg";
import reactLogo from "../assets/react-logo.svg";
import javascriptLogo from "../assets/javascript-logo.svg";
import githubLogo from "../assets/github-logo.svg";
import gitLogo from "../assets/git-logo.svg";

function AboutMePage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <img src={aboutPattern} aria-hidden="true" />
        <h1>hvem er jeppe</h1>
      </section>
      <div className="about-grid">
        <div className="about-column">
          <div className="about-bio">
            <p>Hej!</p>
            <p>
              Mit navn er Jeppe. Jeg kommer fra en lille by i Vestjylland kaldet
              Ådum.
            </p>
            <p>
              Jeg brænder for at lave digitale, brugercentrerede løsninger med
              brug af intuitivt design og funktionel kodning.
            </p>
            <p>
              På det seneste har jeg også fået en begejstring for databaser, som
              jeg gerne vil lære endnu mere om.
            </p>
            <p>
              Min personlighedstype er "Beskytter" (ISFJ-T). Som person er jeg
              empatisk og håber andre har det godt.
            </p>
          </div>
          <div className="about-testimonial">
            <h3>Testimonial</h3>
            <p>
              ”Jeppe har en systematisk tilgang til opgaver, og det har været en
              stor hjælp i forhold til effektiviseringen af vores produktramme.
            </p>
            <p>
              Jeppe er ansvarlig, arbejdsom, loyal og en rigtig god kollega. Vi
              kan derfor give Jeppe Kristensen vores bedste anbefalinger”
            </p>
            <p>
              <strong>Erik Hein</strong>, Soldaterhjemsleder
            </p>
          </div>
        </div>

        <div className="about-column">
          <div className="image-wrapper">
            <img src={JeppeBillede} alt="billede af Jeppe" />
          </div>

          <div className="tool-box">
            <h3>Værktøjskasse</h3>
            <div className="tool-box-stuff">
              <div className="about-icons">
                <img src="" alt="Figma" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
