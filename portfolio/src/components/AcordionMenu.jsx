import { useState } from "react";

import ImgPoint from "./ImgPoint.jsx";

import acordionOpen from "../assets/acordion-open.svg";
import acordionClose from "../assets/acordion-close.svg";

import educationIcon from "../assets/education-icon.svg";
import workIcon from "../assets/work-icon.svg";
import volonteerIcon from "../assets/volonteer-icon.svg";
import europeanIcon from "../assets/european-icon.svg";

function AcordionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAcordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="acordion-point">
        <div className="experience-element">
          <div className="experience-overview">
            <ImgPoint
              img={educationIcon}
              point="HTX-linjen Kommunikation & IT A og Design B"
            />
            <div className="compentencies">
              <p>Testmetoder</p>
              <div className="orange-cirkle"></div>
              <p>Digitalet design</p>
              <div className="orange-cirkle"></div>
              <p>Samarbejde</p>
              <div className="orange-cirkle"></div>
            </div>
          </div>
          <button className="toggle-btn" onClick={toggleAcordion}>
            <img
              src={isOpen ? acordionClose : acordionOpen}
              alt={isOpen ? "Luk" : "åbn"}
            />
          </button>
        </div>
        {isOpen && (
          <div className="acordion-discription">
            <p>
              Jeg gik 3 år på HTX i Skjern (2021-2024) med linjen Kommunikation
              og IT, hvor vi lavede grafisk design og print design i Adobe
              Illustrator og andre programmer.
            </p>
            <p>
              Jeg havde Digital Design & Udvikling som teknikfag. Her skulle man
              lave spil i Unity. I mit team fungerede jeg hovedsageligt som
              designer af de forskellige dele af spillet.
            </p>
          </div>
        )}
      </div>

      <div className="acordion-point">
        <div className="experience-element">
          <div className="experience-overview">
            <ImgPoint img={workIcon} point="Butiksmedarbejder i købmand" />
            <div className="compentencies">
              <p>Ansvar</p>
              <div className="orange-cirkle"></div>
              <p>Kundeservice</p>
              <div className="orange-cirkle"></div>
              <p>Oplæring</p>
              <div className="orange-cirkle"></div>
            </div>
          </div>
          <button className="toggle-btn" onClick={toggleAcordion}>
            <img
              src={isOpen ? acordionClose : acordionOpen}
              alt={isOpen ? "Luk" : "åbn"}
            />
          </button>
        </div>
        {isOpen && (
          <div className="acordion-discription">
            <p>
              Jeg arbejdede 2,5 år ved Ådum købmand (2022-2024), hvor jeg
              virkelig lærte ansvar og glæden ved at glæde andre.
            </p>
            <p>
              Kundeservice var top prioritet og jeg har haft mange snakke med
              forskellige slags kunder lige fra fulde svajende mænd til virkelig
              alene gamle folk uden andre.
            </p>
          </div>
        )}
      </div>

      <div className="acordion-point">
        <div className="experience-element">
          <div className="experience-overview">
            <ImgPoint
              img={volonteerIcon}
              point="Volontør på KFUM soldaterhjem"
            />
            <div className="compentencies">
              <p>Samarbejde</p>
              <div className="orange-cirkle"></div>
              <p>Selvrealisering</p>
              <div className="orange-cirkle"></div>
            </div>
          </div>
          <button className="toggle-btn" onClick={toggleAcordion}>
            <img
              src={isOpen ? acordionClose : acordionOpen}
              alt={isOpen ? "Luk" : "åbn"}
            />
          </button>
        </div>
        {isOpen && (
          <div className="acordion-discription">
            <p>
              Jeg var volontør på KFUM Soldaterhjem i Varde i 5 måneder i 2024.
              Min hovedsagelige rolle var at lave grillmad til soldater, som
              bestilte. Derudover var jeg også med ude på skydebanerne og solgte
              mad der, når nogen bestilte vognen.
            </p>
            <p>
              Jeg lavede dog andet arbejde, fordi lederen troede på at man
              skulle lave det man var god til. Jeg var mest i opvasken, blev
              også sat til at lave den daglige kage og designe nye skilte
              dertil. Han er også kommet med en anbefaling.
            </p>
            <p>
              ”Jeppe har en systematisk tilgang til opgaver, og det har været en
              stor hjælp i forhold til effektiviseringen af vores produktramme.
              Jeppe er ansvarlig, arbejdsom, loyal og en rigtig god kollega. Vi
              kan derfor give Jeppe Kristensen vores bedste anbefalinger” - Erik
              Hein, Soldaterhjemsleder
            </p>
          </div>
        )}
      </div>

      <div className="acordion-point">
        <div className="experience-element">
          <div className="experience-overview">
            <ImgPoint img={europeanIcon} point="Butiksmedarbejder i købmand" />
            <div className="compentencies">
              <p>Kulturforståelse</p>
            </div>
          </div>
          <button className="toggle-btn" onClick={toggleAcordion}>
            <img
              src={isOpen ? acordionClose : acordionOpen}
              alt={isOpen ? "Luk" : "åbn"}
            />
          </button>
        </div>
        {isOpen && (
          <div className="acordion-discription">
            <p>
              Vi har haft et tværkulturelt projekt med studerende fra Holland,
              hvor vi skulle lave en oplevelse, som skulle fremme kulturel
              forståelse.
            </p>
            <p>
              Derudover har jeg været på et udvekslingsforløb med nogle elever
              fra Italien, hvor vi tog til Italien og oplevede deres kultur ved
              at bo individuelt ved deres familier.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default AcordionMenu;
