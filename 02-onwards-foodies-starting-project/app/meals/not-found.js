import Link from "next/link";
export default function NotFoundPage() {
  return (
    <main className="not-found">
      <h1>Meal Not Found</h1>
      <p>Sorry, the meal you are looking for does not exist.</p>
      <p>
        Go back to the{" "}
        <Link href="/meals" className="back-link">
          meals page
        </Link>
      </p>
    </main>
  );
}
