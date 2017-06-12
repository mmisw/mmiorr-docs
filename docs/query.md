The ORR has separate repository and SPARQL APIs. The SPARQL API 
provides the standards-based mechanism to search ORR's semantic content. 

SPARQL is the query language for the Resource Description Framework. 
(The acronym is recursive: SPARQL Protocol And RDF Query Language). 
It is analogous to SQL for relational databases, allowing queries to be placed for semantic resources. 
The Wikipedia entry for SPARQL[^wikisparql] contains good background information, 
and the W3C documentation[^w3csparql] provides a good technical read.

SPARQL queries can be done programmatically against the ORR SPARQL endpoint at `[orr-host]/sparql`
(MMI ORR example: `https://mmisw.org/sparql`; COR example: `http://cor.esipfed.org/sparql`).

!!! Note 
    `[orr-host]/sparql` is for programmatic access; it is not a graphical user interface.

A web page with a user interface is available at `[orr-host]/ont/sparql` 
(COR example: [http://cor.esipfed.org/ont/sparql/](http://cor.esipfed.org/ont/sparql/), as shown below).

![SPARQL search page](img/cor/cor-sparql-search-page-20160828.png)

The [Querying Linked Data with SPARQL](http://www.slideshare.net/olafhartig/querying-linked-data-with-sparql) 
video provides additional information about querying with SPARQL.

#### Some SPARQL examples

The following example queries[^mmisparqlexamples] 
are against the MMI ORR SPARQL endpoint, 
but conveniently exposed through the GUI at [https://mmisw.org/ont/sparql](https://mmisw.org/ont/sparql).
Click the _Execute_ link to open and execute the query in that GUI.

**List all IOOS categories**
- [_Execute_](
https://mmisw.org/ont/sparql#query=PREFIX+ioos%3A+%3Chttp%3A%2F%2Fmmisw.org%2Font%2Fioos%2Fcategory%2F%3E%0ASELECT+%3Fp+%0AWHERE+%7B%3Fp+a+ioos%3ACategory+.%0A++++++%7D+%0AORDER+BY+%3Fp%0A&contentTypeConstruct=application%2Frdf%2Bxml&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fmmisw.org%2Fsparql&requestMethod=POST&outputFormat=table)

```sparql
PREFIX ioos: <http://mmisw.org/ont/ioos/category/>
SELECT ?p 
WHERE { ?p a ioos:Category } 
ORDER BY ?p
```

----

**List all IOOS core variables**
- [_Execute_](
https://mmisw.org/ont/sparql#query=PREFIX+ioos%3A+%3Chttp%3A%2F%2Fmmisw.org%2Font%2Fioos%2Fcore_variable%2F%3E%0ASELECT+%3Fp+%0AWHERE+%7B+%3Fp+a+ioos%3ACore_Variable+%7D+%0AORDER+BY+%3Fp&contentTypeConstruct=application%2Frdf%2Bxml&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fmmisw.org%2Fsparql&requestMethod=POST&outputFormat=table)

```sparql
PREFIX ioos: <http://mmisw.org/ont/ioos/core_variable/>
SELECT ?p 
WHERE { ?p a ioos:Core_Variable } 
ORDER BY ?p
```

----

**List IOOS platform terms**
- [_Execute_](
https://mmisw.org/ont/sparql#query=PREFIX+ioos%3A+%3Chttp%3A%2F%2Fmmisw.org%2Font%2Fioos%2Fplatform%2F%3E%0ASELECT+DISTINCT+%3Fcat+%3Fplatform+%3Fdefinition%0AWHERE+%7B%0A++%3Fplatform+a+ioos%3APlatform+.%0A++%3Fplatform+ioos%3ADefinition+%3Fdefinition+.%0A++%3Fcat+skos%3AnarrowMatch+%3Fplatform+.%0A%7D+%0AORDER+BY+%3Fcat+%3Fplatform&contentTypeConstruct=application%2Frdf%2Bxml&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fmmisw.org%2Fsparql&requestMethod=POST&outputFormat=table)

```sparql
PREFIX ioos: <http://mmisw.org/ont/ioos/platform/>
SELECT DISTINCT ?cat ?platform ?definition
WHERE {
  ?platform a ioos:Platform .
  ?platform ioos:Definition ?definition .
  ?cat skos:narrowMatch ?platform .
} 
ORDER BY ?cat ?platform
```

----

**List IOOS platform categories**
- [_Execute_](
https://mmisw.org/ont/sparql#query=PREFIX+ioos%3A+%3Chttp%3A%2F%2Fmmisw.org%2Font%2Fioos_test%2Fplatform_category%2F%3E%0ASELECT+DISTINCT+%3Fp+%0AWHERE+%7B+%3Fp+a+ioos%3APlatform+%7D+%0AORDER+BY+%3Fp%0A&contentTypeConstruct=application%2Frdf%2Bxml&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fmmisw.org%2Fsparql&requestMethod=POST&outputFormat=table)

```sparql
PREFIX ioos: <http://mmisw.org/ont/ioos_test/platform_category/>
SELECT DISTINCT ?p 
WHERE { ?p a ioos:Platform } 
ORDER BY ?p
```

[^wikisparql]: Wikipedia entry for SPARQL - [http://en.wikipedia.org/wiki/SPARQL](http://en.wikipedia.org/wiki/SPARQL).
[^w3csparql]: W3C SPARQL 1.1 Overview - 
[https://www.w3.org/TR/sparql11-overview/](https://www.w3.org/TR/sparql11-overview/).
[^mmisparqlexamples]: Adapted from 
[https://marinemetadata.org/community/teams/vocdev/orrioos](https://marinemetadata.org/community/teams/vocdev/orrioos).
