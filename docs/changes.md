!!! note "Are you a user of the MMI ORR instance at mmisw.org?" 
    The MMI ORR instance was recently migrated from the previous version 2.<br> 
    A summary of the major changes in v3 is available [here](/from2to3).

**Noteworthy**

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
