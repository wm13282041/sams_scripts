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


let qishui_info = {"message":"31LhuxVmalfDhZoxwkIt4o2FqcFRFB5OrKhuT0pJ2aFdyFPyFHzXtSxC9bumifDN9rECK2q4sHdwdOWuLB5GFIe1qsB\/uJMv8lyGOHeyd9dRkDocU7fHvQn7QH1mBPfC2B1bTdNZM7NHpyMIaLANv0nngx3tigwMjrPiQ6ZUZqbRCau8qDRNsk2\/FDRwG2Lk\/jsWoa7MVbpg7b70W4o0C5v2dFFC\/tMWIfIY7qmRVyeHdYE6VaSyvteaGOR0vnAgyf22oPfNcRAzjsmB17ilgaJ4uhTcn5cQSI7XT0uDrWn+\/+vuw4iHJKRCpfpiQdzroQDj+cKof+aOsrSfZggRvbTWWzkjxSZF8CZhksgUaXpWN4ciUo2RP6e7k5z3dBVqmbRKarRAhSxslIsI1zWAyRlnrjh5vog9MiWkVOIdZoinloPqTCTceprMJLeP2hu3XqtOCai650ckNPS+yU9RtphZUPDRBXEDFRW+0xYCxbqA7hVpqvKCh4uWUTNAxVqKmU4pklotWP+pbx2iujbC85JRJIRhNkBDeHUIgPaTT8zCxZ8JK\/UIZnKkd4XUb4KK6yLB0ANs6+U2H+N6uzeXlfQzuPqOpz4JKI1r8sFVxI1vd59RTop5QkthILey7PGOOTXHScMTlxkl9C8GkTfQQadMe\/GbV1ni1FAHOXWlZapuhMwo\/MDftoWBEEtRQOPeMet\/AA8qELpVtdgyOZOvo9phcH3lMM739jNDHd8YLBuovv8wOFaVgpy9gvxcEnsBl66hezTpe5L0inP6tu5s9o6e6kJGs6XZAsvGkTakC2bE4M2QMyuE+9QIV681tvKC3IHRSumJ3RWPxMd3AGaUcjvnDJsFdLtdRnsi1ak4CKWfpmIh7","cypher":3};

$done({body : JSON.stringify(qishui_info)});
