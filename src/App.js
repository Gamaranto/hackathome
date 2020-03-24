import React from "react";
import { withRouter, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";

//GA stuff

import { initGA, pageView } from "./tracking";

let trackingId = "UA-161781298-1";

class App extends React.Component {
  componentDidMount() {
    document.body.classList.add("is-loaded");
    this.refs.scrollReveal.init();
    initGA(trackingId);
    pageView();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
    }
  }

  render() {
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          </Switch>
        )}
      />
    );
  }
}

export default withRouter(props => <App {...props} />);
