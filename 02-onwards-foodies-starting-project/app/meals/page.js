import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/share">Share Your Meal</Link>
      </p>
      <p>
        <Link href="/meals/meal-1">View Meal Details</Link>
      </p>
    </main>
  );
}
