!!! warning
    _Page Status_: **Under revision**

## Searching and Viewing Ontologies

#### How do I find ontologies in the repository that are most relevant to my work?

Please see [Searching via the UI](/search/).

#### How do I do an Advanced Search using SPARQL?

Please see [Content Query via API](/query/).

#### How can I view ontologies in the repository?

The list of all the ORR ontologies are displayed in the main ORR page.
More specifically, this list will contain all the registered ontologies
according to the associated visibility attribute:
all marked "public" and those marked "owner" that you (or any of
the organizations you are member of) own at the ORR.

!!! note ""
    Note: the visibility attribute only has effect on this main list.
    Anyone with the IRI for an ontology will be able to see the corresponding page. 
    In other words, ontologies marked with "owner" visibility should not be considered private.

Filters on the left of the page allow to select ontologies according 
to various facets (by owner, by status, and others), or to show only 
the most recent submission by owner.

To view a particular ontology, click on its IRI entry in the ontology list. 
If the ontology is natively hosted in the ORR, you can enter its unique identifier (an http IRI) in your browser, 
and ORR will resolve the IRI to the page for the ontology. 

Once you have selected an ontology, there are multiple formats for viewing or downloading it, 
available under the "View/download as" drop down menu. 
For more details, see the section of the ORR manual on [viewing ontologies](/vocab/view/).


#### Tabular view: Why are the rows (or columns) not displayed in the same order I used to create my vocabulary?

Order is typically not captured in semantic artifacts (vocabularies or ontologies), with most commonly used semantic 
libraries not guaranteeing any specify order when retrieving elements of lists or aggregations. 

However, recognizing that order is helpful to maintain for usability purposes, since version 3, the ORR now preserves 
column order in the created vocabularies using such version.

## Using Ontologies

This section has questions about using ontologies in a repository based on the ORR software.

#### Should I use an existing ontology from the repository or develop one of my own?

This is a complex question.  Generally, you should use an existing ontology if it will meet most of your needs.  
However, there are several considerations for choosing an existing ontology. Please see the Guide on 
[choosing a vocabulary](https://marinemetadata.org/guides/vocabs/cvchooseimplement/cvchoosing).  
If no existing ontology meets 
your needs, you may wish to develop your own. Please see the Guide on 
[developing your own vocabulary](https://marinemetadata.org/guides/vocabs/cvdev).

#### I found an existing ontology that seems good, but it doesn't include all the terms that I need.  How do I build upon an existing ontology?

There are three 'formal' techniques to build upon an existing ontology, and an informal technique that is more optimal 
than any of those three. The three techniques below correspond to the three suggestions in the first answer
[here](http://answers.semanticweb.com/questions/18505/ontology-import-vs-owlsameas-in-ontology-design "Good reference on the options"):

1.  Import their ontology into an ontology of your own making. (Note: This is potentially non-trivial; see for example [this slightly dated analysis](http://protegewiki.stanford.edu/wiki/How_Owl_Imports_Work).)
2.  Reuse their terms in your ontology, but without importing them.
3.  Create your own copy of the other ontology's terms, either linking to the original terms using sameAs or other relations, or just quietly copying the content and making it your own.

Each of these has strengths and weaknesses, so we suggest you read the linked answer. Another solution, 
often overlooked but very powerful, is to work with the ontology owner to add your terms directly into their ontology. 
(They may want to enhance their ontology with your terms!) We encourage this approach as a way to maximize reuse 
among semantic artifacts on the web.

#### How do I access ontologies in the ORR? What is the format of the link?

For ontologies hosted natively in the ORR repository, 
the simplest way to access an ontology is to enter its unique identifier (an IRI) into your browser. 
The ORR will serve a page that describes the ontology's metadata, and then the content of the ontology. 
You may have to click on the section headers to show the content below the header. The software provides complete 
information about the ontology it is showing.

<!-- need to add something like: "for vocabularies created using the ORR vocabulary editor ..." 
(but even so, there are ways in such editor to enter the term IRI in whatever way the user desires, even a URN,
so this paragraph has significant assumtions in general) -->
You can access any of the terms in the ontology by appending a `/` and the term identifier (a name or code) 
to the ontology IRI. This new IRI represents the corresponding term, and the service will present information relevant 
to the specific term.

For ontologies (and terms in them) that have been re-hosted by the ORR, 
you can append the ontology IRI to the following string: 
`http://[domain]/ont/?iri=`. 
This will provide the same information as when you use the natively hosted ontology IRI, as described above.
(Note: with the `iri` parameter mechanism, any `#` characters in the IRI should be encoded as `%23`)

For any ontology in the ORR, if you want to look at the ontology in a structured format (e.g., RDF/XML, or N3), 
you can construct an IRI that requests this format.
For example `http://[domain]/ont?format=n3&iri=`, 
followed by your ontology's IRI, will present the ontology in the n3 format.

You can also use the API, in particular the [`GET /ont` operation](http://cor.esipfed.org/ontapi/#!/ontology/get_ont)
(example is for the ESIP COR),
to ask for an entire ontology, or information about a particular term.

The page [Viewing a Vocabulary](/vocab/view/) 
describes the formats and viewing options in more detail.

#### How do I query the registered ontologies programatically? What services do I have?

Please see the sections for the [SPARQL query API](/query/) and the [REST API](/rest/), 
which point to the appropriate API documentation.

#### Can you give examples of how to open the registered ontologies in Protégé and TopBraid Composer?

Briefly, you can either specify the ontology IRI directly to one of those applications, 
or download the ontology as an RDformat. 
Specifying the IRI is only guaranteed to work if the ontology is hosted at the ORR.
Ontologies that are re-hosted, or remotely hosted, by ORR may not be discoverable at their To download the ontology from its front page, 
you can use the `View/download as` dropdown menu, selecting RDF/XML as the format. 
Another option is to directly specify the download IRI in your browser, constructed as `http://[domain]/ont?form=rdf&iri=`, 
followed by your ontology IRI. (See above for further information.)
Once you have downloaded the ontology, you can open it locally in any ontology or text management application.

## Submitting and Updating Ontologies

This section includes FAQs related to submitting ontologies to the Ontology Registry and Repository ([ORR](http://[domain]/orr)) and updating them.

#### What are the benefits of submitting my vocabulary to the ORR?

The ORR provides easy access to, and management of, your vocabulary. 
It also stores your ontology in a knowledge base, which can be searched or used for mapping between your vocabulary and others. 
The ontology can be accessed and downloaded in a variety of formats.
Finally, and importantly, both the ontology and its terms are served as first-class entities when their IRIs are entered into a browser.

#### I have a vocabulary in OWL format, how do I submit it to the ORR?

Several ontology formats are accepted by the ORR, including XML serialization for OWL.
Select the "Upload ontology" button, browse to your local file, upload the ontology to the workspace, 
choose the hosting option, review the metadata details, 
and complete the registration. 
For more information, see the sections of the ORR manual on [Registering an Ontology](/ontology/upload).

#### I have a vocabulary in a column-separated text format, how do I submit it to the ORR?

If the vocabulary is in an spreadsheet-like format, you should choose "Create vocabulary" and import 
the file (once you have it in a separated values like comma-separated or tab-separated), 
to convert it into an ontology. For more information, see the sections of the ORR manual 
on [Creating a Vocabulary](/vocab/new).

#### I have a vocabulary in non-RDF XML format, how do I submit it to the ORR?

At this point, this capability is beyond the scope of the ORR portal, 
as it would be very complex to provide the capabilities to extract information from any kind of XML file in a generic way. 

Specific conversion tools are necessary in these cases. 
The output from those tools must either be in a format that the ORR can read 
(e.g., the CSV with the associated structure or an ontology format), 
or be submitted by the tool itself for registration using the programmatic mechanisms provided by ORR.  

You might consider using XSLT conversion tools to create a CSV output that can then be submitted to ORR. 
The page http://www.w3schools.com/xsl/ includes a handy online conversion tool for learning XSLT.

#### Is it better to upload a vocabulary file or create a new file using the ORR's "create vocabulary" tools?

This entirely depends on your situation and preferences. 
Once you are logged in, you can upload information as an ontology file, as a simple vocabulary text file, 
or by entering information about individual terms in a table. 
For any of these options, start at the ontology overview page for your deployment 
([ORR](https://mmisw.org/orr) or [COR](http://cor.esipfed.org/orr)).

If you are just starting to describe your vocabulary or want to evaluate the system, 
it may be be easiest to create the vocabulary using our system for table-based entry. 
If you have a vocabulary in a text file already, separated by a typical delimiter like a comma or tab, 
then you can upload your vocabulary directly.
Please see the section [Creating a vocabulary](/vocab/new) or 
[Importing a vocabulary](/vocab/import), as appropriate. 

If you have your vocabulary formatted as an OWL-formatted ontology file, 
you can upload it using the Upload button on the ontology overview page. 
This is the best option if you are already working with your terms as an ontology. 
If your ontology is complex, you may want to discuss the capabilities provided by the Repository with the developers, 
to confirm all your goals will be met.

Note that options are available to update a vocabulary that is already in the system. 
However, we do not recommend editing a more complex ontology in the vocabulary editor, because information is likely to be lost. 
in this case the ontology should be edited in an ontology editor, then uploaded in place of the original.

#### Why do some ontologies in ORR get presented in simple tables, and others get presented as searchable triples?

For display and editing purposes, the ORR treats ontologies entered with an ORR tool differently than uploaded ontologies. 

For ontologies created with one of the ORR integrated modules (vocabulary tool or mapping tool), 
corresponding features are implemented to both present and allow further edits to the ontology. 
For example, for ontologies created with the ORR vocabulary tool, a content table is presented that 
allows manual editing or import of a new version via a simple csv table.

The "upload" mechanism, on the other hand, allows the registration of any RDF ontology of arbitrary complexity. 
In this case, the ontology display consists of searchable table with all the triples in the ontology. 


#### How much metadata should I provide with my vocabulary?

You should try to complete all the metadata fields requested under "Metadata details" for your vocabulary. 
The more metadata provided, the greater functionality the ORR will be able to provide using your vocabulary. 

The required fields (necessary for storing your ontology in the knowledge base correctly) are marked with a red asterisk.
We have made this list as minimal as possible, but hope you will add more attributes to help everyone understand your content.

#### I want to submit my vocabulary as a "test". How do I do that?

Submit your vocabulary per the usual instructions. 
You will have the option to indicate its associated status, including 'testing'.

| Status | Definition |
|--|--}
| draft     | The resource is in preliminary stages of development. |
| unstable  | The meaning, deployment practices, documentation (or important associated software/services) associated with this resource are liable to change arbitrarily at some point in the future. They may not, but stability is not guaranteed. Use with caution.|
| testing   | The meaning, deployment practices, documentation and general understanding of this resource are approaching some stability, but changes are still possible due to implementation experience or other unanticipated factors.|
| stable    | The resource is relatively stable, and its documentation and meaning are not expected to change substantially.|
| deprecated| The resource is marked as no longer suitable for use, although past uses may still exist.|
| archaic   | This resource is marked as old-fashioned; although used, it is not considered typical of current best practice and alternative expressions may be preferable.|

#### When creating a vocabulary, are there any best practices for creating term fields?

Yes, there are a few basic practices that are required or recommended. 
First of all, the top row (in the table or file) has to be used as a header row, 
so that the rest of the content can be described. 
We suggest that you complete all header names and term names as a single word, without spaces, 
and that you use the singular form unless you have a very specific reason to use plural. 

If you're not sure how to capitalize words within the terms: 
* For the header row, capitalize each word in a joined phrase, including the first; 
* for term names, leave the first letter lower case.)  

Use one row for each term. Not every column has to be filled out for every term, but delimiters must be present to indicate missing cells. 

We strongly encourage you to put definitions for every concept, even if they are fairly simple placeholders. 
They can always be improved later, but only if people know what you meant in the first place!  

A complete list of recommendations is provided in our [Guide on building vocabularies](https://marinemetadata.org/guides/vocabs/cvdev/cvdevnew/cvdevtips)

#### How do I update my ontology file once it has been submitted to the ORR?

Log in, click on the link for the ontology you would like to edit, and click on "New Version". 
See also the section of the ORR manual on [Updating an Ontology](/ontology/newversion/). 

#### Can I use my ontology editor XXX? (XXX = Protégé, NeOn, etc.)

Yes. You can use any tool to create your ontology. Then, you can can register the ontology in the ORR. 
Note that some tools are provided to create vocabularies and mappings within the portal itself, 
but you are free to use any other appropriate mechanisms.

#### What do the "fully hosted" and "re-hosted" options for registering my existing ontology mean? 

Please see the manual section on 
[hosting options](/ontology/new/#what-options-are-available-for-hosting-ontologies).

#### ORR says that my file may not be in UTF-8 encoding. What does it mean and what can I do?

Any ontology contents submitted to the ORR must be encoded in UTF-8 
in such a way that the underlying ontology manipulation library can read the given contents without error. 
In case of encoding error, ORR does a best effort to detect the probable encoding (aka, _charset_) or encodings
in order to provide a diagnostics message to the user. 
No attempt is done to automatically convert the contents to UTF-8 as the original information may be altered. 
You should make sure your submitted file or contents are in UTF-8.

Some useful links are [w3schools](http://www.w3schools.com/XML/xml_encoding.asp) and 
[notepad](http://blogs.msdn.com/b/oldnewthing/archive/2007/04/17/2158334.aspx).

## Mapping Ontologies 

This section includes FAQs related to mapping between ontologies in the Ontology Registry and Repository.

#### What are the benefits of mapping my vocabulary to others in the ORR?

There are many reasons for mapping between vocabularies.  
Please see [Creating a Mapping Ontology](/mapping/new/) 
and the Guide on [mapping vocabularies](https://marinemetadata.org/guides/vocabs/cvchooseimplement/cvmap).

#### How do I map my vocabulary to others in the ORR? Are there any recommended best practices?

Please see 
[https://marinemetadata.org/mmiorrusrman/mmiorrmapps](https://marinemetadata.org/mmiorrusrman/mmiorrmapps) 
for best practice information.

