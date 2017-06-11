## Main changes from v2 to v3

!!! Note
    This page describes the main changes with respect to the version 2 used by 
    the original ORR instance at [https://mmisw.org/ont](https://mmisw.org/ont) 
    for a number of years.

Version 3 brings many significant improvements, which are summarized below.

### Were you a version 2 user?

If you were a user of version 2 and are going to exercise the new version 3, 
please keep in mind the following:

- Once you open [https://mmisw.org/ont](https://mmisw.org/ont) in your browser,
  make sure to perform a hard reload of the page to avoid potential issues 
  related with cached resources from the previous version.
- Your username and password should continue to work but you will 
  need to login in the new version.
    - **Forgot your username?** Click the 'Get username' button in the 'Sign in' dialog; 
      enter your email address and your username will be sent to you. 
    - **Forgot your password?** Click the 'Reset password' button in the 'Sign in' dialog; 
      enter your username and an email with further instructions will be sent to you. 
- If you used the preliminary HTTP interface for programmatic registration of ontologies,
  v3 brings a much more improved [RESTful interface](https://mmisw.org/ontapi/).

### Summary of major changes


| Aspect                                      | v3                                                                                                                             
| ---------------------------                 |---------------------
| Ontology search                             | Faceted based
| ORR vocabulary/mapping dispatch             | Significantly Improved
| Admin interface                             | Included
| Proper vocabulary/mapping formats           | Yes[^propfmts]
| Organization (authority) support            | Significantly improved[^orgsupport]
| Authorization/permissions                   | Significantly improved[^orgsupport]
| Authentication                              | Significantly improved[^authc]
| Support for multiple classes in ORR vocabularies | Yes                                                                                                                                 
| Ontology input formats                      | RDF/XML, N3, OWL/XML, JSON-LD, Turtle, N-Triples, RDF/JSON                                              
| Ontology output formats                     | RDF/XML, N3, JSON-LD, Turtle, N-Triples, N-Quads, RDF/JSON                                              
| Self-resolvable HTML resolution of IRI/URI  | Direct dispatch[^selfhtmlres]                                                            


At a more technical level, the major changes include:

| Aspect                              | v3
| ---------------------------         |--------------------
| Installability/branding             | Fully supported (including Docker-based installation)
| HTTP interface                      | RESTful
| Database dependencies               | MongoDB
| Performance of ontology requests    | Significantly improved
| HTTP toolkit (backend)              | Scalatra[^httptoolkit]
| Front-end toolkit                   | Angular
| Unit/integration testing            | More comprehensive
| Continuous integration              | Yes[^ci]


[^propfmts]: The explicit formats allow not only more effective internal handling, but facilitate
  the support of some user-level features (e.g., preservation of column order in ORR vocabularies.)
[^orgsupport]: Organizations are explicitly modeled in v3.
  An organization has members, and only members can register ontologies for that organization.
  (Note: A user can also register his/her own ontologies.)
[^authc]: Authentication is based on [JSON Web Tokens](http://jwt.io/) and
  [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).
[^selfhtmlres]: Direct dispatch means that the original ontology IRI (in the case of URL) 
  is retained in the browser URL field.
  In the previous version v2, redirection to the different base location (`/orr`) 
  very often caused confusion to users regarding the proper IRI for ontology identification.
[^httptoolkit]: However, other HTTP frameworks, apparently much more actively maintained,
  may be considered in a future version including
  [Akka HTTP](http://doc.akka.io/docs/akka-http/current/scala/http/) 
  and [Play](https://playframework.com/documentation/2.5.x/ScalaHome).
[^ci]: We use Travis CI ([https://travis-ci.org/](https://travis-ci.org/)).
  Backend service: [https://travis-ci.org/mmisw/orr-ont](https://travis-ci.org/mmisw/orr-ont).
  Frontend: [https://travis-ci.org/mmisw/orr-portal](https://travis-ci.org/mmisw/orr-portal)
