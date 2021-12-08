**3.9.83** - 2021-12-07

- Internal: Adjustments in email notification dispatch, mainly logging related,
  to facilitate diagnosing potential issues with corresponding
  configuration
  (e.g., [cor#73](https://github.com/ESIPFed/cor/issues/73)).
- Documentation: A ["material"](https://squidfunk.github.io/mkdocs-material/)
  theme has been enabled for this site.
- The [Apache License, version 2.0](https://www.apache.org/licenses/LICENSE-2.0),
  has been assigned to the ORR software.

**3.9.82** - 2021-01-05

- Button icons are back [orr-portal#179](https://github.com/mmisw/orr-portal/issues/179).

**3.9.81** - 2020-12-14

- Implemented [orr-portal#178](https://github.com/mmisw/orr-portal/issues/178):
  If an IRI with a trailing slash is not found in the repository,
  the portal UI will automatically retry the request without the trailing slash.

    Example:

    [http://cor.esipfed.org/ont?iri=http://sweetontology.net/matrMineral/](http://cor.esipfed.org/ont?iri=http://sweetontology.net/matrMineral/)

    should end up resolving: http://sweetontology.net/matrMineral


**3.9.8** - 2020-08-14

- Fixed [orr-portal#174](https://github.com/mmisw/orr-portal/issues/174).

**3.9.7** - 2020-07

- Adjusted marks for status and visibility, in particular to show the visibility
  even when status is undefined
- Added 'visibility' facet.
- Various internal adjustments to address security alerts.

**3.9.6** - 2020-07-02

- Fixed issue involving double slash in IRI when creating a vocabulary or mapping ontology.
  [orr-portal#169](https://github.com/mmisw/orr-portal/issues/169)

- Internal: more flexible configurability of the frontend for docker based deployment.

**3.9.4** - 2020-05-29

- Capture acceptance of "Terms Of Use" in new-account dialog.
  [orr-portal#123](https://github.com/mmisw/orr-portal/issues/123)

- Some password related usability improvements.

- Admin: show indication of public or owner visibility in main list.
  [orr-portal#163](https://github.com/mmisw/orr-portal/issues/163)

- Backend: include status and visibility in email notification about ontology registration.

**3.9.3** - 2020-04-03

- https-to-http replacement for re-attempt of term request.
  [orr-portal#115](https://github.com/mmisw/orr-portal/issues/115)

- Fixed resolution issues for some cases with ontology IRIs having trailing hash or slash character
    - [orr-portal#156](https://github.com/mmisw/orr-portal/issues/156)
      (related: [orr-ont#74](https://github.com/mmisw/orr-ont/issues/74))
    - [orr-portal#155](https://github.com/mmisw/orr-portal/issues/155)
      (related: [orr-ont#73](https://github.com/mmisw/orr-ont/issues/73))

**3.8.9** - 2019-10-03

- Fixed issue with endpoint associated with SPARQL page.
  ([orr-portal#128](https://github.com/mmisw/orr-portal/issues/128#issuecomment-538172422))

- The ontology unregistration option is now available to its owner
  (that is, direct user or a member of submitting organization),
  but only when the ontology is not publicly visible.
  ([orr-portal#149](https://github.com/mmisw/orr-portal/issues/149))

- User can now update his/her email address.
  ([orr-portal#150](https://github.com/mmisw/orr-portal/issues/150))

**3.8.7** - 2019-09-04

- Some fixes and adjustments mostly related with upgrades in underlying components.

**3.8.6** - 2019-08-28

- Some internal adjustments related with HTTP requests between the various ORR
  components (including the triple store service), due to more stringent restrictions
  under some execution environments (e.g., Cloudflare).

**3.8.5** - 2019-08-08

- internal: more dependency upgrades to address potential vulnerabilities (in orr-portal)

**3.8.4** - 2019-02-07 / **3.8.3** - 2019-01-25

- internal: some lib upgrades to address potential vulnerabilities (in orr-portal)

**3.8.2** - 2019-01-19

- Backend now performs redirection to web portal when request for
  ontology or term indicates HTML via `format` parameter or when
  `Accept` header includes `text/html`.
  ([orr-ont#69](https://github.com/mmisw/orr-ont/issues/69),
   [SWEET#70](https://github.com/ESIPFed/sweet/issues/70#issuecomment-455714613))

**3.8.1** - 2019-01-15

- The maximum size for ontology file upload has been increased.
  ([orr-portal#126](https://github.com/mmisw/orr-portal/issues/126))

- Gzip compression for ontology responses has been enabled.
  ([orr-ont#68](https://github.com/mmisw/orr-ont/issues/68))

**3.7.2** - 2018-02-28

- add link to [examples](https://mmisw.org/orrdoc/query/#some-sparql-examples)
  in the SPARQL YASGUI page
- show triple store size when zero (admin page)
- remove unneeded dependency on jquery

**3.7.0** - 2017-11-22

- Simplified configurability of the integrated ORR system.
  [Install section](/install) updated.

**3.6.8** - 2017-11-03

- Internal: Improved dispatch of email notification for admins.

**3.6.7** - 2017-10-12

- "File-type extension" resolution for ontology and term request
  ([orr-ont#55](https://github.com/mmisw/orr-ont/issues/55))

**3.6.6** - 2017-10-04

- Use "text/turtle" as response format for term requests with format=ttl
  (previously, "application/sparql-results+ttl")

**3.6.5** - 2017-09-20

- Enable "ttl" (Turtle) as a stored format in backend ([orr-ont#54](https://github.com/mmisw/orr-ont/issues/54)).
- Enable "N-Quads" and "TriG" in "View/Download as" dropdown menu.

**3.6.4** - 2017-07-21

- Fix in the orr-ont backend service regarding self-resolution of ontology format
  ([orr-ont#52](https://github.com/mmisw/orr-ont/issues/52)).
  With this fix, links in the ORR portal for [LODE dispatch](
  https://github.com/mmisw/orr-portal/issues/106#issuecomment-317095365)
  should now be correctly handled, as well as by any external service or tool
  that follows common content negotiation practices.

**3.6.3** - 2017-06-06

- REST API: adjustments in `GET /term` operation
- Front-end application should now load faster in the browser ([orr-portal#111](https://github.com/mmisw/orr-portal/issues/111)).
  (In general, [optimization had deliberately not been a main concern](http://wiki.c2.com/?PrematureOptimization).)

**3.6.2** - 2017-06-03

- REST API addition: Simplified semantic search queries against the triple store
 ([orr-ont#50](https://github.com/mmisw/orr-ont/issues/50))

**3.6.0** - 2017-05-31

- General support for IRIs (both backend and frontend), with many adjustments in relevant
  parameters, UI widgets and messages, and documentation.
  ([orr-ont#32](https://github.com/mmisw/orr-ont/issues/32),
  [orr-portal#48](https://github.com/mmisw/orr-portal/issues/48))

**3.5.1** - 2017-05-29

- "fully-hosted filter should consider https and http" - fixed ([#109](https://github.com/mmisw/orr-portal/issues/109))

**3.5.0** - 2017-05-29

- upgrade of underlying Jena library to 3.3.0
  ([orr-ont#45](https://github.com/mmisw/orr-ont/issues/45))
- adjustments in user account creation
- include additional details in email notifications regarding ontology registration

**3.4.3** - 2017-04-13

- New option in CSV import to indicate that all columns are properties (and values) along
  with mechanism to determine the unique identifiers for the terms
  ([#101](https://github.com/mmisw/orr-portal/issues/101)).

**3.4.1** - 2017-03-07

- various LOD adjustments/fixes (term page, keyword-search, term-search, regular ontology view)
- create vocab/mapping dialog stays open when user navigates back in browser; fixed (#97)
- include list of ontologies in user page (those owned by ~username -- not as submitter)

**3.4.0** - 2017-03-04

- visibility/status were not required in create vocab/mapping dialog; fixed.
- failing to load external ontology for mapping; fixed (#44)
- internal (adjustments related with docker based installation)

**3.3.1** - 2017-03-02

- user page was wrongly showing info about logged in user (#85)

**3.3.0** - 2017-02-28

- improve search options
    - show SPARQL query for term-search and keyword-search
    - term-search now also applied on the simple name of the subjects
- a log message can now be entered before proceeding with registration of
  a new ontology version. This log message is optional.
  Such log messages (if any) are displayed as tooltips in the "versions" dropdown menu.

**3.2.4** - 2017-02-25

- include external ontology viewers (LODE and VOWL at this time) as additional options in view/download dropdown menu
- include LODE in list of external ontology viewers
- include list of ontologies in organization page
- organization's name was not editable; fixed.
- resolve "too much unused real estate"
- duplicate metadata removed
- re-enable ontologyType facet

**3.2.2** - 2017-02-18

- option to upload file from remote URL ([#79](https://github.com/mmisw/orr-portal/issues/79))
- capture status and visibility when creating new vocab or new mapping ([#60](https://github.com/mmisw/orr-portal/issues/60))
- Other various enhancements/fixes
  ([#22](https://github.com/mmisw/orr-portal/issues/22),
  [#14](https://github.com/mmisw/orr-portal/issues/14),
  [#27](https://github.com/mmisw/orr-portal/issues/27),
  [#57](https://github.com/mmisw/orr-portal/issues/57),
  [#75](https://github.com/mmisw/orr-portal/issues/75),
  [#70](https://github.com/mmisw/orr-portal/issues/70),
  [#62](https://github.com/mmisw/orr-portal/issues/62),
  [#76](https://github.com/mmisw/orr-portal/issues/76),
  [#77](https://github.com/mmisw/orr-portal/issues/77))


**3.1.x**

- API documentation
- \#31 "https == http for purposes of IRI identification"
- improve reset-password and password-reset html pages
- many improvements and fixes (email notifications, triple-store update, regular ontology display, recaptcha, ...)
- improved docker image build and simplified configuration

**3.0.0-beta** - 2016-07-12

- Presented at the ESIP Summer Meeting

**Older**

- Late 2015: Resumed work with X-DOMES support
- Early 2015: First v3 frontend prototype
- 2014: First v3 backend prototype
- 2008–2014: Initial versions v1 and v2
