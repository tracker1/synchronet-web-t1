/* *******************************************************
Path library

To use this library:
   
   var path = load({}, 'lib/path.js', "exports");

******************************************************* */

(function () {
  function normalizePart(part) {
    if (typeof part === "number") {
      if (!isNaN(part)) {
        return part.toString();
      }
    }
    if (typeof part === "boolean") {
      return String(part).toString();
    }
    if (!part) return "";
    return String(part).toString();
  }

  function join() {
    var ret = "";
    for (var i = 0; i < arguments.length; i++) {
      var part = normalizePart(arguments[i]).replace(/[\\\/]+/, "/");

      // no return value yet
      if (!ret) {
        ret = part;
        continue;
      }

      // replace with current argument
      if (part[0] == "/") {
        ret = part;
        continue;
      }

      ret += "/" + part;
    }
    return ret.replace(/[\\\/]{2,}/g, "/");
  }

  function normalize(path) {
    return path.replace(/[\\\/]{2,}/g, "/").replace(/\/[^\/]+\/..\//, "/");
  }

  var path = {};
  path.join = join;
  path.normalize = normalize;

  return path;
})();
