import React, { useState } from "react";
import GenericSection from "./GenericSection";
import SectionHeader from "./partials/SectionHeader";
import Modal from "../elements/Modal";
import Button from "../elements/Button";
import TypeForm from "./Typeform";

export default function HowItWorks() {
  let [modalActive, setModal] = useState(false);
  let genericSection01Header = {
    title: "Come funziona?"
  };
  return (
    <GenericSection className="center-content">
      <SectionHeader
        data={genericSection01Header}
        className="reveal-from-bottom"
      />
      <p className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="300">
        Hack@Home si svolgerà online il 28 e 29 Marzo 2020. I nostri concorrenti
        avranno 24 ore per sviluppare una soluzione per aiutare le persone più
        colpite dall'emergenza COVID-19. L'evento sarà in livestream su Youtube
        ed alteneremo interviste ad imprenditori Italiani e progresso dei
        concorrenti.
      </p>
      <p className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="300">
        La sera di Domenica la nostra giuria proclamerà l'app più innovativa che
        vincerà i premi messi a disposizione dai nostri sponsor.
      </p>
      <p className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="300">
        Programmatori, creativi e chiunque voglia dedicarsi ad una giusta causa
        può partecipare!
      </p>
      <div className="container-xs">
        <div className="center-content">
          <Button
            color="primary"
            aria-controls="demo-modal"
            onClick={() => {
              Event("CTA", "User pressed Iscrivimi!", "CTA Modal Button");
              setModal(true);
            }}
          >
            Conta su di me!
          </Button>
          <div className="text-xxs mt-16" style={{ color: "white" }}>
            Più di <span className="accent">64</span> persone hanno già
            confermato la loro iscrizione!
          </div>
        </div>
        <Modal
          id="demo-modal"
          show={modalActive}
          handleClose={() => setModal(false)}
        >
          <div className="center-content">
            <TypeForm
              url="https://hackathome.typeform.com/to/VkEqn0"
              style={{ width: "80%", height: "80%" }}
            />
          </div>
        </Modal>
      </div>
    </GenericSection>
  );
}
