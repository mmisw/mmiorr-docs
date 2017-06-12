!!! warning
    _Page Status_: **Under construction**

As described in the [Semantic Web Basics section](/semweb/#direct-triple-table), the ORR includes a mechanism
that allows to directly capture a set of _subject-predicate-object triples_, in a so-called _mapping ontology_.

## Steps for Creating a Mapping Ontology File

1\. Sign in to ORR

2\. Click the "Create mapping" button.

3\. Complete the metadata details for your new mapping file.

4\. Click on “Add” working ontologies to include the ontologies between which you would like to map. 
One at a time, type in the abbreviation each ontology you would like to use in the mapping 
(e.g., “CF” or “IOOS”). The abbreviation is a search parameter that will return the IRIs of 
any relevant ontologies. You then select the IRI for each ontology you want to 
add to your mapping file. If you want to map against an external ontology, simply enter its 
full URL in the field. Each working ontology will be assigned a letter (e.g., "A", "B").

5\. Select which ontology you want represented in each mapping window, by highlighting it ("A" or "B", etc.).

6\. If you want to search for certain terms within that ontology, type the term in the search window 
(e.g., "salinity"). If you want to see all the terms within a given ontology, 
simply select the search button (flashlight icon).

7\. To map between individual terms, select the term in each ontology (check the box next to the term) 
and choose the appropriate button representing the type of relationship between the terms (e.g, 
exact match, approximate match, broader than, narrower than, or related match). 
You will see the relationships you have mapped below the lists of terms.

8\. Once you have completed your mappings, click the “review and register” button at the top of the page.
This will create an ontology (.owl) file of your mapped terms and request your review.
You can then close the dialog box and return to editing the ontology or you can select “register” to 
add the ontology file to the ORR. If you register the ontology at this point and want to edit it 
again later, you may do so by choosing “edit new version” when you select the ontology in the ORR.


## Additional References

[Guide to the Mapping Process](https://marinemetadata.org/node/4944)
