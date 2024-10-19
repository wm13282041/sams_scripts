/*************************************

项目名称：汽水音乐
更新日期：2023-11-19
脚本作者：sam
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api-access.pangolin-sdk-toutiao1.com\/api\/ad\/union\/sdk\/stats\/batch\/.* url script-response-body https://raw.githubusercontent.com/wm13282041/sams_scripts/main/qishui.js
^https?:\/\/api-access.pangolin-sdk-toutiao.com\/api\/ad\/union\/sdk\/get_ads\/.* url script-response-body https://raw.githubusercontent.com/wm13282041/sams_scripts/main/qishui.js

[mitm]
hostname = api-access.pangolin-sdk-toutiao.com,api-access.pangolin-sdk-toutiao1.com

*************************************/

let qishui1 = {
  "data" : "",
  "code" : "20000"
}
let qishui2 = {"request_id":"567F4C83-6CB4-40A1-A7A4-307DBCA6C937","status_code":20001,"reason":112,"desc":"该代码位请求量过大且消耗过低，因此填充率控制在10%以内，该策略每日生效，如果当天该代码位的消耗上涨或请求量小于5000，则次日不会命中该策略"}
$done({body : JSON.stringify(qishui_info)});


if ($request.url.indexOf("ad/union/sdk/stats/batch") != -1) {
    $done({body: JSON.stringify(qishui1)});
} else if ($request.url.indexOf("ad/union/sdk/get_ads") != -1) {
    v$done({body: JSON.stringify(qishui2)});
} else {
    $done($response);
}
