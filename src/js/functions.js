export function sayHello(isReversed) {
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
