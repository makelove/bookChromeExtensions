chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create({//TODO 不能显示？
    'id':'saveall',
    'type':'normal',
    'title':'保存所有图片',
  });
});
// chrome.contextMenus.create({//TODO 也不能显示？
//   'id':'saveall',
//   'type':'normal',
//   'title':'保存所有图片',
// });

chrome.contextMenus.onClicked.addListener(function(info, tab){
  if(info.menuItemId == 'saveall'){
    chrome.tabs.executeScript(tab.id, {file: 'main.js'}, function(results){
      console.log('executeScript:')
      if (results && results[0] && results[0].length){
        results[0].forEach(function(url) {
          chrome.downloads.download({
            url: url,
            conflictAction: 'uniquify',
            saveAs: false
          });
        });
      }
    });
  }
});
