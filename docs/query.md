!!! tip
    _Page Status_: **Current**

The ORR has separate SPARQL and REST APIs, but only the SPARQL API provides a way to search ORR's semantic content. 
This section describes how to perform such queries.

SPARQL is the query language for the Resource Description Framework. (The acroynym is recursive: SPARQL Protocol And RDF Query Language). 
It is analogous to SQL for relational databases, allowing queries to be placed for semantic resources. 
The [Wikipedia entry for SPARQL](http://en.wikipedia.org/wiki/SPARQL) contains good background information, 
and the [W3C documentation](http://www.w3.org/TR/sparql11-overview/) provides a good technical read.

SPARQL queries can be done programmatically, with a RESTful interface, against the ORR SPARQL endpoint at 
http://[domain]/sparql (example for COR: `http://cor.esipfed.org/sparql`) using HTTP GET requests.
Alternatively, a windowed user interface is available at http://[domain]/ont/sparql (example for COR: [http://cor.esipfed.org/ont/sparql/](http://cor.esipfed.org/ont/sparql/).

![SPARQL search page](img/cor/cor-sparql-search-page-20160828.png)

A number of interesting domain-specific examples can be found at 
[http://marinemetadata.org/community/teams/vocdev/orrioos](http://marinemetadata.org/community/teams/vocdev/orrioos). 
These examples, which can be tried at the [windowed user interface](http://cor.esipfed.org/ont/sparql) mentioned above,
shows how to query the content to satisfy different use cases. 

The [Querying Linked Data with SPARQL](http://www.slideshare.net/olafhartig/querying-linked-data-with-sparql) 
video provides interesting information about querying with SPARQL.
