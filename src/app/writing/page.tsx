import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing · Ady Mehta",
  description: "Essays on this site and writing on Substack.",
};

export default function Writing() {
  return (
    <div className="py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Writing</h1>

      <h2 className="text-lg sm:text-xl font-bold mt-8 mb-3 sm:mt-10 sm:mb-4">
        On this site
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-8 sm:mb-10">
        <li>
          <Link href="/writing/i-miss-her-guys" className="hyperlink font-normal">
            I miss her guys
          </Link>
        </li>
        <li>
          <Link
            href="/writing/open-weights-power-and-catastrophic-risk"
            className="hyperlink font-normal"
          >
            Open Weights, Power, and Catastrophic Risk
          </Link>
        </li>
        <li>
          <Link
            href="/writing/export-controls-ai-safety"
            className="hyperlink font-normal"
          >
            What Export Controls Actually Buy AI Safety
          </Link>
        </li>
        <li>
          <Link
            href="/writing/nexus-ai-creative-destruction"
            className="hyperlink font-normal"
          >
            Nexus: How AI and Creative Destruction are Changing the World
          </Link>
        </li>
        <li>
          <Link
            href="/writing/consider-ai-safety-grantmaking-early-career"
            className="hyperlink font-normal"
          >
            Consider AI safety grantmaking, even early in your career
          </Link>
        </li>
        <li>
          <Link
            href="/writing/one-on-one-trajectory"
            className="hyperlink font-normal"
          >
            How do we close the Junior {'<>'} Senior talent gap™?
          </Link>
        </li>
        <li>
          <Link
            href="/writing/introducing-career-workshops-ai-safety-grantmaking"
            className="hyperlink font-normal"
          >
            Introducing Career Workshops for AI Safety Grantmaking
          </Link>
        </li>
      </ul>

      <h2 className="text-lg sm:text-xl font-bold mt-8 mb-3 sm:mt-10 sm:mb-4">
        Elsewhere
      </h2>
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
