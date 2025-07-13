export default function MealDetailPage({ params }) {
  const { mealSlug } = params;
  return (
    <main>
      <h1>Meal Detail Page</h1>
      <p>
        This is where you can view details about a specific meal.
        <br />
        Meal Slug: {mealSlug}
      </p>
    </main>
  );
}
