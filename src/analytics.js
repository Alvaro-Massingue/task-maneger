import ReactGA from "react-ga4";

// Inicializa GA
export const initGA = () => {
  ReactGA.initialize("G-XXXXXXXXXX"); // substitua pelo seu ID
};

// Envia pageview
export const pageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
