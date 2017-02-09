!!! tip
    The screen shots in this presentation are made using the ESIP COR service.   
    Most features are also available in a similar form in the MMI ORR site; see the [MMI ORR help pages](https://marinemetadata.org/mmiorrusrman/mmiorrgetstarted) for details.
    
## 1. Initial Access

**1-A. Open the desired ORR site in your browser**

* MMI ORR browse page: [http://mmisw.org/orr/](http://mmisw.org/orr/)
* ESIP COR browse page: [http://cor.esipfed.org/ont/](http://cor.esipfed.org/ont/)

To open other ORR sites, replace the domain name (mmisw.org or cor.esipfed.org above) with your domain name, 
and use `ont` for ORR version 3, and `orr` as the location for version 2 deployments.

<img class="smallfloatright" alt="Sign-in window" src="../img/cor/cor-sign-in-window-20160828.png">
**1-B. Log in**

You can access all publicly visible ontologies (see next section) without logging in. To change content, or see ontologies private to you or your group listed in the browse page, you must log in. (If you do not have an account, see *1-C. Create an account* below.)

If you are not yet signed in, click the "Sign in" link in the main ORR page, and enter your account information.

<p class="clearfix">&nbsp;</p>

**1-C. Create an account**

<img class="smallfloatleft" alt="Sign-in window" src="../img/cor/cor-create-account-window-20160828.png">

If you do not have an account and want to log in, click the "Create account" link in the main ORR page, and fill out the form.

The telephone number is required, but is only used to assist in the operation of the repository.

<p class="clearfix">&nbsp;</p>

## 2. Using existing semantic data

**2-A. Browse list of registered ontologies**

Even if not signed in, you will see all public registered ontologies in the main ORR browse page. 
You will not see those ontologies that  are marked as Status="testing" or Visibility="owner". 
In the browse page, such ontologies are only visible to the submitter. 
(If you are the submitter, log in to see the non-public ontologies you submitted.)

The left-hand side tree widget allows you to select the entries in the ontology table according to these criteria:
* owner (the authority owning the ontology), 
* submitter (if you are signed in), 
* status (testing, unstable, draft, stable, deprecated, or archaic), 
* resource type (selected by the ontology submitter), and 
* type of hosting (fully-hosted, or re-hosted). 

You can control which columns are visible using the 'hamburger' selector on the right. 
You can also click any column header in the table to sort the list by that column, or invert that column's sort order. 
Hold down the mouse button to see a delete option if available.

**2-B. Explore contents of an ontology**

Click an entry in the browse table to explore a particular ontology.

The main operations available when viewing an ontology are:

* Search for any combination of subject, predicate, and object using the Data search fields.

* Copy the ontology's IRI to the clipboard, using the button with the clipboard icon.

* View or download the ontology in chosen formats; just choose from the list.

 * Ontology viewing formats are RDF/XML, N3, Turtle, and N Triples.
  
 * Ontology download formats are JSON-LD or RDF/JSON formats. 
  
* View list of versions of the ontology: click the "Versions" button.

* Viewing the metadata details in the various categories shown in the tabs.

If you are an owner of the original ontology, you have additional options:

* Change the Status of the ontology.

* Change the Visibility of the ontology in the main browse page (either owner-only, or publicly visible). Note all ontologies, even owner-only, can still be viewed by anyone having the IRI. 

* Create a new version (if you or your group submitted the original ontology): Click the "Edit new version" button at the far left to start creating a new version of the ontology. This also allows editing the ontology's metadata.

**2-C. Search for term**

To search for a term across all ontologies, from the main ORR page or any ontology page, click the "Term Search" link. You will see a page that looks like the following:

![Term search page](img/cor/cor-term-search-page-20160828.png)

The given string will be searched exactly as typed, ignoring case, across all property values in the latest version of each registered ontology. Multiple terms separated by spaces must all be matched. You can use "OR" or "|" to indicate alternate search strings.

**2-D. Perform a SPARQL query**

Also in the main ORR page or any ontology page, click the "SPARQL query" link. You will see a page that looks like the following:

![SPARQL search page](img/cor/cor-sparql-search-page-20160828.png)

This page provides an interface that lets you enter sample SPARQL queries, or your own customized queries. 
For more information, see [Querying via SPARQL API](http://mmisw.org/orrdoc/query.md).

A REST API interface is also available for discovering ontology content. See [Querying via REST API](api/index.md) for details.

## 3. Providing semantic content 

You may be adding an ontology -- that is, a file in RDF, OWL, or similar form -- or a vocabulary, for example in a text file, or that you want to create manually. Choose the appropriate link below for your situation.

* [Adding an ontology](http://mmisw.org/orrdoc/upload.md)

* [Adding an existing vocabulary](http://mmisw.org/orrdoc/vocab/import.md)

* [Creating a new vocabulary manually](http://mmisw.org/orrdoc/vocab/new.md)



