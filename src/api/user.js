import resource from 'resource-router-middleware';
var models = require('../database/models');

export default ({ config }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id: 'user',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		models.User.findAll().then(function (users) {
			callback(err, users);
		});
	},

	/** GET / - List all entities */
	index({ params }, res) {
		models.User.findAll({
			include: [models.Task]
		}).then(function (users) {
			res.render('index', {
				title: 'Sequelize: Express Example',
				users: users
			});
		});
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		body.id = facets.length.toString(36);
		models.User.create({
			username: req.body.username
		}).then(function () {
			res.redirect('/');
		});
		res.json(body);
	},

	/** DELETE /:id - Delete a given entity */
	delete(req, res) {
		models.User.destroy({
			where: {
				id: req.params.user_id
			}
		}).then(function () {
			res.redirect('/');
		});
	}
});