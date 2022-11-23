(function (ctx) {
  var req = Object.assign({}, http_request, {
    getLogInfo: function () {
      return {
        started: ctx.started,
        ip: http_request.remote_ip,
        method: http_request.method,
        request: http_request.request_string,
      };
    },
  });
  return req;
})(this.ctx);
