/*
by:维斯大魔王
QX1.0.9商店版
本地重写
^http:\/\/103\.244\.2\.254:8080\/qiqiim-server\/(getmeetingcomments|getarticlecomments)\? url script-response-body bapa.js
[mitm]
hostname=103.244.2.254:8080
bapa约啪 App 功能
邀约贴子评论防止匿名
反馈贴子评论防止匿名
App下载地址:http://103.244.2.254/download/download.html?luicode=10000011&lfid=1076032787586215&u=http%3A%2F%2F103.244.2.254%2Fdownload%2Fdownload.html#/
*/

body = $response.body.replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"\w{4}\":false/, "\"show\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"showName\":false/, "\"showName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true").replace(/\"sheShowName\":false/, "\"sheShowName\":true")
$done({body});