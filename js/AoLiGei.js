
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


body = $response.body.replace(/\"status":.*?\d+/g, '\"status":1')
.replace(/\"user_viptime":.*?\"\d+\"/g, '\"user_viptime":"3599388689"')
.replace(/\"addviptime":.*?\"\d+\"/g, '\"addviptime":"3599388689"')
.replace(/\"is_vip":.*?\d+/g, '\"is_vip":1')
.replace(/\"view_times":.*?\"\d+\"/g, '\"view_times":"999"')
.replace(/\"allow_times":.*?\"\d+\"/g, '\"allow_times":"999"')


;
# console.log(body);
$done({body});
