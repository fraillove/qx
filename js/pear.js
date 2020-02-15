/*
pear unlock vip

app download link :https://t.cn/A6htR2an
圈X：

MITM = m.pearkin.com

^https:\/\/m\.pearkin\.com\/(api\/Movie\/WatchMovie|api\/Account\/CheckVip) url script-response-body pear.js

*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = "/api/Movie/WatchMovie";

const checkVip = "/api/Account/CheckVip";

const isVip = "/api/account/IsVip";

const indexDetail = "/api/account/IndexDetail";

const cartoonPhoto = "/api/Cartoon/LookPhoto/";

const picSetPhoto = "/api/PictureSet/LookPhoto/";


if (url.indexOf(vip) != -1) {
  obj.canWath = "true";
  body = JSON.stringify(obj);
}

if (url.indexOf(checkVip) != -1) {
  obj.data = "1";
  obj.value = "true";
  body = JSON.stringify(obj);
}

if (url.indexOf(isVip) != -1) {
  obj.data = "1";
  obj.value = "true";
  body = JSON.stringify(obj);
}

if (url.indexOf(indexDetail) != -1) {
  obj.vipEndTime = "2022-12-31";
  obj.vipLevel = "101";
  obj.nickName = "fraillove";
  obj.surplusCount = 1;
  obj.rewardBadge = "true";
  obj.cartoonVip = "true";
  
  body = JSON.stringify(obj);
}

if (url.indexOf(cartoonPhoto) != -1) {
  obj.value = "true";
  obj.point = "100";
  body = JSON.stringify(obj);
}

if (url.indexOf(picSetPhoto) != -1) {
  obj.value = "true";
  obj.point = "100";
  body = JSON.stringify(obj);
}


$done({
  body
});