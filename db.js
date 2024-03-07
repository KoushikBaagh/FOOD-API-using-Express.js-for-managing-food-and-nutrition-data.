//db.js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/foodDB")
  //
  //useNewUrlParser , useUnifiedTopology and useIndexparser all these have become obsolete after mongodb 5.0   , {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
