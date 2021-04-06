/*

MITM = api.qhhry.cn,api.gao1gps.cn,apives.cn,movingfloor.cn,oqrwm.cn


*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const userInfo = "/v1/user/info";

const promoteInfo = "/v1/user/promote/info";

const announce = "/v1/upgrade/announcement";

const check = "v1/cheakApp";



if (url.indexOf(check) != -1) {
  obj.data.appState = 1;
  obj.data.message= "傻瓜";
  body = JSON.stringify(obj);
}



if (url.indexOf(userInfo) != -1) {
  obj.response.level = 2;
  obj.response.verify_phone = 1;
  obj.response.expiry = 9999999999;
  obj.response.download_limit = 1000;
  obj.response.invite_total = 120;  
  body = JSON.stringify(obj);
}

if (url.indexOf(promoteInfo) != -1) {
  obj.response.vip_ticket_amount = 998;
  obj.response.promote_amount = 99;
  body = JSON.stringify(obj);
}

if (url.indexOf(announce) != -1) {
  obj.response = {};
  body = JSON.stringify(obj);
}


$done({
  body
});