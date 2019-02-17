!(function(window, console) {
  var AMapLog = function(AMap) {
    var title = "AMap log:";
    var info = "\n" + [
      " - version: " + AMap.v
    ].join("\n");

    console.log(title, info);
    return title + info;
  };

  var AMapUILog = function(AMapUI) {
    var title = "AMapUI log:";
    var info = "\n" + [
      " - version: " + AMapUI.libConf.mainVersion
    ].join("\n");

    console.log(title, info);
    return title + info;
  };

  window.log = {
    AMapLog: AMapLog,
    AMapUILog: AMapUILog
  };
})(window, console);
