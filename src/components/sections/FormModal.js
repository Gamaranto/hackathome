import React, { useState } from "react";

import SectionHeader from "./partials/SectionHeader";
import Modal from "../elements/Modal";
import Button from "../elements/Button";
import TypeForm from "./Typeform";

export default function FormModal() {
  let [modalActive, setModal] = useState(false);
  const genericSection03Header = {
    title: "Modal - Lorem ipsum is placeholder text commonly used."
  };
  return (
    <div className="container-xs">
      <div className="center-content">
        <Button
          color="secondary"
          aria-controls="demo-modal"
          onClick={() => setModal(true)}
        >
          Iscrivimi!
        </Button>
      </div>
      <Modal
        id="demo-modal"
        show={modalActive}
        handleClose={() => setModal(false)}
      >
        <div className="center-content">
          <TypeForm
            url="https://antoniomarsella95.typeform.com/to/VkEqn0"
            style={{ width: "80%", height: "80%" }}
          />
        </div>
      </Modal>
    </div>
  );
}
