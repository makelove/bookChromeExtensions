chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    'id': 'saveall',
    'type': 'normal',
    'title': '保存所有图片',
  });
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == 'saveall') {
    chrome.tabs.executeScript(tab.id, { file: 'main.js' },
      function (results) {
        console.log('结果多少条:', results[0].length)
        console.log(results)
        if (results && results[0] && results[0].length) {
          results[0].forEach(function (url) {
            console.log(url)
            if (url.length > 0) {
              chrome.downloads.download({
                url: url,
                conflictAction: 'uniquify',
                saveAs: false
              });
            }
          });
        }
      }
    );
  }
});
