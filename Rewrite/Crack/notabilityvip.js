
Notability 11.02 crack  

[rewrite_local]

^https:\/\/notability\.com\/subscriptions url script-response-body https://raw.githubusercontent.com/YH-A/QuantumultX/main/Rewrite/Crack/notabilityvip.js

[mitm]
hostname = notability.com


let obj = JSON.parse($response.body);
obj = {
  "data": {
    "processAppleReceipt": {
      "__typename": "SubscriptionResult",
      "error": 0,
      "subscription": {
        "__typename": "AppStoreSubscription",
        "status": "active",
        "originalPurchaseDate": "2021-11-02T08:04:39.000Z",
        "originalTransactionId": "7",
        "expirationDate": "2999-09-09T09:04:39.000Z",
        "productId": "com.gingerlabs.Notability.premium_subscription",
        "tier": "premium",
        "refundedDate": null,
        "refundedReason": null,
        "user": null
      }
    }
  }
};
$done({body: JSON.stringify(obj)});
