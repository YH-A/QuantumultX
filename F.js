/***********************************
> 應用名稱：filebox
> 軟件版本：1.1.25
> 下載地址：https://apps.apple.com/cn/app/id1558391784
> 腳本作者：Cuttlefish
> 微信賬號：墨魚手記
> 解鎖說明：解鎖高級會員權限
> 更新時間：2022-02-18
> 通知頻道：https://t.me/ddgksf2021
> 問題反饋：https://t.me/ddgksf2013_bot
> 特別說明：本腳本僅供學習交流使用，禁止轉載售賣
 
[rewrite_local]

# ～ filebox解鎖會員權限（2022-02-18）@ddgksf2013
^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/(\$RCAnonymousID\%)?(\w)+$ url script-echo-response https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/filebox.js
^https?:\/\/api\.revenuecat\.com\/v\d\/receipts$ url script-echo-response https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/filebox.js

[mitm] 

hostname=api.revenuecat.com

***********************************/
