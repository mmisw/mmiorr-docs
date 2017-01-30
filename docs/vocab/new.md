!!! warning
    _Page Status_: **Under construction**

ORR allows users to create an ontology manually by creating a table of definitions, for example:

|name|description|
|-|-|
| foo |description of foo ... |
| baz |description of baz ... |

The first row specifies properties for the terms in the subsequent rows. 
The first column is special in that each cell's content is used to create the IRI for the term in each row. 
Once the vocabulary is registered, all these IRIs will resolvable on the web.

The table can be populated by importing text in CSV format, 
as described in the [Vocabulary Import](http://mmisw.org/orrdoc/vocab/import.md) page. 
However, this document describes the operation of populating this table manually. 

## Version 3 Documentation

<img class="smallfloatright" alt="Create initial vocabulary" src="../../img/cor/cor-vocabulary-create-initial-20160828.png">
Once signed in, click the "Create vocabulary" button in the main ORR page.

<p class="clearfix">&nbsp;</p>

To register your vocabulary, you need to create metadata to describe the ontology. Required metadata is shown with a red asterisk.

![Vocabulary create metadata](../img/cor/cor-vocabulary-create-metadata-20160828.png)

If you aren't sure what a particular metadata field means, hover over the field to get help.

![Vocabulary create metadata help](../img/cor/cor-vocabulary-create-metadata-help-20160828.png)

You can start by selecting a local class name -- this is a required field.

![Vocabulary create local name](../img/cor/cor-vocabulary-create-local-name-20160828.png)

<img class="smallfloatright" alt="Create initial vocabulary" src="../../img/cor/cor-vocabulary-create-term-property-20160828.png">
Then you can fill in the vocabulary contents. 
That includes the list of terms; and the associated properties, or information, for each term. 
Click on `+Term` to add a new term, and `+Property` to add a new piece of information that needs to be filled in for each term.

<p class="clearfix">&nbsp;</p>

Once you finish entering properties, terms, and content to your satisfaction, you can review and register your vocabulary. 
Please see the [“Completing Vocabulary Registration"](http://mmisw.org/orrdoc/vocab/register) page for more details.

## Version 2 Documentation

[This screencast](http://www.screencast.com/t/ZTBkMjMz) demonstrates for the ORR Version 2 software the creation of a vocabulary (with both in-place editing of the table cell, and  import of text contents in CSV format) and its registration in ontology format.  

<object width="1068" height="565"><param name="movie" value="http://content.screencast.com/users/carueda/folders/Camtasia/media/4b0e5a9e-fb31-47b4-a8d8-b82d102743ad/mp4h264player.swf"> <param name="quality" value="high"> <param name="bgcolor" value="#FFFFFF"> <param name="flashVars" value="thumb=http://content.screencast.com/users/carueda/folders/Camtasia/media/4b0e5a9e-fb31-47b4-a8d8-b82d102743ad/FirstFrame.jpg&amp;containerwidth=1068&amp;containerheight=565&amp;content=http://content.screencast.com/users/carueda/folders/Camtasia/media/4b0e5a9e-fb31-47b4-a8d8-b82d102743ad/mmiorr_create_vocab_import.mp4"> <param name="allowFullScreen" value="true"> <param name="scale" value="showall"> <param name="allowScriptAccess" value="always"> <param name="base" value="http://content.screencast.com/users/carueda/folders/Camtasia/media/4b0e5a9e-fb31-47b4-a8d8-b82d102743ad/"> <embed type="application/x-shockwave-flash" width="1068" height="565" src="http://content.screencast.com/users/carueda/folders/Camtasia/media/4b0e5a9e-fb31-47b4-a8d8-b82d102743ad/mp4h264player.swf" scale="showall" base="http://content.screencast.com/users/carueda/folders/Camtasia/media/4b0e5a9e-fb31-47b4-a8d8-b82d102743ad/" allowfullscreen="true" flashvars="thumb=http://content.screencast.com/users/carueda/folders/Camtasia/media/4b0e5a9e-fb31-47b4-a8d8-b82d102743ad/FirstFrame.jpg&amp;containerwidth=1068&amp;containerheight=565&amp;content=http://content.screencast.com/users/carueda/folders/Camtasia/media/4b0e5a9e-fb31-47b4-a8d8-b82d102743ad/mmiorr_create_vocab_import.mp4" allowscriptaccess="always" bgcolor="#FFFFFF" quality="high"></object> 
