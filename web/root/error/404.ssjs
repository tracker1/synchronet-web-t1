// set request started dtm
http_request.started = new Date();

// log(LOG_ERROR, "vpath:" + http_request.virtual_path);

if (/^\/sbbs-api\//.test(http_request.virtual_path)) {
  // API Call
  load("sbbs-api/index.js");
} else {
  // Single Page Application
  load("lib/web/index-spa-html.js");
}
