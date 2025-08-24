const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("🌱 Plant Distribution Backend is running successfully!");
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend alive 🌱" });
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
