var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const banner = "/banner/list2";

const startPage = "/startpage/combine";

const browse = "/mov/browse";

const playresult = "/mov/playresult";

const userinfo = "/user/info";


if (url.indexOf(banner) != -1) {
  //obj.data[0].ads = [];
  //body = JSON.stringify(obj);
  
  //body = $response.body.replace(/\ads/g, 'adss')

}

if (url.indexOf(startPage) != -1) {
  //obj.data[0].startPageAd = [];
  //body = JSON.stringify(obj);
  
   body = $response.body.replace(/\startPageAd/g, 'startPageAdss')
}

if (url.indexOf(browse) != -1) {

  obj.data[0].hasBuy = true;
  obj.data[0].remainPlayCnt = 999;
  obj.data[0].vipFlag = 1;
  
  
  console.log(obj.data[0]);
  
  body = JSON.stringify(obj);
}

if (url.indexOf(playresult) != -1) {

}


if (url.indexOf(userinfo) != -1) {
  obj.data[0].dailyViewNum = 99999;

  obj.data[0].leftViewNum = 99999;

  obj.data[0].vipExpiredDate = 1800000000;
  obj.data[0].isPaid = 1;

  obj.data[0].limitDownNum = 999;
  obj.data[0].extrViewNumber = 99999;
  obj.data[0].ExpiredDays = 999;

  obj.data[0].isExpired = 999;
  
  body = JSON.stringify(obj);

}


$done({
  body
});