/*
Xmind Unlock annual subscriptions （by LTribe）
[rewrite_local]
# Xmind Unlock annual subscriptions （by LTribe）
https?:\/\/.*\.xmind\..*\/_res\/devices url script-response-body https://raw.githubusercontent.com/SIMPO18/Script/8884a193c4beb75efd83662a1c66a5de9d816890/unlock/xmind.js
[mitm]
hostname = *.xmind.*,
*/
let obj = JSON.parse($response.body);

obj = {
  "raw_data": "S0MY6Wu5wpkW52RE5XmMkSMfTBvnytTwIJODrtVDjnA0axrORbnv9gh1RC4W3/ejTfQhNBb7CVxxpbYnBBk2tHc4gAODhsuGpHkltYNL/P5dfORSpdbiNkAZr5aBBbHS/dNlaYjLYyBkq9Ohfe0QS9PeXOWLbDdNA6kqidLJysw=",
  "license": {
    "status": "sub",
    "expireTime": 9999999999999
  },
  "_code": 200
}
  
$done({body: JSON.stringify(obj)});
