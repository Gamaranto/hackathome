import React from "react";
// import section header
import SectionHeader from "../components/sections/partials/SectionHeader";
// import sections
import HeroSplit from "../components/sections/HeroSplit";
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
      title: "Built exclusively for you",
      paragraph:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui."
    };

    return (
      <>
        <HeroSplit className="illustration-section-01" />
        <GenericSection topDivider className="center-content">
          <FeaturesTiles topDivider className="center-content" />
          <SectionHeader
            data={genericSection01Header}
            className="reveal-from-bottom"
          />
          <FormModal />
        </GenericSection>

        <FAQ />
      </>
    );
  }
}

export default Home;
