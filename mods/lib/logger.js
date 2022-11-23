/**
 * var log = load({ log:log, options }, "lib/logger.js");
 *
 * options: Object
 *   pretty: boolean, pretty print
 *   level: string or number, (default: RESPONSE) LEVELS match below
 */
(function (logFn, options) {
  const clone = load({}, "lib/clone.js");

  const LEVELS = {
    FATAL: 1000,
    ERROR: 900,
    START: 750,
    STOP: 700,
    RESPONSE: 650,
    REQUEST: 600,
    WARN: 500,
    INFO: 400,
    CLIENTRESPONSE: 350,
    CLIENTREQUEST: 300,
    DEBUG: 200,
    TRACE: 100,
  };

  // synchronet logging output level
  const OUTPUTLEVEL = {
    FATAL: 1, // LOG_NOTICE
    ERROR: 1, // LOG_ERROR,
    START: 1, // LOG_INFO,
    STOP: 1, // LOG_INFO,
    RESPONSE: 1, // LOG_INFO,
    REQUEST: 1, // LOG_DEBUG,
    WARN: 1, // LOG_WARNING,
    INFO: 1, // LOG_INFO,
    CLIENTRESPONSE: 1, // LOG_DEBUG,
    CLIENTREQUEST: 1, // LOG_TRACE,
    DEBUG: 1, // LOG_DEBUG,
    TRACE: 1, // LOG_TRACE,
  };

  const levelsByNumber = Object.keys(LEVELS).reduce(function (a, k) {
    a[LEVELS[k]] = k;
    return a;
  }, {});

  var pretty = !!options.pretty;
  var logLevel =
    parseLogLevel(options.level || LEVELS.RESPONSE) || LEVELS.RESPONSE;

  function clearStack(obj) {
    if (typeof obj !== "object") return;
    if (obj.stack) {
      obj.stack = undefined;
    }
    Object.values(obj).forEach(clearStack);
  }

  function parseLogLevel(level) {
    // numeric matching
    if (!isNaN(level)) {
      return levelsByNumber[level] ? level : null;
    }

    const m = LEVELS[String(level).trim().toUpperCase()] || null;
    return m || null;
  }

  function getLogName(level) {
    const m = levelsByNumber[level];
    return m || null;
  }

  // format message for output
  function formatMessage(logLevel, level) {
    const args = Array.from(arguments).slice(2);

    if (parseLogLevel(level) < logLevel) return null;
    if (args.length < 1) return null;
    if (args.length === 1 && (args[0] === null || args[0] === undefined))
      return null;
    const item = {
      level: getLogName(level),
      logged: new Date(),
      detail: normalizeDetail.apply(this, args),
    };
    if (logLevel > LEVELS.INFO) {
      clearStack(item.detail);
    }

    return item;
  }

  function normalizeDetail() {
    const args = Array.from(arguments);
    return args.length === 1 && typeof args[0] === "object"
      ? clone(args[0])
      : { message: format.apply(this, clone(args)) };
  }

  function logger(level) {
    var iLevel = parseLogLevel(level);
    var sLevel = getLogName(iLevel);
    var oLevel = OUTPUTLEVEL[sLevel] || LOG_INFO;
    return function levelLogger() {
      var args = Array.from(arguments);
      args.unshift(iLevel);
      args.unshift(logLevel);

      // format JSON for logging
      var item = formatMessage.apply(this, args);
      if (!item) {
        return; // nothing to output - filtered by logLevel
      }

      // JSON stringified version
      var item2 = JSON.stringify(item);

      if (!pretty) {
        logFn(oLevel, JSON.stringify(item2));
        return;
      }

      const { level, logged, detail } = item;
      logFn(oLevel, [logged, iLevel, JSON.stringify(detail)].join(" "));
    };
  }

  return {
    levels: LEVELS,
    format: formatMessage,
    setLevel: function (level) {
      logLevel = parseLogLevel(level) || logLevel;
    },
    getLevel: function () {
      return getLogName(logLevel);
    },
    set level(newLevel) {
      logLevel = parseLogLevel(newLevel) || logLevel;
    },
    _normalizeDetail: normalizeDetail.bind(this),
    fatal: logger(LEVELS.FATAL),
    error: logger(LEVELS.ERROR),
    start: logger(LEVELS.START),
    stop: logger(LEVELS.STOP),
    response: logger(LEVELS.RESPONSE),
    request: logger(LEVELS.REQUEST),
    warn: logger(LEVELS.WARN),
    info: logger(LEVELS.INFO),
    clientResponse: logger(LEVELS.CLIENTRESPONSE),
    clientRequest: logger(LEVELS.CLIENTREQUEST),
    debug: logger(LEVELS.DEBUG),
    trace: logger(LEVELS.TRACE),
  };
})(this.log, this.options || {});
