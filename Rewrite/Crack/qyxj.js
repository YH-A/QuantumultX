

#轻颜相机VIP(By @s y)

[rewrite_local]

^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info url script-response-body https://raw.githubusercontent.com/YH-A/QuantumultX/main/Rewrite/Crack/qyxj.js


hostname=commerce-api.faceu.mobi

*/
let obj = JSON.parse($response.body);
obj.data["end_time"] = 3725012184;
obj.data["flag"] = true;
$done({body: JSON.stringify(obj)});
