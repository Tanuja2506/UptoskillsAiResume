const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const connectToMongo = require("./config/resumedb");
const { errorHandler } = require("./utils/errorHandler");
const resumeRoutes = require("./routes/resumeRoutes");
const resumeRoutes1 = require("./routes/resumeRoutes1");
const temp3Routes = require("./routes/temp3Routes");
const temp4Routes = require("./routes/temp4Routes");
const temp5Routes = require("./routes/temp5Routes");
const temp6Routes = require("./routes/temp6Routes");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(morgan("dev"));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "public")));

// ✅ Register Resume Routes
app.use("/api/resume", resumeRoutes);
app.use("/api/resume1", resumeRoutes1);
app.use("/api/temp3", temp3Routes);
app.use("/api/temp4", temp4Routes);
app.use("/api/temp5", temp5Routes);
app.use("/api/temp6", temp6Routes);
// ✅ Save Auth0 User Data to MongoDB
app.post("/api/users", async (req, res) => {
  const { auth0Id, username, email} = req.body;
  try {
    let user = await User.findOne({ auth0Id });
    if (user) {
      user.name = name;
     
    } else {
      user = new User({ auth0Id, username, email});
    }
    await user.save();
    res.status(200).json({ message: "User saved successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

// Error handling middleware
app.use(errorHandler);

// Start server
async function startServer() {
  try {
    await connectToMongo(); // ✅ Ensure MongoDB is connected before starting the server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (error) => {
  console.error("❌ Unhandled Rejection:", error);
  process.exit(1);
});

startServer();