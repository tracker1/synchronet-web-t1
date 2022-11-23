// var status = load({}, "lib/web/status/index.js");

// Based on https://github.com/prettymuchbryce/http-status-codes/blob/master/src/index.ts
(function () {
  var codes = load({}, "lib/web/status/status-codes.js");
  var phrases = load({}, "lib/web/status/reason-phrases.js");
  var mapping = load({}, "lib/web/status/utils.js");
  var fn = load({}, "lib/web/status/util-functions.js");

  return {
    code: codes,
    phrase: phrases,
    mapping: mapping,
    getStatusCode: fn.getStatusCode,
    getStatusText: fn.getReasonPhrase,
    getReasonPhrase: fn.getReasonPhrase,
    getHeader: function (status) {
      var statusCode = parseInt(codes[status] || status) || 0;
      if (!statusCode) throw new Error("Invalid status code");
      var phrase = fn.getReasonPhrase(statusCode);
      return statusCode + " " + phrase;
    },
  };
})();
