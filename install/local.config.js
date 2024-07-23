// Bochica local.config.js

// (required) main ORR page URL.
// This can start with '//' to dynamically accommodate http or https access.
appConfig.portal.mainPage  = "//localhost:9090/ont/";

// (required) orr-ont endpoint URL. (No trailing slash.)
// This could be a full URL ("http://localhost:9090/ont")
// or a path relative to the portal mainPage host
appConfig.orront.rest  = "/ont";

// (required) SPARQL endpoint URL.  (No trailing slash.)
// This could be a full URL ("http://localhost:9090/sparql")
// or a path relative to the orr-portal host.
appConfig.orront.sparqlEndpoint = "http://localhost:9090/sparql";
// NOTE: with the default configuration provided for agraph (AllegroGraph) in orront.conf,
// the value here could be "http://localhost:10035/repositories/mmiorr" for initial testing.
// But this value should be the exposed URL of such endpoint, for example, as suggested
// in the Apache HTTPD proxy configuration section.

// (optional) URL of image to show in the page header.
// By default, this will be MMI ORR's logo.
//appConfig.branding.logo = "http://localhost:9090/mylogo.png";

// (optional) string used for <head><title> in main pages.
// By default, this will be related with the MMI ORR.
appConfig.branding.title  = "My ORR";

// (optional) "Terms of Use" link.
// No default value.
//appConfig.branding.tou = "http://localhost:9090/mytermsofuse"

// (optional) "Contact us" link.
// No default value.
//appConfig.branding.contactUs = "http://localhost:9090/contactus";  // OR  "mailto:addr@example.net";

// (optional) recaptcha siteKey.
// If given, then the corresponding
// privateKey must be specified in `orront.conf`
//appConfig.recaptcha = { siteKey: "the-public-key" };
