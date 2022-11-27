(function (ctx) {
  var statusUtil = ctx.app.status;

  function handleHeaderCase(header) {
    return header
      .split("-")
      .map(function (part) {
        if (!part.length) return part;
        var f = part[0].toUpperCase();
        var rest = part.substring(1);
        return f + rest.toLowerCase();
      })
      .join("-");
  }

  var res = Object.assign({}, http_reply, {
    body: undefined,
    header: function (name, value) {
      if (!name) throw new Error("name is required");
      if (value === undefined) {
        return http_reply.header[handleHeaderCase(name)];
      }
      http_reply.header[handleHeaderCase(name)] =
        String(value).toString() || "";
      return res;
    },
    nocache: function () {
      return res
        .header("pragma", "no-cache")
        .header("expires", 0)
        .header("cache-control", "must-revalidate");
    },
    status: function (statusCode) {
      http_reply.status = statusUtil.getHeader(statusCode);
      return res;
    },
    content: function (contentType) {
      if (contentType === undefined) return res.header("content-type");
      return res.header("content-type", contentType);
    },
    text: function (status, body, contentType) {
      if (res.ended) {
        throw new Error("Attempting to write after response ended.");
      }

      if (arguments.length < 2) {
        body = status;
        status = 200;
      }

      if (contentType) {
        res.content(contentType);
      }

      res.status(status);
      res.body = body;
    },
    json: function (status, body) {
      if (res.ended) {
        throw new Error("Attempting to write after response ended.");
      }

      if (arguments.length < 2) {
        body = status;
        status = 200;
      }

      res.status(status).content("application/json");
      res.body = JSON.stringify(body);
      return res;
    },
    end: function (statusCode) {
      if (res.ended) {
        throw new Error("Attempting to write after response ended.");
      }
      // ctx.log.response("End of request");
      res.ended = true;

      // ensure response status
      if (statusCode) {
        res.status(statusCode);
      } else if (!http_reply.status) {
        res.status(200);
      }

      var body = res.body;
      if (typeof body === "string") {
        write(res.body);
      } else if (body !== undefined) {
        write(JSON.stringify(body));
      }
      ctx.log.response("Response sent.");
      return;
    },
  });

  return res;
})(this.ctx);
