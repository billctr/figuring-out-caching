export function sayHello(isReversed) {
  const message = "Hello world!";
  const reversedMessage = message.split("").reverse.join("");

  console.log(isReversed ? reversedMessage : message);
}

export function appendImage(image) {
  const imgEl = document.createElement("img");
  imgEl.src = image;
  imgEl.style.width = "100px";

  document.body.append(img);
}
