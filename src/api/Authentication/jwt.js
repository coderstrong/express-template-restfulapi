import resource from 'resource-router-middleware';
import jwt from 'jsonwebtoken';
import configJWT from '../../../config/jwt';

export default ({ config, db }) => resource({

    /** Property name to store preloaded entity on `request`. */
    id: 'facet',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
    load(req, id, callback) {
        // let facet = facets.find( facet => facet.id===id ),
        // 	err = facet ? null : 'Not found';
        // callback(err, facet);
    },

    // /** GET / - List all entities */
    // index({ params }, res) {
    //     res.json({ token: jwt.sign('test', configJWT.secret) });
    // },
    /** POST / - Create a new entity */
	create({ body }, res) {
		res.json({ token: jwt.sign({data: 'test'}, configJWT.secret, configJWT.signOption) });
	},

    /** GET /:id - Return a given entity */
    read({ facet }, res) {
        res.json(facet);
    },

});