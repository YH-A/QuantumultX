/*
 *
 *
脚本功能：#panda widget恢复会员
#恢复订阅即可，长时间有可能会掉，重新恢复即可
#https://apps.apple.com/cn/app/id1569291816


*******************************

[rewrite_local]

# > #panda widget恢复会员

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/YH-A/QuantumultX/main/Rewrite/Crack/panda widget.js
