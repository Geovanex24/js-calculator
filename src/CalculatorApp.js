import html from "./calculator.html?raw";

export const CalculatorApp = (elementId) => {
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
  })();
};
