import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// export const revalidate = 5; // This will revalidate the page every 5 seconds
// export const dynamic = "force-dynamic"; // {cache: no store} (no caching for this page)

export default async function MessagesPage() {
  // unstable_noStore(); // Disable caching for this page and its children
  // const response = await fetch("http://localhost:8080/messages", {
  //   next: {
  //     revalidate: 30, // Revalidate every 30 seconds
  //     tags: ["msg"], // Tag for cache invalidation
  //   },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
