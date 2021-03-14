
//读取用户已安装的扩展和应用的信息
chrome.management.getAll(function(exInfoArray){
    console.log(exInfoArray);
})

chrome.management.get(exId,function(exInfo){
    console.log(exInfo);
})
