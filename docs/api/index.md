# ORR API Documentation

The API documentation is described in detail for each ORR instance according to
the version of the ORR Ont software being used.
Besides containing the documentation itself, the API Documentation pages referenced below
also allow users to directly exercise the API against the corresponding ORR REST endpoint.

|ORR Instance| API Documentation | Portal Page |
|-|-|-|
| MMI ORR       | [https://mmisw.org/ontapi/](https://mmisw.org/ontapi/)           | [https://mmisw.org/ont](https://mmisw.org/ont) |
| XDOMES ORR    | [https://xdomes.org/ontapi/](https://xdomes.org/ontapi/)         | [https://xdomes.org/ont](https://xdomes.org/ont) |
| ESIP COR      | [http://cor.esipfed.org/ontapi/](http://cor.esipfed.org/ontapi/) | [http://cor.esipfed.org/ont](http://cor.esipfed.org/ont) |
| SensorML ORR  | [http://sensorml.com/ontapi/](http://sensorml.com/ontapi/)       | [http://sensorml.com/ont](http://sensorml.com/ont) |

In each case you can use the "Authorize" button at the top of the API Documentation page to login with your
corresponding credentials.
Once authorized, you will be able to not only perform the basic `GET` operations,
but also see expanded responses according to your access privileges
as well as perform other operations.

In each API operation description, you are able to set the variables in the descriptions of the API interface,
so that you can execute the API call, as well as see it appropriately formatted for an invocation with
the [`curl`](https://curl.haxx.se/) command line tool.

## Format Parameter

Various API operations accept a `format` parameter to indicate the relevant serialization
format:
either the desired one for GET requests,
or that of the submitted ontology payload in POST requests.

The recognized values for the `format` parameter are:

| `format` | Name      | Reference |
|----------| ----------|-----------|
| jsonld   | JSON-LD   | [https://www.w3.org/TR/json-ld/](https://www.w3.org/TR/json-ld/) |
| rdf      | RDF/XML   | [https://www.w3.org/TR/REC-rdf-syntax/](https://www.w3.org/TR/REC-rdf-syntax/) |
| n3       | Notation3 | [https://www.w3.org/TeamSubmission/n3/](https://www.w3.org/TeamSubmission/n3/) |
| nt       | N-TRIPLE  | [https://www.w3.org/TR/n-triples/](https://www.w3.org/TR/n-triples/) |
| ttl      | TURTLE    | [https://www.w3.org/TeamSubmission/turtle/](https://www.w3.org/TeamSubmission/turtle/) |
| owx      | OWL/XML   | [https://www.w3.org/TR/owl-xml-serialization/](https://www.w3.org/TR/owl-xml-serialization/) |

### Special format for metadata

Only for GET ontology requests, the special format parameter value `!md` can be used
to retrieve metadata about the ontology.
The metadata is given in terms of the list of predicates associated with the
IRI as a subject in corresponding triples in the registered ontology.

For example, for
[https://mmisw.org/ont/api/v0/ont?iri=http://www.w3.org/ns/ssn/&format=!md](https://mmisw.org/ont/api/v0/ont?iri=http://www.w3.org/ns/ssn/&format=!md),
the returned JSON will look like so:

```json
{
    "uri": "http://www.w3.org/ns/ssn/",
    "metadata": {
        "http://purl.org/dc/terms/created": [
            "2017-04-17"
        ],
        "http://purl.org/dc/terms/description": [
            "This ontology describes sensors, actuators and observations, and related concepts. ..."
        ],
        "http://purl.org/dc/terms/license": [
            "http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document",
            "http://www.opengeospatial.org/ogc/Software"
        ],
        "http://purl.org/dc/terms/rights": [
            "Copyright 2017 W3C/OGC."
        ],
        "http://purl.org/dc/terms/title": [
            "Semantic Sensor Network Ontology"
        ],
   },
...
    "name": "Semantic Sensor Network Ontology",
    "author": "OGC Spatial Data on the Web Working Group",
    "format": "n3",
    "status": "unstable",
    "version": "20170529T160905",
    "versions": [
        {
            "status": "unstable",
            "version": "20170529T160905",
            "visibility": "public"
        }
    ],
...
}
```

Note that besides the `metadata` entry, the main returned object will also
include some pieces of metadata at the ORR system level related with the ontology
(including, file format of the submitted ontology, current version designation and
summary of all versions, and others). These extra metadata pieces are mainly intended
for processing by client applications and tools (like the ORR portal itself).
