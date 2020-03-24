import React from "react";
// import section header
import SectionHeader from "../components/sections/partials/SectionHeader";
// import sections
import HeroSplit from "../components/sections/HeroSplit";
//import Cta from "../components/sections/Cta";
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
      title: "Convinto?",
      paragraph:
        "Pensi di poter aiutare in qualche modo ma non sai come? Scrivici a ciao@hackatho.me"
    };

    return (
      <>
        <HeroSplit className="illustration-section-01" />
        <GenericSection className="center-content">
          <FeaturesTiles topDivider className="center-content" />
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
