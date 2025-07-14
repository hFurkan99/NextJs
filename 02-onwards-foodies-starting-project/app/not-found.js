import Link from "next/link";
export default function NotFoundPage() {
  return (
    <main className="not-found">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        Go back to the{" "}
        <Link href="/" className="back-link">
          homepage
        </Link>
      </p>
    </main>
  );
}
