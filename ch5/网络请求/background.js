

//阻断所有向bad.example.com的链接
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
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
        console.log('before:',details.requestHeaders);
        for (var i = 0, headerLen = details.requestHeaders.length; i < headerLen; ++i) {
            console.log('details.requestHeaders[i].name:',details.requestHeaders[i].name);
            console.log('details.requestHeaders[i].value:',details.requestHeaders[i].value);
            if (details.requestHeaders[i].name == 'User-Agent') {
                details.requestHeaders.splice(i, 1);//不对
                console.log('splice:',details.requestHeaders);
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
         * 
         */
    },
    {
        urls: ['<all_urls>']
    }
)