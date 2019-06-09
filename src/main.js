import App from "./App";
import "chart.js";
import "./assets/styles/main.scss";
const app = new App({
  target: document.querySelector("#app-root")
});

window.app = app;

export default app;
