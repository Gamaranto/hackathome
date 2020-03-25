import React from "react";
// import section header
import SectionHeader from "../components/sections/partials/SectionHeader";
// import sections
import HeroSplit from "../components/sections/HeroSplit";
//import Cta from "../components/sections/Cta";
import Clients from "../components/sections/Clients";
import FAQ from "../components/sections/FAQ";
import GenericSection from "../components/sections/GenericSection";
import FeaturesTiles from "../components/sections/FeaturesTiles";

import FormModal from "../components/sections/FormModal";

class Home extends React.Component {
  state = {
    videoModalActive: false
  };
  openModal = e => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  };

  closeModal = e => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  render() {
    const genericSection01Header = {
      title: "Convito?",
      paragraph: "Unisciti a noi e crea cose meravigliose."
    };

    return (
      <>
        <HeroSplit className="illustration-section-01" />

        <GenericSection className="center-content">
          <FeaturesTiles topDivider className="center-content" />
          <FAQ />
        </GenericSection>

        <GenericSection className="center-content">
          <SectionHeader
            data={genericSection01Header}
            className="reveal-from-bottom"
          />

          <FormModal />
        </GenericSection>
      </>
    );
  }
}

export default Home;
