const http = require('http');
const express = require('express');
const cors = require('cors');
const { forEach } = require('p-iteration');

// const port = process.env.PORT || 80;
const port = 8000 // localhost:3000 
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/static', express.static('public'));

app.listen(port, () => console.log(`Server up and running on port ${port}.`));

//3.38.100.193
require("./routes/formRoute")(app)
//localhost:8000/api/form/5
//localhost:8000/api/form/create
// require("./routes/authRoute")(app)

app.get("/", async (req, res) => {
  res.json({ message: "Welcome to our application."});
});

//command + d 
//3.38.100.193 
//ssh -i kaist-intensive-2.pem ubuntu@3.38.100.193