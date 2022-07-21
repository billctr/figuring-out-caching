## Important commits

- Simple page version with npm: `e523d4c7bd18b0be8bd6177b36a399adc428f782`

  - Tags: `v0.0.3-d`, `v0.0.3-r`

- Navigation version with npm: `ea5d8deea507284ff05fb9d77c7a3dfcb7f813f0`

  - Tags: `v0.0.4-d`, `v0.0.4-r`

- Build using yarn: `a9c6627aa9ae7a11c8828cb56fbb5070bb40a333`

## Reproducible steps

### Simple cache checking

To check how cache works, follow these steps:

- Checkout `e523d4c7`

  ```bash
  git checkout e523d4c7
  ```

- Run:

  ```bash
  VERSION=0.0.3-d sh build-docker.sh
  ```

- Go to `http://localhost:3000` to load the html file in the browser caching

- Run:

  ```bash
  VERSION=0.0.3-r sh build-docker.sh
  ```

- Refresh the `http://localhost:3000` page (a simple refresh at this moment)

  - You will notice that despite the project having been rebuilt with a new version, the old version is still cached and showing.

- Do a hard refresh (Command + Shift + R) at `http://localhost:3000`
  - After performing the hard refresh you force the browser to clear it's cache, so you get the new deployed version

### Check cache with routing

To check how cache works, follow these steps:

- Checkout `ea5d8dee`

  ```bash
  git checkout ea5d8dee
  ```

- Run:

  ```bash
  VERSION=0.0.4-d sh build-docker.sh
  ```

- Go to `http://localhost:3000` to load the html file in the browser caching

- Navigate to the route by clicking the `Go to route` button

- Go back to index by clicking the `Go to index`button

- Run:

  ```bash
  VERSION=0.0.4-r sh build-docker.sh
  ```

- Do a hard refresh at `http://localhost:3000`

  - You will get the new version in the index (`/`) route

- Click the `Go to route` button

  - You will now get the old version, because despite having cleaned the cache for `/`, the `/route` is still cached.
  - Even though they both load the same file (SPA), the browser understands them as two separated routes, thus caching both files and treating them as different.

- Do a hard refresh (Command + Shift + R) at `http://localhost:3000/route`
  - Now you get the new version of both routes

### Caching with yarn

To check how cache works, follow these steps:

- Checkout `a9c6627a`

  ```bash
  git checkout a9c6627a
  ```

- Run:

  ```bash
  VERSION=0.0.4-d sh build-docker.sh
  ```

- Go to `http://localhost:3000`

  - If you had the npm version installed previously, you will notice that the page is already cached in the wrong version. Do a hard refresh to get the yarn version.
  - Yarn does not mock the Last-Modified date (npm does), so by checking your Last-Modified date is a current one, you'll know you have the yarn version.

- Run:

  ```bash
  VERSION=0.0.4-r sh build-docker.sh
  ```

- Refresh the `http://localhost:3000` page (a simple refresh)

  - You will notice that now you get the correct version, the browser does not persist the cache. That's because the Last-Modified date of the file changed, the browser notices that and request the new version.
