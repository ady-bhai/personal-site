import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing · Ady Mehta",
  description: "Writing on Substack.",
};

export default function Writing() {
  return (
    <div className="py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Writing</h1>
      <p>
        Read my writing on{" "}
        <a
          className="hyperlink"
          href="https://substack.com/@adymehta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Substack
        </a>
        .
      </p>
    </div>
  );
}
