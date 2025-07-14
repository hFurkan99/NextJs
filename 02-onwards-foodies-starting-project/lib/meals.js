import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  const stmt = db.prepare("SELECT * FROM meals");
  //   throw new Error("Database query failed");
  return stmt.all();
}

export function getMealBySlug(slug) {
  //   await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?");
  const meal = stmt.get(slug);
  return meal;
}
