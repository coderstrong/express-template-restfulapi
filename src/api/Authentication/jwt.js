import resource from 'resource-router-middleware';
import jwt from 'jsonwebtoken';
import configJWT from '../../../config/jwt';

export default ({ config }) => resource({
    /** POST / - Create a new token */
	create({ body }, res) {
		res.json({ token: jwt.sign({data: 'test'}, configJWT.secret, configJWT.signOption) });
	},

});