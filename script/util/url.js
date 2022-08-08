export function isfullurl(url) {
    return (/^https?:\/\//).test(url);
}

export function geturl(url) {
    if (isfullurl(url)) {
        return url;
    } else if (url[0] == '/') {
        return location.protocol+'//'+location.host+url;
    } else {
        return location.href.split('/').slice(0,-1).join('/')+'/'+url;
    }
}
