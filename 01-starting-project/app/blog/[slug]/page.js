export default function BlogPostPage({ params }) {
  const { slug } = params;
  return (
    <main>
      <h1>Blog Post: {slug}</h1>
      <p>This is the content of the blog post with slug: {slug}</p>
    </main>
  );
}
