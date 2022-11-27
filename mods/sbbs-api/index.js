load("lib/polyfill.js");
load("sbbsdefs.js");

const ctx = load(this, "lib/web/index.js");
ctx.log.setLevel(ctx.log.levels.INFO);

// http_reply.status = "200 OK";
// http_reply.header["Content-Type"] = "text/json";

try {
  ctx.log.request("Begin Request");

  // nocache by default
  ctx.res.nocache();
  load({ ctx: ctx }, "sbbs-api/routes.js");
  ctx.res.end();
  ctx.log.response("End Request");
} catch (error) {
  var message = (error && error.message) || "Unexpected server error";
  var statusCode = parseInt((error && error.status) || 500, 10) || 500;

  if (statusCode >= 500) {
    // log 500 errors
    ctx.log.error(error);
  }

  ctx.res
    .nocache()
    .status(statusCode)
    .json({
      error: {
        status: statusCode,
        statusText: ctx.app.status.getReasonPhrase(statusCode),
        message: message,
      },
      detail: {
        req: ctx.req,
      },
    })
    .end();
}
