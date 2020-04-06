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

const vip = "/api/movie/WatchMovie";

const checkVip = "/api/Account/CheckVip";

const isVip = "/api/account/IsVip";

const isSafeUser = "/api/account/IsSafeUser";

const indexDetail = "/api/account/IndexDetail";

const cartoonPhoto = "/api/Cartoon/LookPhoto/";

const picSetPhoto = "/api/PictureSet/LookPhoto/";

const userAndDownloadInfo = "/api/download/UserAndDownloadInfo";

const getCertificateProTips = "/api/GetCertificateProTips";

const userSetting = "/api/account/UserSetting";

const cartoonVip = "/api/cartoon/VipInfo";

const accountMilk = "/api/account/Milk";

const closePayAndInvite = "/api/account/ClosePayAndInvite";

const checkDownloadTorrent = "/api/download/CheckDownloadTorrent";

const movieTorrentInfo = "/api/download/MovieTorrentInfo";

const photoFindMovie = "/api/photoFindMovie/IsAdmin";

const luckyInfo = "/api/luckyInfo/GetLuckyInfoTime";

const openPictureSetFree = "/api/PictureSet/OpenPictureSetFree";

const userScore = "/api/account/UserScore";

const pointExchangeVip = "/api/account/PointExchangeVip";

if (url.indexOf(movieTorrentInfo) != -1) {
  obj.value = true;
    body = JSON.stringify(obj);
}



if (url.indexOf(pointExchangeVip) != -1) {
  obj.result = true;
  obj.message = "成功";
    body = JSON.stringify(obj);
}


if (url.indexOf(photoFindMovie) != -1) {
  obj.isAdmin = true;
    body = JSON.stringify(obj);
}

if (url.indexOf(userScore) != -1) {
  obj.value = 8765;
    body = JSON.stringify(obj);
}

if (url.indexOf(openPictureSetFree) != -1) {
  obj.value = true;
  obj.point = 999;
    body = JSON.stringify(obj);
}



if (url.indexOf(luckyInfo) != -1) {
  obj.isLuckyDay = true;
  obj.endTime = "2030-03-24"
    body = JSON.stringify(obj);
}




if (url.indexOf(userAndDownloadInfo) != -1) {
  obj.vipLevel = 3;
  obj.isVip = true;
  obj.vipEndTime = "2088-03-24";
  obj.toDayCanLoadCount = 99;
  obj.allCount = 99;
  body = JSON.stringify(obj);
}

if (url.indexOf(checkDownloadTorrent) != -1) {
  obj.vipLevel = 3;
  obj.isVip = true;
  obj.toDayCanLoadCount = 99;
  obj.allCount = 99;
  body = JSON.stringify(obj);
}

if (url.indexOf(getCertificateProTips) != -1) {
  obj.openNoProTips = true;
  body = JSON.stringify(obj);
}

if (url.indexOf(userSetting) != -1) {
  obj.orderVip = true;
  obj.memberPoint = 999;
  obj.accountHadSet = true;
  body = JSON.stringify(obj);
}

if (url.indexOf(cartoonVip) != -1) {
  obj.isVip = true;

  obj.vipEndTime = "2088-03-24";
  body = JSON.stringify(obj);
}

if (url.indexOf(accountMilk) != -1) {
  obj.milkName = "肯德基";

  obj.milkLevel = 7;
  body = JSON.stringify(obj);
}

if (url.indexOf(closePayAndInvite) != -1) {
  obj.closeAccountPay = true;

  obj.closeInvite = true;
  body = JSON.stringify(obj);
}

if (url.indexOf(vip) != -1) {
  obj.canWath = true;
  obj.hadWach = true;
  obj.surplusCount = 999;
  obj.tipExchange = true;
  obj.rMessage = "Vip可以观看";
  body = JSON.stringify(obj);
}

if (url.indexOf(checkVip) != -1) {
  obj.data = "1";
  obj.value = "true";
  body = JSON.stringify(obj);
}

if (url.indexOf(isVip) != -1) {
  obj.data = 0;
  obj.value = true;
  body = JSON.stringify(obj);
}

if (url.indexOf(isSafeUser) != -1) {
  obj.data = 0;
  obj.value = true;
  body = JSON.stringify(obj);
}

if (url.indexOf(indexDetail) != -1) {
  obj.vipEndTime = "2088-03-24";
  obj.vipLevel = 3;
  obj.nickName = "fraillove";
  obj.surplusCount = 2;
  obj.rewardBadge = true;
  obj.cartoonVip = true;

  body = JSON.stringify(obj);
}

if (url.indexOf(cartoonPhoto) != -1) {
  obj.value = "true";
  obj.point = "999";
  body = JSON.stringify(obj);
}

if (url.indexOf(picSetPhoto) != -1) {
  obj.value = "true";
  obj.point = "999";
  body = JSON.stringify(obj);
}

$done({
  body
});
