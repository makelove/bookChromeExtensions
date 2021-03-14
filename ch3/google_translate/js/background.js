chrome.contextMenus.create({
    'type':'normal',
    'title':'使用Google翻译……',
    'contexts':['selection'],
    'id':'cn',
    'onclick':translate//执行函数
});

function translate(info, tab){
    // var url = 'http://translate.google.com.hk/#auto/zh-CN/'+info.selectionText ; 
    var url = 'https://cn.bing.com/translator?ref=TThis&text='+info.selectionText+'&from=en&to=zh-Hans'
    window.open(url, '_blank');
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    chrome.contextMenus.update('cn',{
        'title':'使用Google翻译“'+message+'”'
    });
});
