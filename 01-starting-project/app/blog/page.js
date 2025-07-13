import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>My Blog</h1>
      <p>Welcome to my blog!</p>
      <p>
        <Link href="/blog/post-1">Read my first post</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Read my second post</Link>
      </p>
    </main>
  );
}
