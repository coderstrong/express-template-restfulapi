import { version } from '../../../package.json';
import { Router } from 'express';

import user from './user';
import jwt from './Authentication/jwt';

export default ({ config }) => {
    
	let api = Router();

	api.use('/token', jwt({ config }));
	// mount the user resource
	api.use('/user', user({ config }));

	

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}