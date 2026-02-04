import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || "pern_auth",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD,
  ssl: false, // 🔥 IMPORTANT for local Windows Postgres
});

// 🔎 HARD CONNECTION TEST (runs once at startup)
(async () => {
  try {
    const res = await pool.query("SELECT 1");
    console.log("✅ Connected to PostgreSQL");
  } catch (err) {
    console.error("❌ PostgreSQL connection failed:", err.message);
  }
})();

pool.on("error", (err) => {
  console.error("Unexpected PostgreSQL error", err);
});

export default pool;
