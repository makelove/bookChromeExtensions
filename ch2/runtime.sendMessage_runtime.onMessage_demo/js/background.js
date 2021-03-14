chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log('addListener:',message,sender);
    if(message == 'Hello'){
        sendResponse('Hello from background.');
    }
});