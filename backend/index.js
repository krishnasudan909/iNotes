require("dotenv").config();
const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');


connectToMongo();
const app = express();
const port = 5000; // Port is 5000 because both front end and backend can't be on the same port

app.use(cors());
app.use(express.json());

//Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));



app.listen(port, () => {
  console.log(`iNotes Backend listening at http://localhost:${port}`);
});
