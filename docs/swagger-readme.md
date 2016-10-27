## swagger spec

`swagger.yaml`: The contents of this file is edited at http://editor.swagger.io/,
then copied-pasted in this file, and thus kept under version control.
I'm currently using the spec here as a basis to create the various instances
as explained below.

`docs/api/index.md` points to actual ORR Ont instances.

In each instance, the local directory serving the "ontapi" page is
populated with the contents of the `dist` directory of a release of 
Swagger-UI, downloaded from https://github.com/swagger-api/swagger-ui/releases
(using v2.2.6 at time of writing).

On those instances, adjustments in the swagger-ui `index.html` file are done to:
 
 - set the spec location to the particular swagger file adapted from the
   one here, (for example, `url = "xdomes.yaml"` in the X-DOMES case);
 - call `swaggerUi.listAll();` so the list of operations is visible at load
   of the page.

**NOTE**

Keeping the spec in this repo gives more flexibility for documentation updates
than keeping it in the orr-ont repo itself, especially at this point where
the full API documentation is not yet complete.
