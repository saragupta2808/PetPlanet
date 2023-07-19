require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectdb = require("./db/connect");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
const path = require("path");
const fs = require("fs");
//errorhandler middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
//routes
const appointmentRouter = require("./routes/appointments");
const userRouter = require("./routes/user");
const petRouter = require("./routes/pets");

let parsedData;

const firebasefilePath = path.join(
  __dirname,
  "pet-planet-5cf3d-firebase-adminsdk-g6xrc-cebb3383b5.json"
);

fs.readFile(firebasefilePath, "utf8", (err, data) => {
  if (err) {
    // Handle any errors that occur during file reading
    console.error(err);

    return;
  }

  try {
    parsedData = JSON.parse(data);

    // Iterate over the JSON object
    for (let key in parsedData) {
      if (typeof parsedData[key] === "string") {
        // Check if the value is a string
        const match = parsedData[key].match(/\{\{(.+?)\}\}/); // Match the placeholder

        if (match) {
          const placeholder = match[0]; // Get the placeholder, e.g., "{{API_KEY}}"
          const envVarName = match[1]; // Get the environment variable name, e.g., "API_KEY"
          let envVarValue;
          if(envVarName === 'PRIVATE_KEY'){
            envVarValue =  process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY.replace(/\\n/gm, "\n") : undefined
          }
          else{
            envVarValue = process.env[envVarName]; // Get the environment variable value
          }
         
         

          // Replace the placeholder with the environment variable value
          parsedData[key] = parsedData[key].replace(placeholder, envVarValue);
        }
      }
    }
    console.log(parsedData)
    admin.initializeApp({
      credential: admin.credential.cert(parsedData),
    });
    // Usage: Call setAdminRole with the user's UID
    setAdminRole("4voqMvq5pTRqMeMt2fKIZcLhDnl2");
  } catch (err) {
    console.error(err);
  }
});

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/petplanet/v1/appointments", appointmentRouter);
app.use("/petplanet/v1/auth", userRouter);
app.use("/petplanet/v1/pets", petRouter);

// --------------------Deployment---------------------------------------

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname1, "/frontend/dist/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Pet Planet API is running...");
  });
}

// --------------------Deployment---------------------------------------

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectdb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// Set the admin custom claim for a specific user
const setAdminRole = async (uid) => {
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: true });
    console.log("Admin role assigned successfully.");
  } catch (error) {
    console.error("Error assigning admin role:", error);
  }
};
