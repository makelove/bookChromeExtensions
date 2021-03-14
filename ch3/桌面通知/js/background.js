//将data数据以桌面通知的方式显示给用户
function _showDataOnPage(title,data){
 
    //显示一个桌面通知
    if(window.webkitNotifications){
        console.log('使用 window.webkitNotifications');
      	var notification = window.webkitNotifications.createNotification(
      	    'images/icon19.png',  // icon url - can be relative
      	    title,  // notification title
      	    data  // notification body text
      	);
        notification.show();        
        // 设置3秒后，将桌面通知dismiss
        setTimeout(function(){notification.cancel();}, 3000);
 
    }else if(chrome.notifications){
        console.log('使用 chrome.notifications');
      	var opt = {
            type: 'basic',
            title: title,
            message: data,
            iconUrl: 'images/icon19.png',
        }
      	chrome.notifications.create('', opt, function(id){
            setTimeout(function(){
        	chrome.notifications.clear(id, function(){});
       	    }, 3000);
      	});
    
    }else{
  	    alert('亲，你的浏览器不支持啊！');
    }
  
}

//启动
_showDataOnPage('通知的title!','体质测试，通知测试')