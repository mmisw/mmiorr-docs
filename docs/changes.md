**Noteworthy**

### 3.4.0
2017-03-04

- visibility/status were not required in create vocab/mapping dialog; fixed.
- failing to load external ontology for mapping; fixed (#44)
- internal (adjustments related with docker based installation)

### 3.3.1
2017-03-02

- user page was wrongly showing info about logged in user (#85) 

### 3.3.0
2017-02-28

- improve search options
    - show SPARQL query for term-search and keyword-search
    - term-search now also applied on the simple name of the subjects
- a log message can now be entered before proceeding with registration of 
  a new ontology version. This log message is optional.  
  Such log messages (if any) are displayed as tooltips in the "versions" dropdown menu.

### 3.2.4 
2017-02-25

- include external ontology viewers (LODE and VOWL at this time) as additional options in view/download dropdown menu
- include LODE in list of external ontology viewers
- include list of ontologies in organization page
- organization's name was not editable; fixed.
- resolve "too much unused real estate"
- duplicate metadata removed
- re-enable ontologyType facet 

### 3.2.2 
2017-02-18

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


### 3.1.x

- API documentation
- \#31 "https == http for purposes of IRI identification"
- improve reset-password and password-reset html pages
- many improvements and fixes (email notifications, triple-store update, regular ontology display, recaptcha, ...)
- improved docker image build and simplified configuration
- 2016-07-12: 3.0.0-beta


### older

- late 2015: resume work with X-DOMES support
- early 2015: first orr-portal (UI) version
- 2014: first backend prototype
