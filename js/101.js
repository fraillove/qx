/*

MITM = api.qhhry.cn,api.gao1gps.cn,apives.cn,movingfloor.cn,oqrwm.cn


*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const userInfo = "/v1/user/info";



if (url.indexOf(vip) != -1) {
  obj.response.level = 1;
  obj.response.verify_phone = 1;
  obj.response.expiry = 9999999999;
  obj.response.download_limit = 1000;
  
  body = JSON.stringify(obj);
}




$done({
  body
});