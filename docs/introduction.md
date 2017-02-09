!!! tip
    _Page Status_: **Current**

**Introduction to the ORR**

Developed by MMI[1], the [Ontology Registry and Repository](http://github.com/mmisw), or ORR, is a Web-based application 
that provides a single access point to work on semantic content. Here, ontology providers and users can collaborate 
to create, host, annotate, share, and use ontologies of relevance to their science community.

The ORR has several deployments. The first of these was the [MMI ORR](http://mmisw.org), and some older 
documentation uses this name to refer to the software system, the deployed service, or both.
(In this document we use "ORR", "ORR software", or "ORR system" to refer to the software, 
and specific names like "MMI ORR" or "COR" to refer to particular deployments.)

Another major deployment of the ORR system is for the ESIP Federation's [Community Ontology
Repository](http://cor.esipfed.org), shown below; this is known as the ESIP COR, or simply the COR.

![](img/cor/cor-browse-page-20160828.png Browse page of the ESIP COR)

These pages document the most recent ORR software, which is deployed at the ESIP COR. 

!!! note
    The MMI ORR deployment is still using the previous software release
    (documented in the [MMI web site's ORR documentation](https://marinemetadata.org/mmiorrusrman)).
    Plans are underway to update this instance also to the latest ORR version 3.


**Main ORR Capabilities**

The ORR was created to provide the following capabilities to users without previous semantic experience:

*   Create and publish vocabularies in a standards-based model (RDF)
*   Search for terms using free text or a sophisticated, standard query language (SPARQL)
*   Instantly provide web resolvable identifiers for all vocabularies and terms
*   Enable user-specified relations between terms to interlink your vocabulary with others in the community
*   Enable added-value applications via programmatic access to semantic and inference capabilities 

This manual describes the Ontology Registry and Repository and associated semantic services. 
The provided suite of key functions allows data providers and users to include, use, and exploit
semantic information in real world scenarios.

***ORR built around URIs*** 

In the ORR, at the most basic level, every term has a URI[2], and the ORR returns a page of basic information about 
the term when someone enters that URI into their browser. When the ORR creates an ontology,
it automatically creates the term URIs for that ontology, and enables resolution of those terms. 
Thus ORR users can begin using the terms immediately, confident that anyone looking for more 
information on the term can resolve it. (When a user submits an ontology which already has
defined non-resolvable URIs, the ORR will create an additional, resolvable URI that embeds
the original unique identifier.)

***Application scenarios***

In its basic role as an ontology repository, the ORR supports more advanced scenarios. 
A data provider or system developer wanting to annotate data sets with controlled terms
can use this service's search features to determine if any relevant vocabularies already exist
for their needs, and following standard semantic practices can extend the content if necessary. 
to suit their particular application. 

As another application, upon receiving a request for datasets involving a particular term 
(e.g., sea temperature), a data discovery tool can enhance the result set by using the 
ORR search services to request related terms (e.g., terms that may be broader than or 
narrower than the specific term). These related terms are automatically derived using 
the mapping ontologies and semantic inference mechanisms built into the ORR.

----

[1] MMI: [Marine Metadata Interoperability project](http://marinemetadata.org)   
[2] URI: Uniform Resource Identifier
