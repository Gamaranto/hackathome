import React, { useState } from "react";

import Modal from "../elements/Modal";
import Button from "../elements/Button";
import GenericSection from "./GenericSection";
import SectionHeader from "./partials/SectionHeader";
import TypeForm from "./Typeform";

export default function FinalCTA() {
  let [modalActive, setModal] = useState(false);
  let genericSection01Header = {
    title: "Convinto?"
  };
  return (
    <GenericSection className="center-content">
      <SectionHeader
        data={genericSection01Header}
        className="reveal-from-bottom"
      />
      <p>
        Se non puoi partecipare, puoi ancora fare la tua parte partecipando alla
        raccolta su fondi su{" "}
        <a href="https://www.gofundme.com/hackhome-sostieni-gli-ospedali-della-lombardia">
          <span style={{ color: "white" }}>GoFundMe</span>
        </a>{" "}
        o condividendo l'evento con i tuoi amici.
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
            Conta su di me
          </Button>
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
