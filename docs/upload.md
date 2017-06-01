!!! warning
    Under construction 

## What formats are supported for registering ontology files?

The following standard formats are supported:

*   [RDF/XML](http://www.w3.org/TR/2004/REC-rdf-syntax-grammar-20040210/)
*   [N3](http://en.wikipedia.org/wiki/Notation_3)
*   [N-TRIPLE](http://en.wikipedia.org/wiki/N-Triples)
*   [TURTLE](http://en.wikipedia.org/wiki/Turtle_%28syntax%29)


## What options are available for hosting ontologies?

ORR offers two options to register an existing ontology: _fully-hosted_ mode and _re-hosted_ mode.

### Fully-hosted ontology

In this case, ORR will assign an IRI having the URL of the corresponding ORR service
(e.g., `http://mmisw.org/ont/`) as a prefix to your ontology IRI, as well as to all the IRIs of associated 
terms sharing the same base namespace. More specifically, the original base IRI of the ontology will be 
overwritten with one assigned by ORR during the registration process.
  
*   **IRI Resolvability.** The ORR based IRIs given to your ontology (and to all the terms in the 
associated namespace) will be self-resolvable, i.e., you will be able to directly enter them into your 
browser or semantic web tool to get it resolved to the contents of your ontology or term. 
The indirect mechanisms described below are also provided in this case.
  

### Re-hosted ontology

The general registration process is similar to the fully hosted option, but no changes at all 
are applied to submitted ontology.  

*   **IRI Resolvability.** 
The IRIs of your ontology and associated terms can be resolved indirectly by 
the ORR via the `iri` parameter, e.g., http://mmisw.org/ont/?iri=http://www.w3.org/ns/ssn/. 
You can also indirectly access the ontology and terms via searches against ORR. 
NOTE: Your ontology could also be resolved by its own IRI if that is supported by the 
original web server.  


## Version retrieval

Given an ontology or term IRI, the latest version by such IRI is resolved by default. 
The `version` parameter can be used to request a particular version.
Examples:

- fully-hosted mode example: 
  https://mmisw.org/ont/mmi/device?version=20090818T043834 
- re-hosted mode example: 
  https://mmisw.org/ont/?version=20160518T174217&iri=http://vocab.nerc.ac.uk/standard_name

The following sections provide instructions on how to submit to and edit your existing ontologies in the ORR.
