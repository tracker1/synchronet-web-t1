// Based on https://github.com/prettymuchbryce/http-status-codes/blob/master/src/utils-functions.ts
(function () {
  const mapping = load({}, "lib/web/status/utils.js");

  /**
   * Returns the reason phrase for the given status code.
   * If the given status code does not exist, an error is thrown.
   *
   * @param {number|string} statusCode The HTTP status code
   * @returns {string} The associated reason phrase (e.g. "Bad Request", "OK")
   * */
  function getReasonPhrase(statusCode) {
    const result = mapping.codeToPhrase[statusCode.toString()];
    if (!result) {
      throw new Error("Status code does not exist: " + statusCode);
    }
    return result;
  }

  /**
   * Returns the status code for the given reason phrase.
   * If the given reason phrase does not exist, undefined is returned.
   *
   * @param {string} reasonPhrase The HTTP reason phrase (e.g. "Bad Request", "OK")
   * @returns {string} The associated status code
   * */
  function getStatusCode(reasonPhrase) {
    const result = mapping.phraseToCode[reasonPhrase];
    if (!result) {
      throw new Error("Reason phrase does not exist: " + reasonPhrase);
    }
    return result;
  }

  return {
    getReasonPhrase: getReasonPhrase,
    getStatusCode: getStatusCode,
  };
})();
