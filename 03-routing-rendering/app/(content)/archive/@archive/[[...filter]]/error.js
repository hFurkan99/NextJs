"use client";

export default function FilterErrorPage({ error }) {
  return (
    <div id="error">
      <h1>{error.message}</h1>
      <p>
        The filter you applied is not valid. Please check your input and try
        again.
      </p>
    </div>
  );
}
