"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmit() {
  const { pending } = useFormStatus();

  if (pending) {
    return <p>Creating post...</p>;
  }

  return (
    <>
      <button disabled={pending} type="reset">
        Reset
      </button>
      <button>{pending ? "Submitting..." : "Create Post"}</button>
    </>
  );
}
