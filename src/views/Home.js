import React from "react";
// import section header
import SectionHeader from "../components/sections/partials/SectionHeader";
// import sections
import HeroSplit from "../components/sections/HeroSplit";
import FinalCTA from "../components/sections/finalCTA";
import Clients from "../components/sections/Clients";
import FAQ from "../components/sections/FAQ";
import GenericSection from "../components/sections/GenericSection";
import FeaturesTiles from "../components/sections/FeaturesTiles";

import HowItWorks from "../components/sections/HowItWorks";

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
      title: "Convinto?"
    };

    return (
      <>
        <HeroSplit className="illustration-section-01" />
        <GenericSection className="center-content">
          <Clients topDivider bottomDivider />
        </GenericSection>
        <HowItWorks />
        <GenericSection className="center-content">
          <FeaturesTiles topDivider className="center-content" />
          <FAQ />
        </GenericSection>

        <FinalCTA />
      </>
    );
  }
}

export default Home;
