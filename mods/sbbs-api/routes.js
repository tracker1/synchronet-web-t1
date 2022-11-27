// TODO: Routing API with Route Params
(function (ctx) {
  ctx.router.get("/sbbs-api/client/options", "sbbs-api/client/options.js");
  ctx.router.get("/sbbs-api/client/newuser", "sbbs-api/client/newuser.js");
  ctx.router.handle();
})(this.ctx);
