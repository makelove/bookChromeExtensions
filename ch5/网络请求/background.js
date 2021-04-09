//onBeforeRequest 打印 请求详情
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.log('onBeforeRequest:',details);
    },
    {
        urls: ['<all_urls>']
    },
    /**
     {
    "frameId": 0,
    "initiator": "https://stackoverflow.com",
    "method": "GET",
    "parentFrameId": -1,
    "requestId": "481",
    "tabId": 1783,
    "timeStamp": 1617962565489.9148,
    "type": "other",
    "url": "https://bb5423756e6e6d523fde43aa79f67c6d.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html"
    }

    {
    "frameId": 0,
    "initiator": "https://stackoverflow.com",
    "method": "GET",
    "parentFrameId": -1,
    "requestId": "702",
    "tabId": 1783,
    "timeStamp": 1617962712607.2632,
    "type": "image",
    "url": "https://clc.stackoverflow.com/impression.gif?an=42LVfPbN7vcND9Wf-n7OTEwsyzb8Yslpjj_6-98i02zGj363A44HMrAw9GxgYGiwZ2Rk4JBmmjZfavVXpc3PtIHifA0vZpZa7pZbZCfN1Ppb8tQ_1f4PekBxlgPCLH2WD2Y3AcVX_JK8dkrpxm6Q-pQDnuzZlgFpe4DivStlTy1SmzpFHyzuEJ9tufk2yJy9C2RX7VH7tRYiXpEXZ1ku0QoU7_wk9fu8cu9BHbC4U1CRpbXOJqD41G7xe1tVGpfrgsWfOJRa3mrYARRf2yZz-L3KpwcQcbnpGZYnZs6xY5B1fBnp5FGxbUowAA&md=516"
}

     */

)

//阻断所有向bad.example.com的链接
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.log('onBeforeRequest:',details);
        return { cancel: true }
    },
    {
        urls: ['*://bad.example.com/*']
    },
    ['blocking']
)

//删除User-Agent信息
chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        // console.log('before:',details.requestHeaders);
        for (var i = 0, headerLen = details.requestHeaders.length; i < headerLen; ++i) {
            // console.log('details.requestHeaders[i].name:',details.requestHeaders[i].name);
            // console.log('details.requestHeaders[i].value:',details.requestHeaders[i].value);
            if (details.requestHeaders[i].name == 'User-Agent') {
                details.requestHeaders.splice(i, 1);//不对
                // console.log('splice:',details.requestHeaders);
                break
            }
        }
        return { requestHeaders: details.requestHeaders }
    },
    {
        urls: ['<all_urls>']
    },
    ['blocking', 'requestHeaders']
)

//重定向
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return { redirectUrl: details.url.replace('www.google.com.hk', 'www.google.cn') }
    },
    {
        urls: ['*://www.google.com.hk/*']
    },
    ['blocking']
)

//发生错误 
// 文档 https://www.cnblogs.com/h2zZhou/p/9238251.html
chrome.webRequest.onErrorOccurred.addListener(
    function(error){
        console.log('------');
        console.log('onErrorOccurred:',error);
        /**
         * {
            "error": "net::ERR_CONNECTION_RESET",
            "frameId": 0,
            "fromCache": false,
            "method": "GET",
            "parentFrameId": -1,
            "requestId": "878",
            "tabId": 422,
            "timeStamp": 1615733251129.7551,
            "type": "main_frame",
            "url": "http://google.com/"
        }

        {
        "error": "net::ERR_ABORTED",
        "frameId": 0,
        "fromCache": false,
        "initiator": "https://stackoverflow.com",
        "ip": "180.163.150.164",
        "method": "GET",
        "parentFrameId": -1,
        "requestId": "481",
        "tabId": 1783,
        "timeStamp": 1617962567722.6619,
        "type": "other",
        "url": "https://bb5423756e6e6d523fde43aa79f67c6d.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html"
        }
         * 
         */
    },
    {
        urls: ['<all_urls>']
    }
)
chrome.webRequest.onCompleted.addListener(
    function (details) {
        console.log('onCompleted:',details);

        if(details.statusCode>200){
            console.log('onCompleted statusCode>200:',details);
        }
        /**
         * {
                "frameId": 0,
                "fromCache": true,
                "initiator": "https://stackoverflow.com",
                "ip": "151.101.193.69",
                "method": "GET",
                "parentFrameId": -1,
                "requestId": "1202",
                "statusCode": 200,
                "statusLine": "HTTP/1.1 200",
                "tabId": 1215,
                "timeStamp": 1615816792839.154,
                "type": "script",
                "url": "https://cdn.sstatic.net/Js/stub.en.js?v=e229aa91fed7"
            }

            {
            "frameId": 0,
            "fromCache": false,
            "initiator": "https://stackoverflow.com",
            "ip": "151.101.193.69",
            "method": "GET",
            "parentFrameId": -1,
            "requestId": "702",
            "statusCode": 200,
            "statusLine": "HTTP/1.1 200",
            "tabId": 1783,
            "timeStamp": 1617962712950.626,
            "type": "image",
            "url": "https://clc.stackoverflow.com/impression.gif?an=42LVfPbN7vcND9Wf-n7OTEwsyzb8Yslpjj_6-98i02zGj363A44HMrAw9GxgYGiwZ2Rk4JBmmjZfavVXpc3PtIHifA0vZpZa7pZbZCfN1Ppb8tQ_1f4PekBxlgPCLH2WD2Y3AcVX_JK8dkrpxm6Q-pQDnuzZlgFpe4DivStlTy1SmzpFHyzuEJ9tufk2yJy9C2RX7VH7tRYiXpEXZ1ku0QoU7_wk9fu8cu9BHbC4U1CRpbXOJqD41G7xe1tVGpfrgsWfOJRa3mrYARRf2yZz-L3KpwcQcbnpGZYnZs6xY5B1fBnp5FGxbUowAA&md=516"
            }
         * 
         */
    },
    {
        urls: ['<all_urls>']
    },
)