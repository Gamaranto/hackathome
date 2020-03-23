import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

class FeaturesTiles extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "features-tiles section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-tiles-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
      title: "Anche tu puoi fare la tua parte.",
      paragraph:
        "Artisti, programmatori e scienziati hanno un superpotere in comune, riescono a creare dal nulla. Mettiti a disposizione e crea qualcosa da mettere in mano a chi ne ha bisogno."
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} />
            <div className={tilesClasses}>
              <div className="tiles-item reveal-from-right">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require("./../../assets/images/feature-tile-icon-01.svg")}
                        alt="Features tile icon 01"
                        width={72}
                        height={72}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Trova un team</h4>
                    <p className="m-0 text-sm">
                      Chiama amici e colleghi che possono aiutarti a costruire
                      qualcosa di meraviglioso. Se sei da solo ci penseremo noi
                      a trovare il tuo team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-left">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require("./../../assets/images/feature-tile-icon-02.svg")}
                        alt="Features tile icon 02"
                        width={72}
                        height={72}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Per una giusta causa</h4>
                    <p className="m-0 text-sm">
                      Mentre programmi, raccoglieremo fondi da donare in
                      beneficenza agli ospedali Lombardi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-right">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require("./../../assets/images/feature-tile-icon-03.svg")}
                        alt="Features tile icon 03"
                        width={72}
                        height={72}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Dai sfogo alla tua creatività</h4>
                    <p className="m-0 text-sm">
                      Vuoi provare quel framework figo che il tuo capo non ti fa
                      usare a lavoro? Ad hack@home puoi usare qualsiasi
                      tecnologia tu voglia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-left">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require("./../../assets/images/feature-tile-icon-04.svg")}
                        alt="Features tile icon 04"
                        width={72}
                        height={72}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Fai qualcosa che le persone vogliono.
                    </h4>
                    <p className="m-0 text-sm">
                      Alla fine di hack@home, tu e il tuo team dovrete
                      presentare un prodotto funzionante e che sia
                      immediatamente utilizzabile. Non preoccuparti dei server,
                      a quelli penseremo noi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
