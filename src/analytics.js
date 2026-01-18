import ReactGA from "react-ga4";

// Inicializa GA
export const initGA = () => {
  ReactGA.initialize("G-MN3L7KFQ7P");
};

// Envia pageview
export const pageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
