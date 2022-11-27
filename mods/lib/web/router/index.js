(function (ctx) {
  var router = {};

  var defaultHandler = function () {
    throw Object.assign(new Error("No matching handler found."), { status: 404 });
  };
  var routeMatch = {
    found: false,
    method: ctx.req.method.trim().toLowerCase(),
    handler: null,
  };

  function matchRoute(method, route, handler) {
    // if there's already a matching route, skip check
    if (routeMatch.found) return;

    method = String(method || "").trim().toLowerCase();
    var cp = ctx.req.path.trim().toLowerCase();
    var rp = String(route).trim().toLowerCase();

    // method doesn't match current request - don't bother adding it
    if (routeMatch.method !== method) {
      return;
    }

    if (route instanceof RegExp && route.test(ctx.req.path)) {
      routeMatch.match = true;
      routeMatch.handler = handler;
      return;
    }


    if (cp.indexOf(rp) !== 0) {
      return;
    }

    var left = cp.replace(rp, "");
    if (left && left[0] !== "/") {
      return; // incomplete match
    }
    routeMatch.found = true;
    routeMatch.handler = handler;
  }

  router.get = matchRoute.bind(null, "get");
  router.put = matchRoute.bind(null, "put");
  router.post = matchRoute.bind(null, "post");
  router.delete = matchRoute.bind(null, "delete");

  router.handle = function () {
    ctx.log.info({ routeMatch: routeMatch });
    if (!(routeMatch.found && routeMatch.handler)) {
      defaultHandler();
      return;
    }

    var handler = routeMatch.handler;
    if (typeof handler === "string") {
      handler = load(routeMatch.handler);
      ctx.log.info({ msg: "#### LOAD HANDLER", handler: typeof handler });
    }
    if (typeof handler !== "function") {
      throw new Error("Invalid Route Handler Defined");
    }

    handler(ctx);
  }

  return router;
}(this.ctx));