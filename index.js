require("dotenv").config();

const app = require("./src/app");
const ConnectDB = require("./src/db/db");

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Database Connection
    ConnectDB();

    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

startServer();
