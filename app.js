const API_KEY = "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";

async function getCompletion(prompt) {
  const response = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      // prompt: "give a random example of programming language",
      prompt: prompt,
      max_tokens: 20,
    }),
  });

  const data = await response.json();
  // console.log(data)
  return data;
}

// getCompletion()

const prompt = document.querySelector("#prompt");
const button = document.querySelector("#generate");
const output = document.querySelector("#output");

button.addEventListener("click", async () => {
  console.log(prompt.value);

  if (!prompt.value) window.alert("Please enter a prompt");

  const response = await getCompletion(prompt.value);
  console.log(response);
  output.innerHTML = response.choices[0].text;
});
