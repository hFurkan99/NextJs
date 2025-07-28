import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

// export const metadata = {
//   title: "All Posts",
//   description: "Browse all posts from our users.",
// };

export async function generateMetadata() {
  const posts = await getPosts();
  const numberOfPosts = posts.length;

  return {
    title: `All Posts (${numberOfPosts})`,
    description: "Browse all posts from our users.",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
