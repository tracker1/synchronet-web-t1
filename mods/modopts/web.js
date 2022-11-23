/* ****************************************************
[web] configuration from modopts.ini

Use:
    var weboptions = load({}, "modopts/web.js")

**************************************************** */
(function () {
  var path = load({}, "lib/path.js");

  // load web options from modopts.ini
  var options = load({}, "modopts.js", "web");
  if (!options) {
    options = {};
  }

  // set defaults as fallback values
  options.guest = options.guest || "Guest";
  options.timeout = parseInt(options.timeout || "43200", 10) || 43200;
  options.inactivity = parseInt(options.inactivity || "900", 10) || 900;
  options.user_registration = Boolean(options.user_registration || "false");
  options.maximum_telegram_length =
    parseInt(options.maximum_telegram_length || "800", 10) || 800;
  options.web_directory = options.web_directory || "../web";
  options.ftelnet = Boolean(options.ftelnet || "true");
  options.ftelnet_splash = options.ftelnet_splash || "../text/synch.ans";
  options.keyboard_navigation = Boolean(options.keyboard_navigation || "false");
  options.vote_functions = Boolean(options.vote_functions || "true");
  options.refresh_interval =
    parseInt(options.refresh_interval || "60000") || 60000;
  options.xtrn_blacklist = options.xtrn_blacklist || "scfg,oneliner";
  options.layout_sidebar_off = Boolean(options.layout_sidebar_off || "false");
  options.layout_sidebar_left = Boolean(options.layout_sidebar_left || "false");
  options.layout_full_width = Boolean(options.layout_full_width || "false");
  options.forum_extended_ascii = Boolean(
    options.forum_extended_ascii || "false"
  );
  options.max_messages = parseInt(options.max_messages || "0") || 0;
  options.nodelist_ibbs = Boolean(options.nodelist_ibbs || " true");
  options.darkmode_off = Boolean(options.darkmode_off || "false");

  // resolve web directory
  options.web_directory = path.normalize(
    path.join(system.ctrl_dir, options.web_directory)
  );
  options.ftelnet_splash = path.normalize(
    path.join(system.ctrl_dir, options.web_directory)
  );

  return options;
})(this);
