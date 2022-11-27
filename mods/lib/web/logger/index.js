(function (logFn) {
  var baseLogger = load({ log: logFn }, "lib/logger.js");

  function makeContextLogger(method, addResponse) {
    var sMethod = method;
    return function () {
      var detail = baseLogger._normalizeDetail.apply(
        null,
        Array.from(arguments)
      );
      detail._hoist = {
        req: {
          todo: "request details here",
        },
        res: addResponse ? {
          todo: "response details here",
        } : undefined,
      };

      // logFn(1, "*** TEST ***: " + JSON.stringify({ detail: detail }))
      sMethod(detail);
    };
  }

  var contextLogger = Object.assign({}, baseLogger, {
    fatal: makeContextLogger(baseLogger.fatal),
    error: makeContextLogger(baseLogger.error),
    start: makeContextLogger(baseLogger.start),
    stop: makeContextLogger(baseLogger.stop),
    response: makeContextLogger(baseLogger.response, true),
    request: makeContextLogger(baseLogger.request),
    warn: makeContextLogger(baseLogger.warn),
    info: makeContextLogger(baseLogger.info),
    clientResponse: makeContextLogger(baseLogger.clientResponse),
    clientRequest: makeContextLogger(baseLogger.clientRequest),
    debug: makeContextLogger(baseLogger.debug),
    trace: makeContextLogger(baseLogger.trace),
  });

  return contextLogger;
})(this.log);
