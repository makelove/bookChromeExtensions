//创建书签
chrome.bookmarks.create({
    parentId:'1',
    index:0,
    title:'google',
    url:'http://google.com'
},function(bookmark){
    console.log('结果:',bookmark);
}
);

//书签事件
chrome.bookmarks.onCreated.addListener(function(bookmark){
    console.log(bookmark);
})

//获取书签内容
//如果树结构复杂，或内容过多，这个方法的效率会很低
chrome.bookmarks.getTree(function(bookmarkArray){
    console.log(bookmarkArray);
})