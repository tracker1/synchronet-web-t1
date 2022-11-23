/**
 * Object.entries() polyfill
 */
if (!Object.entries) {
  Object.entries = function (obj) {
    return Object.keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  };
}

/**
 * Object.entriesFrom() polyfill
 */
if (!Object.fromEntries) {
  Object.fromEntries = function (entries) {
    if (!entries || !entries[Symbol.iterator]) {
      throw new Error(
        "Object.fromEntries() requires a single iterable argument"
      );
    }
    var obj = {};
    for (var i = 0; i < entries.length; i++) {
      var key = entries[i][0];
      var value = entries[i][1];
      obj[key] = value;
    }
    return obj;
  };
}

/**
 * Object.values() polyfill
 */
if (!Object.values) {
  Object.values = function (obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
}

/**
 * Array.from() polyfill
 */
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === "function" || toStr.call(fn) === "[object Function]";
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. var C be the this value.
      var C = this;

      // 2. var items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError(
          "Array.from requires an array-like object - not null or undefined"
        );
      }

      // 4. If mapfn is undefined, then var mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== "undefined") {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError(
            "Array.from: when provided, the second argument must be a function"
          );
        }

        // 5. b. If thisArg was supplied, var T be thisArg; else var T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. var lenValue be Get(items, "length").
      // 11. var len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. var A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, var A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. var k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] =
            typeof T === "undefined"
              ? mapFn(kValue, k)
              : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. var putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  })();
}

/**
 * Array.prototype.fill() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#polyfill
 * @license MIT
 */
if (!Array.prototype.fill) {
  Array.prototype.fill = function (value) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length >>> 0;

    // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0;

    // Step 8.
    var k =
      relativeStart < 0
        ? Math.max(len + relativeStart, 0)
        : Math.min(relativeStart, len);

    // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;

    // Step 11.
    var finalValue =
      relativeEnd < 0
        ? Math.max(len + relativeEnd, 0)
        : Math.min(relativeEnd, len);

    // Step 12.
    while (k < finalValue) {
      O[k] = value;
      k++;
    }

    // Step 13.
    return O;
  };
}

/**
 * Array.prototype.find() polyfill
 * Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Array.prototype.find) {
  Array.prototype.find = function (callback) {
    // 1. var O be ? ToObject(this value).
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. var len be ? ToLength(? Get(O, "length")).
    var len = o.length >>> 0;

    // 3. If IsCallable(callback) is false, throw a TypeError exception.
    if (typeof callback !== "function") {
      throw new TypeError("callback must be a function");
    }

    // 4. If thisArg was supplied, var T be thisArg; else var T be undefined.
    var thisArg = arguments[1];

    // 5. var k be 0.
    var k = 0;

    // 6. Repeat, while k < len
    while (k < len) {
      // a. var Pk be ! ToString(k).
      // b. var kValue be ? Get(O, Pk).
      // c. var testResult be ToBoolean(? Call(callback, T, « kValue, k, O »)).
      // d. If testResult is true, return kValue.
      var kValue = o[k];
      if (callback.call(thisArg, kValue, k, o)) {
        return kValue;
      }
      // e. Increase k by 1.
      k++;
    }

    // 7. Return undefined.
    return undefined;
  };
}

/**
 * Array.prototype.findIndex() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 * @license MIT
 */
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, "findIndex", {
    value: function (predicate) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. var O be ? ToObject(this value).
      var o = Object(this);

      // 2. var len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== "function") {
        throw new TypeError("predicate must be a function");
      }

      // 4. If thisArg was supplied, var T be thisArg; else var T be undefined.
      var thisArg = arguments[1];

      // 5. var k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. var Pk be ! ToString(k).
        // b. var kValue be ? Get(O, Pk).
        // c. var testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    configurable: true,
    writable: true,
  });
}

/**
 * Array.flat() polyfill
 * Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#reduce_concat_isArray_recursivity
 */
if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth) {
    "use strict";

    // If no depth is specified, default to 1
    if (depth === undefined) {
      depth = 1;
    }

    // Recursively reduce sub-arrays to the specified depth
    var flatten = function (arr, depth) {
      // If depth is 0, return the array as-is
      if (depth < 1) {
        return arr.slice();
      }

      // Otherwise, concatenate into the parent array
      return arr.reduce(function (acc, val) {
        return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
      }, []);
    };

    return flatten(this, depth);
  };
}

/**
 * Array.prototype.includes() polyfill
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Array.prototype.includes) {
  Array.prototype.includes = function (search, start) {
    "use strict";
    if (search instanceof RegExp) {
      throw TypeError("first argument must not be a RegExp");
    }
    if (start === undefined) {
      start = 0;
    }
    return this.indexOf(search, start) !== -1;
  };
}
