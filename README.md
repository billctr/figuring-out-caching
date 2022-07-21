## Important commits

- Simple page version with npm: `e523d4c7bd18b0be8bd6177b36a399adc428f782`

  - Tags: `v0.0.3-d`, `v0.0.3-r`

- Navigation version with npm: `ea5d8deea507284ff05fb9d77c7a3dfcb7f813f0`

  - Tags: `v0.0.4-d`, `v0.0.4-r`

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
