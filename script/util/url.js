export function isfullurl(url) {
    return (/^https?:\/\//).test(url);
}

export function geturl(url) {
    if (isfullurl(url)) {
        return url;
    } else if (url[0] == '/') {
        return location.origin+url.slice(1);
    } else {
        return location.origin.slice(0,-1)+location.pathname.split('/').slice(0,-1).push('').join('/')+url;
    }
}
