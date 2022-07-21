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

export function loremIpsum() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere, lacus sed ultrices laoreet, arcu odio mattis risus, sit amet bibendum tortor magna sollicitudin sem. Donec elit sem, convallis scelerisque diam ut, luctus hendrerit purus. Suspendisse tempor nisi vitae neque suscipit iaculis. Phasellus sit amet nunc egestas, venenatis massa quis, lacinia justo. Aliquam ultrices hendrerit leo, non tincidunt diam tempor lobortis. Curabitur pharetra in tellus eu pulvinar. Integer quis nibh iaculis, ultrices leo ac, feugiat erat. Cras at congue ligula, non consequat enim.";
  const reversedText = text.split("").reverse().join("");

  const div = document.createElement("div");
  div.classList.add("lorem-ipsum");
  div.innerText = process.env.REVERSED_WELCOME ? reversedText : text;

  document.body.append(div);
}
