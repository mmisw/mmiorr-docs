**Introduction to the ORR**

The Ontology Registry and Repository, or ORR, is a Web-based application 
that provides a single access point to work on semantic content. Here, ontology providers and users can collaborate 
to create, host, annotate, share, and use ontologies of relevance to their science community.

The ORR has several deployments. The first of these was the [MMI ORR](https://mmisw.org), and some older 
documentation uses this name to refer to the software system, the deployed service, or both.
In this document we use "ORR", "ORR software", or "ORR system" to refer to the software, 
and specific names like "MMI ORR" or "COR", or "X-DOMES ORR" to refer to particular deployments.

Another major deployment of the ORR system is for the ESIP Federation's [Community Ontology
Repository](http://cor.esipfed.org), shown below; this is known as the ESIP COR, or simply the COR.

![](img/cor/cor-browse-page-20160828.png Browse page of the ESIP COR)

**Main ORR Capabilities**

The ORR was created to provide the following capabilities 
specially to users without previous semantic experience:

*   Create and publish vocabularies in a standards-based model (RDF)
*   Search for ontologies and terms using free text and facets
*   Instantly provide web resolvable identifiers for all vocabularies and terms
*   Enable user-specified relations between terms to interlink your vocabulary with others in the community
*   Enable added-value applications via programmatic access to semantic and inference capabilities 

This manual describes the Ontology Registry and Repository and associated semantic services. 
The provided suite of key functions allows data providers and users to include, use, and exploit
semantic information in real world scenarios.

***ORR built around IRIs *** 

In the ORR, at the most basic level, every term has an IRI[3], and the ORR returns a page of basic information about 
the term when someone enters that IRI into their browser. When the ORR creates an ontology,
it automatically creates the term IRIs for that ontology, and enables resolution of those terms. 
Thus ORR users can begin using the terms immediately, confident that anyone looking for more 
information on the term can resolve it.

***Application scenarios***

In its basic role as an ontology repository, the ORR supports more advanced scenarios.
A data provider or system developer wanting to annotate data sets with controlled terms
can use this service's search features to determine if any relevant vocabularies already exist
for their needs, and following standard semantic practices can extend the content if necessary
to suit their particular application. 

As another application, upon receiving a request for datasets involving a particular term 
(e.g., sea temperature), a data discovery tool can enhance the result set by using the 
ORR search services to request related terms (e.g., terms that may be broader than or 
narrower than the specific term). These related terms are automatically derived using 
the mapping ontologies and semantic inference mechanisms built into the ORR.

----

[1] IRI: [Internationalized Resource Identifier](https://en.wikipedia.org/wiki/Internationalized_Resource_Identifier)
