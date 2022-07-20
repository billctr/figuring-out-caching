import("./js/functions").then(({ sayHello, appendImage }) => {
  sayHello(process.env.REVERSED_WELCOME);

  let image;
  if (process.env.IMAGE_2) {
    image = require("./assets/photo2.png");
  } else {
    image = require("./assets/photo1.webp");
  }
  appendImage(process.env.IMAGE);
});
