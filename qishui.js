/*************************************

项目名称：汽水音乐
更新日期：2023-11-19
脚本作者：sam
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/leancloud\.emotionwp\.com\/.+\/classes\/wpf_account url script-response-body https://raw.githubusercontent.com/wm13282041/sams_scripts/main/qishui.js

[mitm]
hostname = api-access.pangolin-sdk-toutiao1.com

*************************************/

let qishui_info = {"code":"20000", "data":""};
$done({body : JSON.stringify(qishui_info)});
