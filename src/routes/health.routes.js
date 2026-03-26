/* *******************
 * CONTROLLERS IMPORT
 *********************/
import healthControllers from '../controllers/health.controller.js';


/* *******************
 * ROUTE CONFIGURATION
 *********************/
const healthRoutes = (app) => {
  app.get('/hello', healthControllers.hello)
  // ... add more routes here as you build them
}


/* *******
 * EXPORTS
 *********/
export default { healthRoutes };