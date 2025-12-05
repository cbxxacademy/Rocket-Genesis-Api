/* ***************
 * ROUTE HANDLERS
 *****************/

/*
 * GET - /hello
 * Simple endpoint that returns a greeting message
 */
const hello = async (_req, res) => {
    console.log(`Server listening on port ${PORT}`);
    res.status(200).send('Hello World');
};

// ... add more route handlers here as you build them

/* *******
 * EXPORTS
 *********/
export default { 
  hello,
};