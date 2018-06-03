module.exports = {
	development: {
		username: 'root',
		password: null,
		database: 'db_dev',
		host: '127.0.0.1',
		dialect: 'mysql',
		// Use a different storage type. Default: sequelize
		migrationStorage: "json",

		// Use a different file name. Default: sequelize-meta.json
		migrationStoragePath: "sequelizeMeta.json",
	
		// Use a different table name. Default: SequelizeMeta
		migrationStorageTableName: "sequelize_meta"
	},
	test: {
		username: 'root',
		password: null,
		database: 'db_test',
		host: '127.0.0.1',
		dialect: 'mysql'
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		dialect: 'mysql',
		// dialectOptions: {
		// 	ssl: {
		// 		ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
		// 	}
		// }
	}
};