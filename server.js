process.env.NODE_ENV = process.env.NODE_ENV || "development" ;

const configureExpress = require("./config/express");

const app = configureExpress();

const server = app.listen(3001, () => {
    console.log(`Express is running on port ${server.address().port}`);
  });

module.exports = app;