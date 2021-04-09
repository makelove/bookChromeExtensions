

- 参考
    - [Chrome Extension 的 webRequest模块的解读](https://www.cnblogs.com/devcjq/articles/4232029.html)
    - 官方文档 [观察和分析流量 拦截阻止，或在运行中修改请求。](https://developer.chrome.com/extensions/webRequest)
        - 中文 [Chrome 扩展(插件) 开发教程](https://dev.crxhome.org/guide/what-is-extensions.html)
        - 英文，能打开 http://docs.getxhr.com/ChromeExtensionDocument/webRequest.html

- 测试，打开浏览器
    - 阻断所有向bad.example.com的链接 http://bad.example.com/
    -  重定向 http://www.google.com.hk
    - 删除User-Agent信息 http://httpbin.org/get

- 制作 【网络加速插件】
    - requestId
        - chrome.webRequest.onBeforeRequest.addListener
            - 先记录请求的requestId
        - chrome.webRequest.onErrorOccurred.addListener
            - 发生错误，检测requestId
        - chrome.webRequest.onCompleted.addListener
            - 记录时间戳 timeStamp，减去 onBeforeRequest的timeStamp ，得到 请求的使用时间