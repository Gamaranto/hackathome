import React, { useState } from "react";

import Modal from "../elements/Modal";
import Button from "../elements/Button";
import TypeForm from "./Typeform";

import { Event } from "../../tracking";

export default function FormModal() {
  let [modalActive, setModal] = useState(false);

  return (
    <div className="container-xs">
      <div className="center-content">
        <Button
          color="secondary"
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
  );
}
