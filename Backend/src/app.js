import express from "express";
import router from "./routes/ai.routes.js";
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://your-frontend-vercel-url.vercel.app", // Replace with your actual Vercel frontend URL
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use("/api", router);

export default app;
