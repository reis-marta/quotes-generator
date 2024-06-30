function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Quote will appear here...",
    autoStart: true,
    cursor: "",
    delya: 1,
  });
}

quoteFormElement = document.querySelector("#quote-generator");
quoteFormElement.addEventListener("submit", generateQuote);
