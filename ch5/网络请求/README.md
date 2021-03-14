

- 参考
    - [Chrome Extension 的 webRequest模块的解读](https://www.cnblogs.com/devcjq/articles/4232029.html)
    - 官方文档 [观察和分析流量 拦截阻止，或在运行中修改请求。](https://developer.chrome.com/extensions/webRequest)
        - 中文 [Chrome 扩展(插件) 开发教程](https://dev.crxhome.org/guide/what-is-extensions.html)

- 测试，打开浏览器
    - 阻断所有向bad.example.com的链接 http://bad.example.com/
    -  重定向 http://www.google.com.hk
    - 删除User-Agent信息 http://httpbin.org/get