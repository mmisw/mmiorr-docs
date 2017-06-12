The ORR has separate repository and SPARQL APIs. The SPARQL API 
provides the standards-based mechanism to search ORR's semantic content. 
This section describes SPARQL and how to use it to perform such queries.

SPARQL is the query language for the Resource Description Framework. (The acronym is recursive: SPARQL Protocol And RDF Query Language). 
It is analogous to SQL for relational databases, allowing queries to be placed for semantic resources. 
The [Wikipedia entry for SPARQL](http://en.wikipedia.org/wiki/SPARQL) contains good background information, 
and the [W3C documentation](http://www.w3.org/TR/sparql11-overview/) provides a good technical read.

SPARQL queries can be done programmatically, with a RESTful interface using HTTP GET requests, 
against the ORR SPARQL endpoint at `[orr-host]/sparql` 
(MMI example: `https://mmisw.org/sparql`; COR example: `http://cor.esipfed.org/sparql`). 

!!! Note 
    The `[orr-host]/sparql` endpoint is for programmatic access; it is not a user interface.

A web page with a user interface is available at `[orr-host]/ont/sparql` 
(COR example: [http://cor.esipfed.org/ont/sparql/](http://cor.esipfed.org/ont/sparql/), as shown below).

![SPARQL search page](img/cor/cor-sparql-search-page-20160828.png)

A number of interesting domain-specific examples can be found at 
[https://marinemetadata.org/community/teams/vocdev/orrioos](https://marinemetadata.org/community/teams/vocdev/orrioos).  

The [Querying Linked Data with SPARQL](http://www.slideshare.net/olafhartig/querying-linked-data-with-sparql) 
video provides additional information about querying with SPARQL.
