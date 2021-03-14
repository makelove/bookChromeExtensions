//获取标签信息
chrome.tabs.get(tabId,function(tab){
    console.log(tab);
})

//当前标签
chrome.tabs.getCurrent(function(tab){
    console.log(tab);
})