!!! warning
    _Page Status_: **In Progress** 

## Before you start: Things to know

### Supported ontology formats

The following formats are supported:

*   [RDF/XML](https://www.w3.org/TR/REC-rdf-syntax/)
*   [JSON-LD](https://www.w3.org/TR/json-ld/)
*   [Notation3](https://www.w3.org/TeamSubmission/n3/)
*   [N-TRIPLE](https://www.w3.org/TR/n-triples/)
*   [TURTLE](https://www.w3.org/TeamSubmission/turtle/)
*   [OWL/XML](https://www.w3.org/TR/owl-xml-serialization/)
*   [RDF/JSON](https://www.w3.org/TR/rdf-json/)

### Hosting modes

ORR offers two options to register an existing ontology: _fully-hosted_ mode and _re-hosted_ mode.
These strongly affect the way your ontology and its terms are treated by the ORR,
in particular, regarding the registration process and the IRI web resolution.

Full support for versioning is provided in both hosting modes.
Unless indicated otherwise, always the latest version will be dispatched in the ORR Portal,
and responded for a programmatic ontology request.
A particular version can be selected in the ORR Portal page for the ontology by
using the 'Versions' dropdown menu,
and a `version` parameter can be included in a programmatic request to retrieve a specific version.
    

#### Fully-hosted ontology

In this case, ORR will assign an IRI having the URL of the particular ORR
instance as a prefix to your ontology and its associated 
terms sharing the same namespace. 
For example, `http://cor.esipfed.org/ont` is this base URL in the case of the COR instance.
More specifically, the original base IRI of the ontology will be 
overwritten with one assigned by ORR during the registration process.
  
* **IRI Resolvability.** The ORR based IRIs given to your ontology (and to all the terms in the 
associated namespace) will be self-resolvable, i.e., you will be able to directly enter them into your 
browser or semantic web tool to get it resolved to the contents of your ontology or term. 
The indirect resolution mechanisms described below are also provided 
for fully-hosted ontologies.


#### Re-hosted ontology

The general registration process is similar to the fully hosted option, but 
no changes at all will be performed to the contents 
(that is, in terms of modifying any defined IRIs in the ontology).

* **IRI Resolvability.** 
The IRIs of your ontology and associated terms can be resolved indirectly 
via the "iri" parameter, eg., 

    `https://mmisw.org/ont?iri=http://example.com/my/ontology`.
     
    You can also indirectly access the ontology and terms via searches against ORR. 
    (NOTE: Your ontology could also be resolved by its own IRI if that is supported by its 
    original web server.)  


The following section provides instructions on how to submit an existing ontology to the ORR.

## Uploading an ontology

To upload and register an ontology, you must be logged in as described above,
and have available an ontology file in one of the above formats.

Click the "Upload ontology" button on the main page to begin the submission process.

A wizard dialog appears. 
The first step is to load the intended contents in the workspace.
For this you can either upload a local file:

![Ontology upload file dialog](../img/cor/cor-ontology-upload-dialog-file-20170218.png)

or a remote URL:

![Ontology upload url dialog](../img/cor/cor-ontology-upload-dialog-url-20170218.png)

 
### Uploading a local file

Upon selecting and uploading your local file,
you will then either select or enter the IRI used as the ontology identifier. 
The field for this purpose is labeled "Original ontology IRI."
If the system detects an ontology IRI candidate within the ontology, the IRI will be shown as a selection item, 
as shown in this dialog. Click on the select button to choose any IRI that you want to use as the ontology IRI.

![Ontology IRI selection for local file](../img/cor/cor-ontology-uri-select-20160828b.png)

### Uploading an ontology from a remote URL

Upon entering the remote URL and clicking the 'Upload URL' button,
and similarly as with the local file case above,
you will then determine the IRI to be used as the ontology identifier
as indicated in the "Original ontology IRI" field. 
This field is initialized with the given remote URL, 
but you can adjust this as appropriate.

![Ontology IRI selection for remote URL](../img/cor/cor-ontology-uri-select-for-url-20170218.png)


### Remaining upload sequence

Once the `Next` button is selected, any metadata detected in the imported ontology is shown in the next dialog.

![Ontology registration metadata](../img/cor/cor-ontology-registration-metadata-20160828.png)

Next you will be asked to choose the type of registration (fully-hosted or re-hosted).  Details about these options are provided in the section above. 

![Ontology registration hosting](../img/cor/cor-ontology-registration-hosting-20160828.png)

<img class="smallfloatright" alt="Ontology owner selection" src="../../img/cor/cor-ontology-owner-selection-20160828.png">
Finally, you will complete the metadata details necessary for registering your ontology. 
These include the individual or organizational owner (shown at right), 
a short name used as part of the final IRI for the ontology, 
the visibility of the ontology in the browse page, 
and the status of the ontology.  

!!! tip 
    If you are testing the process or your ontology, please choose "owner" as the value 
    for the visibility attribute so that your ontology is not visible to all the other users.
    
![Ontology registration completion](../img/cor/cor-ontology-registration-completion-20160828.png "Completion of registration details")

When you complete this step, ORR should tell you the ontology is successfully registered.

![Ontology registration successful](../img/cor/cor-ontology-registration-successful-20160828.png)

