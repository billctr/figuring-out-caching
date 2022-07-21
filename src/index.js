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
    case "/route":
      const { loremIpsum } = await import("./js/functions");

      loremIpsum();

      break;
    default:
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
  }
}

routing();
navigating();
