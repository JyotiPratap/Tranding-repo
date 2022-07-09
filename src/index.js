const express = require("express");
const route = require('./routes/routes.js');

const app = express();
app.use('/', route);

 
app.listen(3000, () => {
 console.log("Express app running on port 3000");
});
