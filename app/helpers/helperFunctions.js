export function excludedPath(pathname) {
    return ['/login', '/sign-up'].includes(pathname)
}

export function isDefinedPathForHeader(pathname) {
    return ['/', '/messages', '/dealers', '/advertisement', '/rules', '/help', '/contact', '/sell', '/about' , '/account'].includes(pathname)
}

export function isDefinedPathForfooter(pathname) {
    return ['/', '/messages', '/dealers', '/advertisement', '/rules', '/help', '/contact', '/sell', '/about' , '/account' , '/sign-up' , '/login'].includes(pathname)
}