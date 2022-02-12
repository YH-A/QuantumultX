

#轻颜相机VIP(By @s y)

[rewrite_local]

https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) url script-response-body https://raw.githubusercontent.com/YH-A/QuantumultX/main/Rewrite/Crack/qyxj.js


hostname= commerce-api.faceu.mobi, 116.177.224.249, 116.177.224.251, 116.177.224.244, 116.177.224.252, 116.177.224.248, 116.177.224.250

*
*/
const path1 = "/commerce/v1/subscription/user_info";
const path2 = "/apple/iosAppVerifyReceipt.php";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.data.start_time = 1584674770;
obj.data.end_time = 4077660370;
obj.data.is_cancel_subscribe = true;
obj.data.flag = true;
}
if ($request.url.indexOf(path2) != -1){
 obj.data = {
    "isValid": 1,
    "expiresTs": 4077660370
}
}
$done({body: JSON.stringify(obj)});
