## What formats are supported for registering ontology files?

The following standard formats are supported:

*   [RDF/XML](http://www.w3.org/TR/2004/REC-rdf-syntax-grammar-20040210/)
*   [N3](http://en.wikipedia.org/wiki/Notation_3)
*   [N-TRIPLE](http://en.wikipedia.org/wiki/N-Triples)
*   [TURTLE](http://en.wikipedia.org/wiki/Turtle_%28syntax%29)

Aditionally, the following format is supported :

*   [Voc2Skos](http://marinemetadata.org/mmiorrusrman/voc2skos): This option will dispatch the loading of 
the file through a special converter module to create the ontology model for the subsequent manipulation 
and eventual registration. For more details, see the [Voc2Skos](http://marinemetadata.org/mmiorrusrman/voc2skos) page.

## What options are available for hosting ontologies?

MMI ORR offers two options to register an existing ontology: _fully-hosted_ mode and _re-hosted_ mode.

### Fully-hosted ontology

In this case, MMI ORR will assign an `http://mmisw.org/ont`-based base URI to your ontology and associated 
terms sharing the same base namespace. More specifically, the original base URI of the ontology will be 
overwritten with one assigned by MMI ORR during the registration process.
  
*   **URI Resolvability.** The given ORR based URIs given to your ontology (and to all the terms in the 
associated namespace) will be self-resolvable, i.e., you will be able to directly enter them into your 
browser or semantic web tool to get it resolved to the contents of your ontology or term. 
The indirect mechanisms described below are also provided in this case.
  
*   **Versioning**. Full support for versioning including scheme for "versioned" URIs for the ontology and its terms, for example, http://mmisw.org/ont/mmi/20090818T043834/device. Also, support for the "unversioned" request to get the latest version of your ontology, eg., http://mmisw.org/ont/mmi/device  

*   **Ontology owner responsibilities.** The owner will submit the ontology (or have MMI submit it on the owner's behalf), provide the requested metadata, and review the ontology once it has been submitted to the ORR. The owner will also provide updates directly to the repository (or ask MMI to do it for you).  

*   **MMI responsibilities.** If the owner requests it, MMI will submit the ontology to the ORR on the owner's behalf.  MMI will contact the owner for the ontology's metadata and to review the ontology once it has been submitted to the ORR.  At the owner's request, MMI may update the ontology.

### Re-hosted ontology

The general registration process (including metadata editing) is similar to the fully hosted option, but 
the original xml:base namespace associated with your ontology will not be changed at all.  

*   **URI Resolvability.** 
The URIs of your ontology and associated terms can be resolved indirectly by 
the MMI Ontology and Term URI Resolver via the "uri" parameter, eg., 
`http://mmisw.org/ont?uri=http://example.com/my/ontologyuri`. 
You can also indirectly access the ontology and terms via searches against MMI ORR. 
NOTE: Your ontology could also be resolved by its own URI if that is supported by the 
original web server, but that's beyond ORR's scope.  

*   **Versioning.** 
Support for basic versioning as in the full hosted option but with the 
following limitations: 
The URI of your ontology is, in general, completely opaque and, in particular, for purposes of versioning. 
This means that (continuing with the example above) `http://example.com/my/ontologyuri` will be the only 
URI associated with your ontology (`http://mmisw.org/ont?uri=http://example.com/my/ontologyuri` will always 
respond with the latest registered version of your ontology). 
To get a particular version, the "version" parameter should be used, e,g., 
`http://mmisw.org/ont?uri=http://example.com/my/ontologyuri&version=20090922`  

*   **Ontology owner responsibilities.** 
The owner will submit the ontology (or have MMI submit it on the owner's behalf), provide the requested 
metadata, and review the ontology once it has been submitted to the ORR. The owner will also provide 
updates directly to the repository (or ask MMI to do it for you).  

*   **MMI responsibilities.**  
If the owner requests it, MMI will submit the ontology to the ORR on the owner's behalf.  
MMI will contact the owner for the ontology's metadata and to review the ontology once it has 
been submitted to the ORR.  At the owner's request, MMI may update the ontology.

The following sections provide instructions on how to submit to and edit your existing ontologies in the ORR.
