const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require('./routes/post');

const app = express();
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.${process.env.MONGO_DATABASE}.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



////////////////// This is not ideal solution 
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
////////////////////////////////////////////////////

// set up routes
app.get('/', (req, res) => {
  res.send('Hello, ExpressJS!');
});

app.use(postRoutes);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    // start the server
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
