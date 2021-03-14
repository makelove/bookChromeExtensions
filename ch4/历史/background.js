//读取历史
chrome.history.search({
    text: 'google',
    startTime: new Date().getTime() - 24 * 3600 * 1000,//1天前
    endTime: new Date().getTime(),
    maxResults: 20
    }, function (historyItemArray) {
        console.log(historyItemArray);
    }
)