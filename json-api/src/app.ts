import express from "express";

import { jsonRoutes } from "@/src/routes/v1/export";

const app: express.Application = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/v1/json", jsonRoutes);

app.use("/api/v1/alive", (_, res) => {
  res.status(200).json({
    author: "Diego Libonati",
    name: "JSON-Transformer-API",
    version: "0.0.1",
  });
});
app.use((_, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(404).json({ message: "Route not found" });
});

export default app;
