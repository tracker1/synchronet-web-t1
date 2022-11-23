// Single-page application, send index page.
load("lib/polyfill.js");
load("sbbsdefs.js");
var weboptions = load({}, "modopts/web.js");
var path = load({}, "lib/path.js");

http_reply.header.pragma = "no-cache";
http_reply.header.expires = "0";
http_reply.header["cache-control"] = "must-revalidate";

log(
  LOG_ERROR,
  "path: " + path.join(weboptions.web_directory, "root/index.html")
);

http_reply.status = "200 OK";
http_reply.header["Content-Type"] = "text/json";
write(JSON.stringify(http_request, null, 2));

// const idx = new File(path.join(weboptions.web_directory, "root/index.html"));
// if (idx.exists && idx.open("r+")) {
//   http_reply.status = "200 OK";
//   http_reply.header["Content-Type"] = "text/html";
//   write(idx.read());
//   idx.close();
// } else {
//   http_reply.status = "404 Not Found";
//   http_reply.header["Content-Type"] = "text/plain";
//   writeln("Not Found");
// }
