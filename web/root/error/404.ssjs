// set request started dtm
http_request.started = new Date();

// log(LOG_ERROR, "vpath:" + http_request.virtual_path);

if (/^\/sbbs-api\//.test(http_request.virtual_path)) {
  // API Call
  load("sbbs-api/index.js");
} else {
  // Single Page Application
  // load("lib/web/index-spa-html.js");
  http_reply.status = '301 Moved';
  http_reply.header.pragma = 'no-cache';
  http_reply.header.expires = '0';
  http_reply.header['cache-control'] = 'must-revalidate';
  http_reply.header['Location'] = 'https://www.roughneckbbs.com/';

  writeln('<!DOCTYPE html>');
  writeln('<html>');
  writeln('<head>');
  writeln('<title>Roughneck BBS</title>');
  writeln('</head>');
  writeln('<body>');
  writeln('Redirecting to <a href="https://www.roughneckbbs.com/">https://www.roughneckbbs.com/</a>');
  writeln('</body>');
  writeln('</html>');
}
