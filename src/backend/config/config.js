const { Sequelize } = require("sequelize");
require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_CONNECTION, {
  dialect: "postgres",
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false },
  },
  logging: false,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Neon connection successful");
  } catch (error) {
    console.error("error connect to database: ", error);
  }
}

testConnection();

module.exports = sequelize;