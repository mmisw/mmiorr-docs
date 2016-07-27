## ORR Documentation source

The master branch of this repository contains the source of the ORR documentation. 

The documentation source is written in plain text files using 
[Markdown](http://daringfireball.net/projects/markdown/) syntax.

We use [MkDocs tool](http://www.mkdocs.org/) for the site generation,
currently deployed at http://mmisw.github.io/mmiorr-docs/

**NOTE**: We are still migrating the contents from the 
[original site](https://marinemetadata.org/mmiorrusrman).

Your help improving this documentation is 
[welcome!](https://github.com/mmisw/mmiorr-docs/blob/master/CONTRIBUTING.md)


### Build and deploy 

```shell
$ unset PYTHONPATH    # if defined (with . in particular) it might cause mkdocs to fail

$ mkdocs gh-deploy --clean
  INFO    -  Building documentation to directory: .../mmiorr-docs/site
  INFO    -  Copying '/.../mmiorr-docs/site' to 'gh-pages' branch and pushing to GitHub.
  Password for 'https://...@github.com':
  INFO    -  Your documentation should shortly be available at: http://mmisw.github.io/mmiorr-docs
```
