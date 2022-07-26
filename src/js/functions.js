export function sayHello() {
  const message = "Hello world!";
  const reversedMessage = message.split("").reverse().join("");

  console.log(process.env.REVERSED_WELCOME ? reversedMessage : message);
}

export function appendImage(image) {
  const imgEl = document.createElement("img");
  imgEl.src = image;
  imgEl.style.width = "150px";

  document.body.append(imgEl);
}

export function appendText(text) {
  const reversedText = text.split("").reverse().join("");

  const div = document.createElement("div");
  div.classList.add("lorem-ipsum");
  div.innerText = process.env.REVERSED_WELCOME ? reversedText : text;

  document.body.append(div);
}
