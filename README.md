# Express (ES6) RESful API
==================================

This is a straightforward boilerplate for building REST APIs with ES6 and Express.

ref: [express-es6-rest-api](https://github.com/developit/express-es6-rest-api)

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing support via [body-parser](https://github.com/expressjs/body-parser)
- Json Web Token support via [express-jwt](https://github.com/auth0/express-jwt)
- ORM Database support via [sequelize](https://github.com/sequelize/sequelize)


# Getting Started
---------------

```sh
# clone it
git clone https://github.com/coderstrong/express-template-restfulapi.git
cd express-template-restfulapi

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```

License
-------
MIT