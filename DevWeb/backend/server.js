const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Sequelize, Model, DataTypes } = require("sequelize");

const app = express();
app.use(cors());
const port = process.env.PORT || 3001;

// connect database
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.db",
});

// define model
class Herb extends Model {}
Herb.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    stock: DataTypes.STRING,
    price: DataTypes.STRING,
  },
  { sequelize, modelName: "herb" },
);

// sync models with database
sequelize.sync();

// middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create routes
app.get("/herbs", async (request, response) => {
  const herbs = await Herb.findAll();
  response.json(herbs);
});

app.delete("/herbs", async (request, response) => {
  const herbs = await Herb.destroy({ truncate: true });
  response.json(herbs);
});

app.post("/herb", async (request, response) => {
  const herbs = await Herb.create(request.body);
  response.json(herbs);
});

app.get("/herb/:id", async (request, response) => {
  const { id } = request.params;
  const herb = await Herb.findAll({
    where: {
      id,
    },
  });
  response.json(herb[0]);
});

app.put("/herb/:id", async (request, response) => {
  const { id } = request.params;
  const herbs = await Herb.update(request.body, {
    where: {
      id,
    },
  });
  response.json(herbs[0]);
});

app.delete("/herb/:id", async (request, response) => {
  const { id } = request.params;
  const herbs = await Herb.destroy({
    where: {
      id,
    },
  });
  response.json(herbs[0]);
});

// start server
app.listen(port, () => console.log(`Server listening on port ${port}`));
