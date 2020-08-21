const express = require("express");
const app = express();
const path = require("path");
const PORT =  process.env.PORT || 3000;
// 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 

require("./htmlroutes")(app);
// const Name () => 
// const Email =>
// const Phone =>

app.get("/", (req, res) => {
    // send back to home page
})




app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});