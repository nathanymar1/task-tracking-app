import { neon } from "@neondatabase/serverless";
import "dotenv/config";

const { DATABASE_URL } = process.env;

export const sql = neon(DATABASE_URL);
