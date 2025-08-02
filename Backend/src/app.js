import express from "express";
import router from "./routes/ai.routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*', // For testing; restrict in production
}));

app.use("/api", router);

app.get('/', (req, res) => {
  res.send('API is running');
});

export default app;
