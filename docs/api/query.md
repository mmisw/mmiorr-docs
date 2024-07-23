# Querying via the REST API
  
### Ontology search

The ORR repository [REST API](index.md) includes a `GET /ont` operation that allows to retrieve 
ontology information from the repository according to ontology metadata, various registration properties, and
privileges of the requesting user.
The details of this operation can be found at the corresponding API documentation page of the relevant ORR instance. 
(MMI ORR example: [https://mmisw.org/ontapi/#!/ontology/get_ont](https://mmisw.org/ontapi/#!/ontology/get_ont)).
 
### General semantic search

The most complete and powerful semantic search mechanism is through the
SPARQL endpoint, see the [SPARQL API](../query.md) section.

The ORR [REST API](index.md), however, also includes a `GET /term` operation that allows to perform
some common term queries via a somewhat simpler interface.
The details of this operation can be found at the corresponding API documentation page of the relevant ORR instance. 
(MMI ORR example: [https://mmisw.org/ontapi/#!/term/get_term](https://mmisw.org/ontapi/#!/term/get_term)).
