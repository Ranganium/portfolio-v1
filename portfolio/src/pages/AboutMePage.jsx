// Mønster
import aboutPattern from "../assets/about-pattern.svg";
// billede
import JeppeBillede from "../assets/jeppe-billede.jpg";
// Logoer og ikoner
import figmaLogo from "../assets/figma-logo.svg";
import illustratorLogo from "../assets/illustrator-logo.svg";
import cssLogo from "../assets/css-logo.svg";
import htmlLogo from "../assets/html-logo.svg";
import reactLogo from "../assets/react-logo.svg";
import javascriptLogo from "../assets/javascript-logo.svg";
import githubLogo from "../assets/github-logo.svg";
import gitLogo from "../assets/git-logo.svg";
import trainingIcon from "../assets/training-icon.svg";
import gameIcon from "../assets/game-icon.svg";
import bakingIcon from "../assets/baking-icon.svg";
import questioningIcon from "../assets/questioning-icon.svg";
// props
import ImgPoint from "../components/ImgPoint.jsx";
import AcordionMenu from "../components/AcordionMenu.jsx";

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
                <img src={figmaLogo} alt="Figma" />
                <img src={illustratorLogo} alt="Adobe Illustrator" />
              </div>
              <span>Design & prototyping</span>
            </div>
            <div className="tool-box-stuff">
              <div className="about-icons">
                <img src={cssLogo} alt="CSS" />
                <img src={htmlLogo} alt="HTML" />
                <img src={reactLogo} alt="React" />
                <img src={javascriptLogo} alt="JavaScript" />
              </div>
              <span>Frontendudvikling</span>
            </div>
            <div className="tool-box-stuff">
              <div className="about-icons">
                <img src={githubLogo} alt="GitHub" />
                <img src={gitLogo} alt="git" />
              </div>
              <span>Samarbejde & versionsstyring</span>
            </div>
          </div>
        </div>

        <div className="about-column">
          <div className="interests-box">
            <h3>Interesser</h3>
            <div className="interest-box">
              <ImgPoint img={trainingIcon} point="Træning" />
              <ImgPoint img={gameIcon} point="Spille masser af computer" />
              <ImgPoint img={bakingIcon} point="Bagning & generel madlavning" />
              <ImgPoint
                img={questioningIcon}
                point="Finde ud af hvorfor ting fungerer"
              />
            </div>
          </div>

          <div className="experience-box">
            <h3>Erfaring</h3>
            <div>
              <AcordionMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
