load("lib/polyfill.js");
load("sbbsdefs.js");

(function () {
  var ctx = {
    started: new Date(),
  };
  ctx.app = {
    options: load("modopts/web.js"),
    status: load("lib/web/status/index.js"),
  };
  ctx.log = load({ ctx: ctx, log: log }, "lib/web/logger/index.js");
  ctx.req = load({ ctx: ctx }, "lib/web/request/index.js");
  ctx.res = load({ ctx: ctx }, "lib/web/response/index.js");
  ctx.router = load({ ctx: ctx }, "lib/web/router/index.js");
  return ctx;
})();
