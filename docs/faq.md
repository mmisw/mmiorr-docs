Contents being migrated from 
[https://marinemetadata.org/mmiorrusrman/mmiorrfaq](https://marinemetadata.org/mmiorrusrman/mmiorrfaq)


## Searching and Viewing Ontologies

#### How do I find ontologies in the repository that are most relevant to my work?

To search the repository by term, such as "salinity", click on the "Search terms" link near the top center of the 
Browse page.  To search the repository by a given string, such as "bodc", use the "Search ontologies" box near 
the top of the Browse page.

#### How do I do an Advanced Search using SPARQL?

Please see [Querying the Repository()FIX!](http://marinemetadata.org/mmiorrusrman/mmiorrquery).

#### How can I view ontologies in the repository?

You can view the list of all the ORR ontologies by using the "Browse" button (scroll down in the inside window to 
see more entries). You can view a particular ontology by clicking on its URL entry in the browse list, or by 
entering its unique identifier (URL) in your browser.

Once you have selected an ontology, there are also three different formats for viewing it: default view, 
RDF/XML, and N3\. For more details, see the section of the ORR manual on 
[viewing ontologies (FIX)](/mmiorrusrman/viewvocab).

Test ontologies (those that have 'test' or some variant in the name) are visible in the browser only to you 
and the ORR administrators. However, those with a URL for a test ontology, or any of its terms, will be able 
to see the corresponding page. In other words, test ontologies should not be considered private.

#### Tabular view: Why are the columns not displayed in the same order I used to create my vocabulary?

In general, order is not important for the contents of the knowledge captured in the vocabulary or ontology 
(unless it's explicitly captured as part of the information). Although we agree keeping the order is convenient 
for the user interface, typical libraries do not specify any order in which the ontology elements will be retrieved; 
in particular, it is not guaranteed that the elements will be reported in the same order as they were inserted at 
creation time. Therefore, we do not try to maintain order through special techniques.



## Using Ontologies

This section has questions about using ontologies in the MMI Ontology Registry and Repository ([ORR](http://mmisw.org/orr)).

#### Should I use an existing ontology from the repository or develop one of my own?

This is a complex question.  Generally, you should use an existing ontology if it will meet most of your needs.  
However, there are several considerations for choosing an existing ontology. Please see the Guide on 
[choosing a vocabulary](http://marinemetadata.org/guides/vocabs/cvchooseimplement/cvchoosing).  
If no existing ontology meets 
your needs, you may wish to develop your own. Please see the Guide on 
[developing your own vocabulary.](http://marinemetadata.org/guides/vocabs/cvdev)

#### I found an existing ontology that seems good, but it doesn't include all the terms that I need.  How do I build upon an existing ontology?

There are three 'formal' techniques to build upon an existing ontology, and an informal technique that is more optimal 
than any of those three. The three techniques below correspond to the three suggestions in the first answer
[here](http://answers.semanticweb.com/questions/18505/ontology-import-vs-owlsameas-in-ontology-design "Good reference on the options"):

1.  Import their ontology into an ontology of your own making. (Note: This is potentially non-trivial; see for example [this slightly dated analysis](http://protegewiki.stanford.edu/wiki/How_Owl_Imports_Work).)
2.  Reuse their terms in your ontology, but without importing them.
3.  Create your own copy of the other ontology's terms, either linking to the original terms using sameAs or other relations, or just quietly copying the content and making it your own. 

Each of these has strengths and weaknesses, you are encouraged to read the linked answer. Another solution, 
often overlooked but very powerful, is to work with the ontology owner to add your terms directly into their ontology. 
(They may want to enhance their ontology with your terms!) We encourage this approach as a way to maximize synergy 
among semantic artifacts on the web.

#### How do I use ontologies in the ORR? What is the format of the link?

The simplest way to use an ontology is to enter its unique identifier (a URL) into your browser. 
The MMI ORR will serve a page that describes the ontology's metadata, and then the content of the ontology. 
You may have to click on the section headers to show the content below the header. MMI provides complete 
information about the ontology it is showing.

You can access any of the terms in the ontology by appending a `/` and the term identifier (a name or code) 
to the ontology URL. This URL represents the corresponding term, and ORR will present information relevant 
to the specific term.

If you want to look at the ontology in a structured format (e.g., RDF/XML, or N3), you can construct a 
URL which requests this format, for example `http://mmisw.org/ont?form=n3&uri=`, 
followed by your ontology's URL, will present the ontology in the n3 format.

The page [Viewing a Vocabulary (FIX)](/mmiorrusrman/viewvocab) 
describes these formats and viewing options in more detail.

#### How do I query the registered ontologies programatically? What services do I have?

Please see the section [Programmatic Access (FIX)](http://marinemetadata.org/mmiorrusrman/mmiorrprg).

#### Can you give examples of how to open them in Protégé and TopBraid Composer?

Briefly, you can either specify the ontology URL directly to one of those applications, 
or download the ontology as an RDF/XML format (use a URL like `http://mmisw.org/ont?form=rdf&uri=`, 
followed by your ontology name) and then open it locally.


## Submitting and Updating Ontologies

This section includes FAQs related to submitting ontologies to the MMI Ontology Registry and Repository ([ORR](http://mmisw.org/orr)) and updating them.

#### What are the benefits of submitting my vocabulary to the ORR?

The ORR provides easy access to, and management of, your vocabulary. It also stores your ontology in a knowledge base, which can be searched or used for mapping between your vocabulary and others.

#### I have a vocabulary in OWL/text/Excel… format, how do I submit it to the ORR?

If it is an OWL-formatted ontology file, select the "Upload ontology" button, browse to your local file, upload the ontology to the workspace, choose the hosting option, and complete the metadata details. Then, click on "Review and Register" and submit. If the vocabulary is in an spreadsheet-like format, you should choose "Create vocabulary" and import the file (once you have it in CSV format), to convert it into an ontology. For more information, see the sections of the ORR manual on [hosting options](/mmiorrusrman/mmiorrref/mmiorruploadexisting) and [getting started](/mmiorrusrman/mmiorrgetstarted).

#### I have a vocabulary in non-RDF XML format, how do I submit it to the ORR?

At this point, this capability is beyond the scope of the ORR portal. The primary reason is that it would be very complex to provide the user interface and underlying capabilities to extract information from any kind of XML file in a generic way. Specific conversion tools would be necessary in these cases, such that the output from those tools can either be in a format that the ORR can read (eg., the CSV with the associated structure or an ontology format), or be submitted by the tool itself for registration using the programmatic mechanisms provided by ORR.  

Consider using XSLT conversion tools to create a CSV output that can then be submitted to ORR using "Create Ontology" and then "Import". The page http://www.w3schools.com/xsl/ includes a handy online conversion tool for learning XSLT.

#### Is it better to upload a vocabulary file or create a new file using the ORR's "create vocabulary" tools?

This entirely depends on your situation and preferences. Once you are logged in, you can upload information as an ontology file, as a simple vocabulary text file, or by entering information about individual terms in a table. For any of these options, start at the ontology overview page at [http://mmisw.org/or](http://mmisw.org/or "http://mmisw.org/or").

If you are just starting to describe your vocabulary or want to evaluate the system, it may be be easiest to create the vocabulary using our system for table-based entry. Start by clicking on the "Create Vocabulary" tab on the ontology overview page. You will see a table in which you can type your terms, definitions, and other information. (Note that you must enter 'return' _before_ entering or editing a cell value.) When you want to put your information into the system, enter its description using the drop-down "Metadata details" arrow at the top of the page, then click on "Review and Register".

If you have a vocabulary in a text file already, separated by a typical delimiter like a comma or tab, then you can upload your vocabulary directly. Again, start by using the "Create Vocabulary" tab on the ontology overview page. In the upper left cell of the table that results, you can click on the small drop-down arrow, and obtain the menu item "Import…". Click on this menu item and you will be prompted for your file. (You can edit the resulting vocabulary in the provided table.)

If you have your vocabulary formatted as an OWL-formatted ontology file, you can upload it using the Upload button on the ontology overview page. This is the best option if you are already working with your terms as an ontology. If your ontology is complex, you may want to discuss the capabilities provided by the Repository with the developers, to confirm all your goals will be met.

Note that these options are also available to update a vocabulary that is already in the system as an ontology. However, we do not recommend editing a complex ontology in the vocabulary editor, because information is likely to be lost; in this case the ontology should be edited in an ontology editor, then uploaded in place of the original.

The ORR treats ontologies entered with an ORR tool slightly differently than uploaded ontologies. For ontologies created with an ORR "ontology engineering tool" (voc2rdf for vocabularies, vine for mappings), the ontology is internally marked with a property to indicate which tool created the ontology. When the ontology is presented, a corresponding set of features is enabled; specifically a content table is presented that allows manual editing or import of a new version via a simple csv table, and a simplified view of the ontology is presented.

The "upload" mechanism, on the other hand, allows the registration of any RDF ontology of arbitrary complexity. Because these may be too complex for the simplified view and editing described above, a more complex view ("Synopsis of ontology contents") is offered, with 3 content groups (Classes, Properties, Individuals), and columns in each table for class "Name" and "type".

#### Can I upload a complex ontology and still get the simple view, or vice-versa?

No, at this time the interface is constrained according to the original upload process.

#### How much metadata should I provide with my vocabulary?

You should try to complete all the metadata fields requested under "Metadata details" for your vocabulary. The more metadata provided, the greater functionality the ORR will be able to provide using your vocabulary. The required fields (necessary for storing your ontology in the knowledge base correctly) are marked with a red asterisk.

#### I want to submit my vocabulary as a "test". How do I do that?

Submit your vocabulary per the usual instructions. However, in the metadata section, for "authority abbreviation", please use "testing", "mmitest", or a string with prefix "test_" (or "testing_") or suffix "_test" (or "_testing"). Case is ignored.

#### When creating a vocabulary, are there any best practices for creating term fields?

Yes, there are a few basic practices that are required or recommended. First of all, the top row (in the table or file) has to be used as a header row, so that the rest of the content can be described. We suggest that you complete all header names and term names as a single word, without spaces, and that you use the singular form unless you have a very specific reason to use plural. (Not sure how to capitalize words within the terms? For the header row, capitalize each word in a joined phrase, including the first; for term names, leave the first letter lower case.)  

Use one row for each term. Not every column has to be filled out for every term, but delimiters must be present to indicate missing cells.  

We strongly encourage you to put definitions for every concept, even if they are fairly simple placeholders. They can always be improved later, but only if people know what you meant in the first place!  

A complete list of recommendations is provided in our [Guide on building vocabularies](/guides/vocabs/cvdev/cvdevnew/cvdevtips)

#### I have a vocabulary in which some of the terms are composites of other terms in the vocabulary. How do I develop an ontology that accommodates this?

Please see the current discussion of [an approach](/community/teams/ont/compterm) to this issue.

#### How do I update my ontology file once it has been submitted to the ORR?

Log in, click on the link for the ontology you would like to edit, and click on "New Version". See also the section of the ORR manual on [updating](../../mmiorrusrman/mmiorrnewvocabversion) an ontology. 

#### Can I use my ontology editor XXX? (XXX = Protégé, NeOn, etc.)

Yes. You can use any tool to create your ontology. Then, you can can register the ontology in the MMI ORR. Note that some tools are provided to create vocabularies and mappings within the portal itself, but you are free to use any other appropriate mechanisms.

#### What options are available for registering my existing ontology?

Please see the manual section on [hosting options](/mmiorrusrman/mmiorrref/mmiorruploadexisting).

#### What is the difference between having my existing ontology re-hosted or re-indexed in the ORR?

Please see the manual section on [hosting options.](/mmiorrusrman/mmiorrref/mmiorruploadexisting)

#### ORR says that my file may not be in UTF-8 encoding. What does it mean and what can I do?

Any ontology contents submitted to the ORR must be encoded in UTF-8 is such a way that the underlying ontology manipulation library can read the given contents without error. In case of encoding error, ORR does a best effort to detect the probable encoding (aka, _charset_) or encodings in order to provide a diagnostics message to the user. No attempt is done to automatically convert the contents to UTF-8 as the original information may be altered. You should make sure your submitted file or contents are in UTF-8.

Some useful links are [w3shools](http://www.w3schools.com/XML/xml_encoding.asp) and [notepad](http://blogs.msdn.com/b/oldnewthing/archive/2007/04/17/2158334.aspx).


## Mapping Ontologies 

This section includes FAQs related to mapping between ontologies in the MMI Ontology Registry and Repository ([ORR).](http://mmisw.org/orr)

_--Under construction_

#### What are the benefits of mapping my vocabulary to others in the ORR?

There are many reasons for mapping between vocabularies.  Please see [Creating a Mapping Ontology](../../mmiorrusrman/mmiorrref/mmiorrnewmapping) and the Guide on [mapping vocabularies](../../guides/vocabs/cvchooseimplement/cvmap).

#### How do I map my vocabulary to others in the ORR? Are there any recommended best practices?

Please see http://marinemetadata.org/mmiorrusrman/mmiorrmapps. Also, this [Guide](../../guides/vocabs/cvchooseimplement/cvmap/cvmapvine) describes the standalone application.

