
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


body = $response.body.replace(/\"packet_value":.*?\d+/g, '\"packet_value":1888');
console.log(body);
$done({body});
