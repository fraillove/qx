/*

MITM = http://api.bgziyyj.cn/Base_Manage/UserInfo/UserLoginIng
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const userInfo = "/Base_Manage/UserInfo/UserLoginIng";

if (url.indexOf(userInfo) != -1) {
  obj.Data.userInfo.VipTime = "2099-09-04 19:37:18";
  obj.Data.userInfo.NextUserCount = 0;  
  
   
  body = JSON.stringify(obj);
}



$done({
  body
});


