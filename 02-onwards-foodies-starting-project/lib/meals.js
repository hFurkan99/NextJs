import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

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

export async function saveMeal(meal) {
  const baseSlug = slugify(meal.title, { lower: true });
  const timestamp = Date.now();
  meal.slug = `${baseSlug}-${timestamp}`;
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Failed to write image file");
    }
  });

  meal.image = `/images/${fileName}`;

  const stmt = db.prepare(
    `INSERT INTO meals (slug, title, summary, instructions, image, creator, creator_email) VALUES (
      @slug,
      @title,
      @summary,
      @instructions,
      @image,
      @creator,
      @creator_email)`
  );
  stmt.run(meal);
}
