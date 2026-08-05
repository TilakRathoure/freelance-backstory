import { type Config } from "drizzle-kit";

/** Unused — portfolio is content-module driven. Kept for scaffold compatibility. */
export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "postgresql://localhost:5432/unused",
  },
  tablesFilter: ["Reddit_*"],
} satisfies Config;
