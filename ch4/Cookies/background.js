
//读取cookie
chrome.cookies.get({
    url:'https://github.com',
    name:'dotcom_user'
},function(cookie){
    console.log(cookie.value);
}
)

//获取所有cookie
chrome.cookies.getAll({},function(cookies){
    console.log(cookies);
})