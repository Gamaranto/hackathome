import ReactGA from "react-ga";

export function initGA(trackingId, options = {}) {
  ReactGA.initialize(trackingId, options);
}

export function pageView() {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export function Event(category, action, label) {
  ReactGA.event({
    category,
    action,
    label
  });
}
