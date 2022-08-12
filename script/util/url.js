export function isfullurl(url) {
    return (/^https?:\/\//).test(url);
}

export function geturl(url) {
    if (isfullurl(url)) {
        return url;
    } else if (url[0] == '/') {
        return location.origin+url;
    } else {
        let l = location.pathname.split('/').slice(0,-1);
        l.push('');
        return location.origin+l.join('/')+url;
    }
}
