## swagger spec and api dispatch


The API dispatch at http://mmisw.org/orrdoc/api/ is accomplished as follows.

`swagger.yaml`: The contents of this file is edited at http://editor.swagger.io/,
then copied-pasted in this file.

The `api/` directory (for the http://mmisw.org/orrdoc/api/ URL) is created 
directly in the `mmisw.org` server at `/opt/tomcat/webapps/orrdoc/api` and 
then populated with the contents of the `dist` directory of a release of 
Swagger-UI, downloaded from https://github.com/swagger-api/swagger-ui/releases
(using v2.2.6 at time of writing).

I then did a couple of adjustments in `/opt/tomcat/webapps/orrdoc/api/index.html`:
 
 - Set the spec location: `url = "../swagger.yaml";`, so it points to the 
   `swagger.yaml` kept under version control in this repo.
 - Call `swaggerUi.listAll();` so the list of operations is visible at load
   of the page.

So, any update of the swagger spec here gets automatically reflected at
http://mmisw.org/orrdoc/api/ as part of the regular documentation webhook.
