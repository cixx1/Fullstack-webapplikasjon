import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./db";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/api/leads", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Mangler name, email eller message" });
  }

  try {
    await pool.query(
      "INSERT INTO leads (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );
    return res.json({ success: true });
  } catch (err) {
    console.error("DB error:", err);
    return res.status(500).json({ error: "Kunne ikke lagre lead" });
  }
});

app.get("/api/leads", async (_req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, message, created_at FROM leads ORDER BY created_at DESC"
    );
    return res.json(result.rows);
  } catch (err) {
    console.error("DB error:", err);
    return res.status(500).json({ error: "Kunne ikke hente leads" });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`Backend lytter på http://localhost:${port}`);
});


