/*
app下载地址：商店搜索：贝尔儿歌
#贝尔儿歌
重写
^http://iface.beva.com/order/device/vip url script-response-body https://raw.githubusercontent.com/YH-A/QuantumultX/main/Rewrite/Crack/beeg.js
主机
iface.beva.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/order/device/vip';

if (url.indexOf(vip) != -1) {
    obj.is_vip = 1;
    obj.end_time = 7961094083;
    body = JSON.stringify(obj);
}
$done({body});
