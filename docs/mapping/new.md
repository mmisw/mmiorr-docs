!!! warning
    _Page Status_: **Under construction**

## Why map between controlled vocabularies?

You might need to use the “create mapping” capabilities if, for example, you need a simple 
term translator, you need to translate between metadata records, or you want to document 
relationships between multiple vocabularies that you are using.
You can find a more thorough guide on the reasons for mapping between 
controlled vocabularies [in the MMI guide on mapping](https://marinemetadata.org/guides/vocabs/cvchooseimplement/cvmap).

## Steps for Creating a Mapping Ontology File

(Demo screencast included below.)

1\. Sign in to ORR

2\. Click the “Create mapping” button.

3\. Complete the metadata details for your new mapping file.

4\. Click on “Add” working ontologies to include the ontologies between which you would like to map. 
One at a time, type in the abbreviation each ontology you would like to use in the mapping 
(e.g., “CF” or “IOOS”). The abbreviation is a search parameter that will return the IRIs of 
any relevant ontologies.<span> </span> You then select the IRI for each ontology you want to 
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

The following [screencast](http://www.screencast.com/t/ODk0Nzg4) 
demonstrates the main functionality for creating and registering a mapping ontology.

<object id="scPlayer" width="932" height="626"><param name="movie" value="http://content.screencast.com/users/carueda/folders/Camtasia/media/0b8c3891-534c-47f8-9d9a-8fd703e2d153/mp4h264player.swf"> <param name="quality" value="high"> <param name="bgcolor" value="#FFFFFF"> <param name="flashVars" value="thumb=http://content.screencast.com/users/carueda/folders/Camtasia/media/0b8c3891-534c-47f8-9d9a-8fd703e2d153/FirstFrame.jpg&amp;containerwidth=932&amp;containerheight=626&amp;content=http://content.screencast.com/users/carueda/folders/Camtasia/media/0b8c3891-534c-47f8-9d9a-8fd703e2d153/newmapping.mp4"> <param name="allowFullScreen" value="true"> <param name="scale" value="showall"> <param name="allowScriptAccess" value="always"> <param name="base" value="http://content.screencast.com/users/carueda/folders/Camtasia/media/0b8c3891-534c-47f8-9d9a-8fd703e2d153/"> <embed type="application/x-shockwave-flash" width="932" height="626" src="http://content.screencast.com/users/carueda/folders/Camtasia/media/0b8c3891-534c-47f8-9d9a-8fd703e2d153/mp4h264player.swf" scale="showall" base="http://content.screencast.com/users/carueda/folders/Camtasia/media/0b8c3891-534c-47f8-9d9a-8fd703e2d153/" allowfullscreen="true" flashvars="thumb=http://content.screencast.com/users/carueda/folders/Camtasia/media/0b8c3891-534c-47f8-9d9a-8fd703e2d153/FirstFrame.jpg&amp;containerwidth=932&amp;containerheight=626&amp;content=http://content.screencast.com/users/carueda/folders/Camtasia/media/0b8c3891-534c-47f8-9d9a-8fd703e2d153/newmapping.mp4" allowscriptaccess="always" bgcolor="#FFFFFF" quality="high"></object> 

## Additional References

[VINE Guide](https://marinemetadata.org/guides/vocabs/cvchooseimplement/cvmap/cvmapvine)

[Guide to the Mapping Process](https://marinemetadata.org/node/4944)
