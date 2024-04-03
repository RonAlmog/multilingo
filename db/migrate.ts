import "dotenv/config";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function main() {
  try {
    console.log("migration started");
    await migrate(db, { migrationsFolder: "./migrations" });
  } catch (error) {
    console.error("Error during migration:", error);
    process.exit(1);
  }
}

main();
