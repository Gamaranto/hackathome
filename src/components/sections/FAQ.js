import React from "react";

import SectionHeader from "./partials/SectionHeader";
import GenericSection from "./GenericSection";
import Accordion from "../elements/Accordion";
import AccordionItem from "../elements/AccordionItem";

export default function FAQ() {
  const genericSection04Header = {
    title: "FAQ - Lorem ipsum is placeholder text commonly used."
  };
  return (
    <GenericSection topDivider>
      <div className="container-xs">
        <SectionHeader
          data={genericSection04Header}
          className="center-content"
        />
        <Accordion>
          <AccordionItem title="Nisi porta lorem mollis aliquam ut." active>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </AccordionItem>
          <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </AccordionItem>
          <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </AccordionItem>
          <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </AccordionItem>
          <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </AccordionItem>
        </Accordion>
      </div>
    </GenericSection>
  );
}
