/*
Old_iPA_Downloader by LangKhach
*/
var url = $request.url;
var obj = $request.body;

const api = "unlimapps";
const buy = "buyProduct";

if (url.indexOf(api) != -1) {
  var appidget = url.match(/\d{6,}$/);
  console.log(`🟢\n appid: ${appidget}`);
  $nobyda.write(appidget.toString(), "appid");
  $nobyda.notify(
    "Old_iPA_Dowloader",
    "iTunes PC search app and click Get",
    "By @Lãng Khách"
  );

  $done({
    body,
  });
}
if (url.indexOf(buy) != -1) {
  var appid = $nobyda.read("appid");
  var body = obj.replace(/\d{6,}/, appid);
  console.log(`🟢 Old_iPA_Downloader \nappid: ${appid}`);
  $done({
    body,
  });
}

//Modified from yichahucha
function nobyda() {
  const isRequest = typeof $request != "undefined";
  const isSurge = typeof $httpClient != "undefined";
  const isQuanX = typeof $task != "undefined";
  const isJSBox = typeof $app != "undefined" && typeof $http != "undefined";
  const isNode = typeof require == "function" && !isJSBox;
  const node = (() => {
    if (isNode) {
      const request = require("request");
      return {
        request,
      };
    }
    return null;
  })();
  const notify = (title, subtitle, message) => {
    if (isQuanX) {
      $notify(title, subtitle, message);
    }
    if (isSurge) {
      $notification.post(title, subtitle, message);
    }
    if (isNode) {
      log(title + subtitle + message);
    }
    if (isJSBox) {
      $push.schedule({
        title,
        body: subtitle ? `${subtitle}\n${message}` : message,
      });
    }
  };
  const write = (value, key) => {
    if (isQuanX) {
      return $prefs.setValueForKey(value, key);
    }
    if (isSurge) {
      return $persistentStore.write(value, key);
    }
  };
  const read = (key) => {
    if (isQuanX) {
      return $prefs.valueForKey(key);
    }
    if (isSurge) {
      return $persistentStore.read(key);
    }
  };
  const adapterStatus = (response) => {
    if (response) {
      if (response.status) {
        response.statusCode = response.status;
      } else if (response.statusCode) {
        response.status = response.statusCode;
      }
    }
    return response;
  };
  const get = (options, callback) => {
    if (isQuanX) {
      if (typeof options == "string") {
        options = {
          url: options,
        };
      }
      options.method = "GET";
      $task.fetch(options).then(
        (response) => {
          callback(null, adapterStatus(response), response.body);
        },
        (reason) => callback(reason.error, null, null)
      );
    }
    if (isSurge) {
      $httpClient.get(options, (error, response, body) => {
        callback(error, adapterStatus(response), body);
      });
    }
    if (isNode) {
      node.request(options, (error, response, body) => {
        callback(error, adapterStatus(response), body);
      });
    }
    if (isJSBox) {
      if (typeof options == "string") {
        options = {
          url: options,
        };
      }
      options.header = options.headers;
      options.handler = function (resp) {
        let error = resp.error;
        if (error) {
          error = JSON.stringify(resp.error);
        }
        let body = resp.data;
        if (typeof body == "object") {
          body = JSON.stringify(resp.data);
        }
        callback(error, adapterStatus(resp.response), body);
      };
      $http.get(options);
    }
  };
  const post = (options, callback) => {
    if (isQuanX) {
      if (typeof options == "string") {
        options = {
          url: options,
        };
      }
      options.method = "POST";
      $task.fetch(options).then(
        (response) => {
          callback(null, adapterStatus(response), response.body);
        },
        (reason) => callback(reason.error, null, null)
      );
    }
    if (isSurge) {
      $httpClient.post(options, (error, response, body) => {
        callback(error, adapterStatus(response), body);
      });
    }
    if (isNode) {
      node.request.post(options, (error, response, body) => {
        callback(error, adapterStatus(response), body);
      });
    }
    if (isJSBox) {
      if (typeof options == "string") {
        options = {
          url: options,
        };
      }
      options.header = options.headers;
      options.handler = function (resp) {
        let error = resp.error;
        if (error) {
          error = JSON.stringify(resp.error);
        }
        let body = resp.data;
        if (typeof body == "object") {
          body = JSON.stringify(resp.data);
        }
        callback(error, adapterStatus(resp.response), body);
      };
      $http.post(options);
    }
  };
  const log = (message) => console.log(message);
  const done = (value = {}) => {
    if (isQuanX) {
      isRequest ? $done(value) : null;
    }
    if (isSurge) {
      isRequest ? $done(value) : $done();
    }
  };
  return {
    isRequest,
    isJSBox,
    isNode,
    notify,
    write,
    read,
    get,
    post,
    log,
    done,
  };
}
