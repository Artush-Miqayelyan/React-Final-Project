export function excludedPath(pathname) {
    return ['/login', '/sign-up'].includes(pathname)
}

export function isDefinedPath(pathname) {
    return ['/', '/messenges', '/dealers', '/advertisement', '/rules', '/help', '/contact', '/sell', '/about'].includes(pathname)
}