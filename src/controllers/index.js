import { Router } from 'express';

import home from './home/index';

export default ({ config }) => {
    
	let webapp = Router();

	// mount the facets resource
	webapp.use('/', home({ config }));

	return webapp;
}