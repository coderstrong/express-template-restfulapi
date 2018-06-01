export default {
    secret: 'shhhhhhared-secret',
    requestProperty: 'auth',
    resultProperty: 'locals.user',
    path: ['/api/token', '/api/user'],
    signOption: {
        //algorithm: 'HS256',
        expiresIn: 60 * 60 // '1h'
    },
}