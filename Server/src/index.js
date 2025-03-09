import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import compilerRoutes from "./routes/compile.route.js";
import userRoutes from "./routes/users.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Import Routes
// import compilerRoutes from "./routes/compile.route.js"; // ES6

// Routes
app.use("/api/users", userRoutes);
app.use("/api/compile", compilerRoutes);

// Database connection
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// Basic route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Coding Platform API');
// });

app.get("/", (req, res) => {
  res.send("API is running...");
});
// Routes
// app.use("/api/compile", compilerRoutes);
 // Routes
// app.use("/api/compile", compilerRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
