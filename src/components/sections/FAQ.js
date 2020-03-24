import React from "react";

import SectionHeader from "./partials/SectionHeader";
import GenericSection from "./GenericSection";
import Accordion from "../elements/Accordion";
import AccordionItem from "../elements/AccordionItem";

export default function FAQ() {
  const genericSection04Header = {
    title: "FAQ"
  };
  return (
    <GenericSection topDivider>
      <div className="container-xs">
        <SectionHeader
          data={genericSection04Header}
          className="center-content"
        />
        <Accordion>
          <AccordionItem title="Dove posso guardare l'evento?">
            Hack@Home sarà in live su{" "}
            <a
              href="https://www.youtube.com/channel/UCkePNg30_31BeplxsYj57PQ"
              className="func-link"
            >
              Youtube
            </a>{" "}
            dalle 11 alle 18 di Sabato 28 Marzo e sempre dalle 11 alle 18 di
            Domenica 29 Marzo.
          </AccordionItem>
          <AccordionItem title="Che cosa posso usare?" active>
            Puoi usare qualsiasi linguaggio di programmazione, libreria, tool
            no-code, papera di gomma, servizio online e codice Open Source se la
            licenza di quest'ultimo lo permette.
          </AccordionItem>
          <AccordionItem title="Devo pagare per iscrivermi?">
            No. L'iscrizione è gratuita ma ti invitiamo a lasciare una donazione
            per gli ospedali a questo{" "}
            <a
              href="https://www.gofundme.com/hackhome-sostieni-gli-ospedali-della-lombardia"
              className="func-link"
            >
              link
            </a>
          </AccordionItem>
          <AccordionItem title="Il prodotto va consegnato o presentato?">
            Il prodotto va presentato alla fine dell’evento, ovvero prima delle
            18 del 29 marzo. Speriamo che la tua creazione sia così utile che
            avrai qualche utente già a partire da lunedì.
          </AccordionItem>
          <AccordionItem title="Posso vendere il mio prodotto?">
            No. Il prodotto dovrà essere completamente gratuito per tutta la
            durata dell'emergenza. Finito l'hackathon, il prodotto è tuo, quindi
            puoi sviluppare funzioni "premium", ti chiediamo però di lasciare le
            funzioni sviluppate durante l'hackathon come gratuite.
          </AccordionItem>
          <AccordionItem title="E se non finisco il progetto?">
            Per essere valutato, al termine della gara dovrai presentare un
            Minimum Viable Product (MVP) utilizzabile. Non preoccuparti che sia
            perfetto, ma deve svolgere le funzioni che si propone di svolgere
            già al termine della gara.
          </AccordionItem>
          <AccordionItem title="Non ho un team, posso iscrivermi?">
            Si! Ci penseremo noi ad abbinarti ad un team in base alle tue
            specialità e al progetto che ti interessa.
          </AccordionItem>
          <AccordionItem title="Abbiamo un team ma siamo meno di 5, possiamo iscriverci?">
            Si. Il numero minimo di persone in un team è 3. Se siete meno di 5 e
            avete richieste particolari lasciatele scritte nella sezione
            "Domande?" e cercheremo di faremo il possibile.
          </AccordionItem>
          <AccordionItem title="Saremo in diretta per tutta la durata dell’hackathon?">
            No. Ogni team verrà periodicamente chiamato dalla presentatrice per
            aggiornamenti o presentazioni. Per il resto del tempo, siete
            autogestiti.
          </AccordionItem>
          <AccordionItem title="Siete anche sui social?">
            Si, abbiamo un evento su{" "}
            <a
              href="https://www.gofundme.com/hackhome-sostieni-gli-ospedali-della-lombardia"
              className="func-link"
            >
              Facebook
            </a>
            , puoi condiverlo con tutti i tuoi amici.
          </AccordionItem>
          <AccordionItem title="Contatti?">
            Per qualsiasi cosa, scrivici a{" "}
            <a href="mailto://ciao@hackatho.me">ciao@hackatho.me</a>
          </AccordionItem>
        </Accordion>
      </div>
    </GenericSection>
  );
}
