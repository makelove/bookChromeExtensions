function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

httpRequest('http://httpbin.org/ip', function (ips) {
    console.log(ips)
    let ip = JSON.parse(ips)
    console.log(ip.origin)//['origin']

    document.getElementById('ip_div').innerText = ip['origin'];
});