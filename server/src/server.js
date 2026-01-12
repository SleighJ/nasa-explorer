const http = require('http');
const mongoose = require('mongoose');

const app = require("./app");

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL = "mongodb+srv://jonathanjensenjr_db_user:ig2iVtDBVkilS5UZ@cluster0.gw2b9wa.mongodb.net/nasa?appName=Cluster0";

const server = http.createServer(app);

mongoose.set('strictQuery', true);

mongoose.connection.once('open', () => {
  console.log('Mongo DB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
  });
}

startServer();