const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  console.log('running the production static folder');
  app.use(express.static("build"));
}

app.get("/api/food", (req, res) => {

    console.log('We are running 100%');
    res.send('We are running 100%');
    // res.json([]);
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
