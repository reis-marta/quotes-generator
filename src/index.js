function displayQuote(response) {
  console.log("quote generated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9acdto94b375141ee94cef3fb0023d6b";
  let prompt = `generate a quote about ${instructionsInput.value}`;
  let context =
    "You are a world best quotes expert. Your mission is to generate a quote in basic HTML. Sign the quote, ate the end with `SheCodes AI` in a <strong></strong> element";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳ Generating a quote about ${instructionsInput.value}...</div>`;

  console.log("Genereting quote");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiURL).then(displayQuote);
}

quoteFormElement = document.querySelector("#quote-generator");
quoteFormElement.addEventListener("submit", generateQuote);
