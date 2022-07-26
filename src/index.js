function handleRedirect(url) {
  window.location.href = url;
}

function navigating() {
  const navButtons = document.querySelectorAll("button[data-route]");

  navButtons.forEach((el) => {
    el.onclick = () => {
      handleRedirect(el.dataset.route);
    };
  });
}

async function routing() {
  const route = window.location.pathname;

  switch (route) {
    case "/":
      const { sayHello, appendImage } = await import("./js/functions");

      sayHello();

      let image;
      if (process.env.IMAGE_2) {
        image = require("./assets/photo2.png");
      } else {
        image = require("./assets/photo1.webp");
      }
      appendImage(image);

      break;
    default:
      const { appendText } = await import("./js/functions");

      appendText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere, lacus sed ultrices laoreet, arcu odio mattis risus, sit amet bibendum tortor magna sollicitudin sem. Donec elit sem, convallis scelerisque diam ut, luctus hendrerit purus. Suspendisse tempor nisi vitae neque suscipit iaculis. Phasellus sit amet nunc egestas, venenatis massa quis, lacinia justo. Aliquam ultrices hendrerit leo, non tincidunt diam tempor lobortis. Curabitur pharetra in tellus eu pulvinar. Integer quis nibh iaculis, ultrices leo ac, feugiat erat. Cras at congue ligula, non consequat enim."
      );
      appendText(route);

      break;
  }
}

routing();
navigating();
